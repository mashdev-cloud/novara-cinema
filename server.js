/**
 * Novara Movie API Server
 * Custom REST API for Novara Movie Website
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'novara-secret-key-2024';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Load movie data
const moviesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'api', 'data', 'movies.json'), 'utf-8'));
const movies = moviesData.movies;
const genres = moviesData.genres;

// Load user data
const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'api', 'data', 'users.json'), 'utf-8'));
const users = usersData.users;

// Helper function to save users data
function saveUsersData() {
    fs.writeFileSync(path.join(__dirname, 'api', 'data', 'users.json'), JSON.stringify({ users }, null, 2));
}

// Helper function to save movies data
function saveMoviesData() {
    fs.writeFileSync(path.join(__dirname, 'api', 'data', 'movies.json'), JSON.stringify({ movies: movies, genres }, null, 2));
}

// ============ JWT MIDDLEWARE ============

// Verify JWT token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ success: false, error: 'Access denied. No token provided.' });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, error: 'Invalid or expired token.' });
    }
}

// Verify admin role
function authenticateAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ success: false, error: 'Access denied. Admin privileges required.' });
    }
    next();
}

// ============ AUTHENTICATION ROUTES ============

// Register new user
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, error: 'Username, email, and password are required.' });
        }
        
        // Check if user already exists
        const existingUser = users.find(u => u.email === email || u.username === username);
        if (existingUser) {
            return res.status(400).json({ success: false, error: 'User with this email or username already exists.' });
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create new user
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password: hashedPassword,
            role: 'user',
            created_at: new Date().toISOString(),
            favorites: [],
            watchlist: [],
            ratings: []
        };
        
        users.push(newUser);
        saveUsersData();
        
        // Generate token
        const token = jwt.sign(
            { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            },
            token
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to register user', details: error.message });
    }
});

// Login user
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Email and password are required.' });
        }
        
        // Find user
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(400).json({ success: false, error: 'Invalid email or password.' });
        }
        
        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, error: 'Invalid email or password.' });
        }
        
        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.json({
            success: true,
            message: 'Login successful',
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            token
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to login', details: error.message });
    }
});

// Get current user profile
app.get('/api/auth/me', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found.' });
    }
    
    res.json({
        success: true,
        data: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            created_at: user.created_at,
            favorites: user.favorites,
            watchlist: user.watchlist,
            ratings: user.ratings
        }
    });
});

// ============ USER PROFILE ROUTES ============

// Add movie to favorites
app.post('/api/user/favorites', authenticateToken, (req, res) => {
    try {
        const { movieId } = req.body;
        const user = users.find(u => u.id === req.user.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }
        
        // Check if movie exists
        const movie = movies.find(m => m.id === movieId);
        if (!movie) {
            return res.status(404).json({ success: false, error: 'Movie not found.' });
        }
        
        // Add to favorites if not already there
        if (!user.favorites.includes(movieId)) {
            user.favorites.push(movieId);
            saveUsersData();
        }
        
        res.json({
            success: true,
            message: 'Movie added to favorites',
            data: { favorites: user.favorites }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to add to favorites' });
    }
});

// Remove movie from favorites
app.delete('/api/user/favorites/:movieId', authenticateToken, (req, res) => {
    try {
        const movieId = parseInt(req.params.movieId);
        const user = users.find(u => u.id === req.user.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }
        
        user.favorites = user.favorites.filter(id => id !== movieId);
        saveUsersData();
        
        res.json({
            success: true,
            message: 'Movie removed from favorites',
            data: { favorites: user.favorites }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to remove from favorites' });
    }
});

// Get user favorites
app.get('/api/user/favorites', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found.' });
    }
    
    const favoriteMovies = movies.filter(m => user.favorites.includes(m.id));
    
    res.json({
        success: true,
        data: favoriteMovies
    });
});

// Add movie to watchlist
app.post('/api/user/watchlist', authenticateToken, (req, res) => {
    try {
        const { movieId } = req.body;
        const user = users.find(u => u.id === req.user.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }
        
        // Check if movie exists
        const movie = movies.find(m => m.id === movieId);
        if (!movie) {
            return res.status(404).json({ success: false, error: 'Movie not found.' });
        }
        
        // Add to watchlist if not already there
        if (!user.watchlist.includes(movieId)) {
            user.watchlist.push(movieId);
            saveUsersData();
        }
        
        res.json({
            success: true,
            message: 'Movie added to watchlist',
            data: { watchlist: user.watchlist }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to add to watchlist' });
    }
});

// Remove movie from watchlist
app.delete('/api/user/watchlist/:movieId', authenticateToken, (req, res) => {
    try {
        const movieId = parseInt(req.params.movieId);
        const user = users.find(u => u.id === req.user.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }
        
        user.watchlist = user.watchlist.filter(id => id !== movieId);
        saveUsersData();
        
        res.json({
            success: true,
            message: 'Movie removed from watchlist',
            data: { watchlist: user.watchlist }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to remove from watchlist' });
    }
});

// Get user watchlist
app.get('/api/user/watchlist', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found.' });
    }
    
    const watchlistMovies = movies.filter(m => user.watchlist.includes(m.id));
    
    res.json({
        success: true,
        data: watchlistMovies
    });
});

// Rate a movie
app.post('/api/user/ratings', authenticateToken, (req, res) => {
    try {
        const { movieId, rating, review } = req.body;
        const user = users.find(u => u.id === req.user.id);
        
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found.' });
        }
        
        // Validate rating
        if (!rating || rating < 1 || rating > 10) {
            return res.status(400).json({ success: false, error: 'Rating must be between 1 and 10.' });
        }
        
        // Check if movie exists
        const movie = movies.find(m => m.id === movieId);
        if (!movie) {
            return res.status(404).json({ success: false, error: 'Movie not found.' });
        }
        
        // Remove existing rating for this movie if any
        user.ratings = user.ratings.filter(r => r.movieId !== movieId);
        
        // Add new rating
        user.ratings.push({
            movieId,
            rating,
            review: review || '',
            created_at: new Date().toISOString()
        });
        saveUsersData();
        
        res.json({
            success: true,
            message: 'Rating submitted successfully',
            data: { ratings: user.ratings }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to submit rating' });
    }
});

// Get user ratings
app.get('/api/user/ratings', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found.' });
    }
    
    // Include movie details with ratings
    const ratingsWithMovies = user.ratings.map(r => {
        const movie = movies.find(m => m.id === r.movieId);
        return {
            ...r,
            movie
        };
    });
    
    res.json({
        success: true,
        data: ratingsWithMovies
    });
});

// ============ ADMIN ROUTES ============

// Add new movie (admin only)
app.post('/api/admin/movies', authenticateToken, authenticateAdmin, (req, res) => {
    try {
        const {
            title, slug, poster, backdrop, release_year, genre, rating,
            duration, synopsis, director, cast, trailer_url, trending,
            new_release, featured
        } = req.body;
        
        // Validate required fields
        if (!title || !slug || !poster || !release_year || !genre || !duration || !synopsis) {
            return res.status(400).json({ success: false, error: 'Missing required fields.' });
        }
        
        // Check if slug already exists
        const existingMovie = movies.find(m => m.slug === slug);
        if (existingMovie) {
            return res.status(400).json({ success: false, error: 'Movie with this slug already exists.' });
        }
        
        // Create new movie
        const newMovie = {
            id: Math.max(...movies.map(m => m.id)) + 1,
            title,
            slug,
            poster,
            backdrop: backdrop || poster,
            release_year,
            genre: genre || [],
            rating: rating || 0,
            duration,
            synopsis,
            director: director || '',
            cast: cast || [],
            trailer_url: trailer_url || '',
            trending: trending || false,
            new_release: new_release || false,
            featured: featured || false
        };
        
        movies.push(newMovie);
        saveMoviesData();
        
        res.status(201).json({
            success: true,
            message: 'Movie added successfully',
            data: newMovie
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to add movie', details: error.message });
    }
});

// Update movie (admin only)
app.put('/api/admin/movies/:id', authenticateToken, authenticateAdmin, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === id);
        
        if (movieIndex === -1) {
            return res.status(404).json({ success: false, error: 'Movie not found.' });
        }
        
        const updatedMovie = { ...movies[movieIndex], ...req.body, id };
        movies[movieIndex] = updatedMovie;
        saveMoviesData();
        
        res.json({
            success: true,
            message: 'Movie updated successfully',
            data: updatedMovie
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to update movie', details: error.message });
    }
});

// Delete movie (admin only)
app.delete('/api/admin/movies/:id', authenticateToken, authenticateAdmin, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === id);
        
        if (movieIndex === -1) {
            return res.status(404).json({ success: false, error: 'Movie not found.' });
        }
        
        const deletedMovie = movies.splice(movieIndex, 1)[0];
        saveMoviesData();
        
        res.json({
            success: true,
            message: 'Movie deleted successfully',
            data: deletedMovie
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to delete movie', details: error.message });
    }
});

// Get all users (admin only)
app.get('/api/admin/users', authenticateToken, authenticateAdmin, (req, res) => {
    try {
        const allUsers = users.map(u => ({
            id: u.id,
            username: u.username,
            email: u.email,
            role: u.role,
            created_at: u.created_at,
            favorites_count: u.favorites.length,
            watchlist_count: u.watchlist.length,
            ratings_count: u.ratings.length
        }));
        
        res.json({
            success: true,
            data: allUsers
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to fetch users' });
    }
});

// ============ API ENDPOINTS ============

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'Novara API is running',
        timestamp: new Date().toISOString()
    });
});

// Get all movies with optional filters
app.get('/api/movies', (req, res) => {
    try {
        let result = [...movies];
        
        // Filter by genre
        if (req.query.genre) {
            const genre = req.query.genre.toLowerCase();
            result = result.filter(movie => 
                movie.genre.some(g => g.toLowerCase().includes(genre))
            );
        }
        
        // Filter by year
        if (req.query.year) {
            const year = parseInt(req.query.year);
            result = result.filter(movie => movie.release_year === year);
        }
        
        // Filter by year range
        if (req.query.year_from || req.query.year_to) {
            const yearFrom = req.query.year_from ? parseInt(req.query.year_from) : 1900;
            const yearTo = req.query.year_to ? parseInt(req.query.year_to) : 2030;
            result = result.filter(movie => 
                movie.release_year >= yearFrom && movie.release_year <= yearTo
            );
        }
        
        // Filter by rating (minimum rating)
        if (req.query.min_rating) {
            const minRating = parseFloat(req.query.min_rating);
            result = result.filter(movie => movie.rating >= minRating);
        }
        
        // Search by title
        if (req.query.search) {
            const search = req.query.search.toLowerCase();
            result = result.filter(movie => 
                movie.title.toLowerCase().includes(search) ||
                movie.synopsis.toLowerCase().includes(search) ||
                movie.director.toLowerCase().includes(search)
            );
        }
        
        // Sort results
        if (req.query.sort) {
            const sortField = req.query.sort;
            const sortOrder = req.query.order === 'desc' ? -1 : 1;
            
            if (sortField === 'rating') {
                result.sort((a, b) => (b.rating - a.rating) * sortOrder);
            } else if (sortField === 'year') {
                result.sort((a, b) => (b.release_year - a.release_year) * sortOrder);
            } else if (sortField === 'title') {
                result.sort((a, b) => a.title.localeCompare(b.title) * sortOrder);
            }
        }
        
        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        
        const paginatedResult = result.slice(startIndex, endIndex);
        
        res.json({
            success: true,
            data: paginatedResult,
            pagination: {
                page,
                limit,
                total: result.length,
                totalPages: Math.ceil(result.length / limit),
                hasNext: endIndex < result.length,
                hasPrev: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch movies',
            details: error.message 
        });
    }
});

// Get featured movies
app.get('/api/movies/featured', (req, res) => {
    try {
        const featured = movies.filter(movie => movie.featured);
        res.json({
            success: true,
            data: featured
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch featured movies' 
        });
    }
});

// Get trending movies
app.get('/api/movies/trending', (req, res) => {
    try {
        const trending = movies.filter(movie => movie.trending);
        res.json({
            success: true,
            data: trending
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch trending movies' 
        });
    }
});

// Get new releases
app.get('/api/movies/new-releases', (req, res) => {
    try {
        const newReleases = movies.filter(movie => movie.new_release);
        res.json({
            success: true,
            data: newReleases
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch new releases' 
        });
    }
});

// Get movie by ID
app.get('/api/movies/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const movie = movies.find(m => m.id === id);
        
        if (!movie) {
            return res.status(404).json({ 
                success: false, 
                error: 'Movie not found' 
            });
        }
        
        res.json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch movie' 
        });
    }
});

// Get movie by slug
app.get('/api/movies/slug/:slug', (req, res) => {
    try {
        const slug = req.params.slug;
        const movie = movies.find(m => m.slug === slug);
        
        if (!movie) {
            return res.status(404).json({ 
                success: false, 
                error: 'Movie not found' 
            });
        }
        
        res.json({
            success: true,
            data: movie
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch movie' 
        });
    }
});

// Get all genres
app.get('/api/genres', (req, res) => {
    try {
        res.json({
            success: true,
            data: genres
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch genres' 
        });
    }
});

// Get movies by genre
app.get('/api/genres/:genre/movies', (req, res) => {
    try {
        const genre = req.params.genre.toLowerCase();
        const genreMovies = movies.filter(movie => 
            movie.genre.some(g => g.toLowerCase() === genre)
        );
        
        res.json({
            success: true,
            data: genreMovies,
            genre: req.params.genre
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch genre movies' 
        });
    }
});

// Get movies by year
app.get('/api/year/:year', (req, res) => {
    try {
        const year = parseInt(req.params.year);
        const yearMovies = movies.filter(movie => movie.release_year === year);
        
        res.json({
            success: true,
            data: yearMovies,
            year
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch movies by year' 
        });
    }
});

// Get available years
app.get('/api/years', (req, res) => {
    try {
        const years = [...new Set(movies.map(m => m.release_year))].sort((a, b) => b - a);
        res.json({
            success: true,
            data: years
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch years' 
        });
    }
});

// Get random movies (for recommendations)
app.get('/api/movies/random', (req, res) => {
    try {
        const count = parseInt(req.query.count) || 4;
        const shuffled = [...movies].sort(() => 0.5 - Math.random());
        const randomMovies = shuffled.slice(0, count);
        
        res.json({
            success: true,
            data: randomMovies
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch random movies' 
        });
    }
});

// Get movie statistics
app.get('/api/stats', (req, res) => {
    try {
        const stats = {
            totalMovies: movies.length,
            totalGenres: genres.length,
            years: [...new Set(movies.map(m => m.release_year))].sort((a, b) => b - a),
            averageRating: (movies.reduce((sum, m) => sum + m.rating, 0) / movies.length).toFixed(1),
            topRated: movies.sort((a, b) => b.rating - a.rating).slice(0, 5),
            genreDistribution: genres.map(genre => ({
                genre,
                count: movies.filter(m => m.genre.includes(genre)).length
            }))
        };
        
        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: 'Failed to fetch statistics' 
        });
    }
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'hero-landing.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ============ START SERVER ============
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🎬 Novara API Server is Running!                       ║
║                                                           ║
║   Local:    http://localhost:${PORT}                        ║
║   Health:   http://localhost:${PORT}/api/health            ║
║   Movies:   http://localhost:${PORT}/api/movies            ║
║   Featured: http://localhost:${PORT}/api/movies/featured   ║
║   Trending: http://localhost:${PORT}/api/movies/trending   ║
║   Genres:   http://localhost:${PORT}/api/genres            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;