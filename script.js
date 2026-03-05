// Movie Data with Real Movie Names and Posters from folder
const movies = [
    {
        id: 1,
        title: "The Bee Keeper",
        year: 2024,
        rating: 8.5,
        duration: "1h 45m",
        genre: ["Action", "Crime","Thriller"],
        category: "action",
        poster: "poster images/bee keeper.jpg",
        quality: "4K",
        description: "A former operative of a powerful organization embarks on a brutal campaign for vengeance..",
        director: "David Ayer",
        stars: ["Jason Statham", "Emmy Raver-Lampman", "Bobby Naderi"],
        trailer: "https://www.youtube.com/watch?v=SzINZZ6iqxY",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 2,
        title: "Alienoid: The Return of the Future",
        year: 2024,
        rating: 8.4,
        duration: "2h 2m",
        genre: ["Action", "Sci-Fi","fantasy"],
        category: "action",
        poster: "poster images/alien.jpg",
        quality: "4K",
        description: "Ancient Taoists travel through time and space in an effort to obtain a divine sword.",
        director: "Choi Dong-hoon",
        stars: ["Kim Tae-ri", "Lee Jung-jae", "Do Kyung-soo"],
        trailer: "https://www.youtube.com/watch?v=uiutkWVjXKI",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 3,
        title: "The Karate Kid Legends",
        year: 2025 ,
        rating: 7.8,
        duration: "1h 34m",
        genre: ["Action", "Drama"],
        category: "action",
        poster: "poster images/karate kid.png",
        quality: "4K",
        description: " After kung fu prodigy Li Fong relocates to New York City, he attracts unwanted attention from a local karate champion and embarks on a journey to enter the ultimate karate competition with the help of Mr. Han and Daniel LaRusso.",
        director: "Jonathan Entwistle",
        stars: ["Jackie Chan","Ben Wang", "Joshua Jackson"],
        trending: true,
        trailer: "https://www.youtube.com/watch?v=LhRXf-yEQqA&t=3s",
        new: false,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 4,
        title: "The Matrix Resurrections",
        year: 2021,
        rating: 8.7,
        duration: "2h 28m",
        genre: ["Sci-Fi", "Action"],
        category: "sci-fi",
        poster: "poster images/matrix.png",
        quality: "4K",
        description: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.",
        director: "Lana Wachowski",
        stars: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
        trending: true,
        trailer: "https://www.youtube.com/watch?v=9ix7TUGVYIo",
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 5,
        title: "Predator",
        year: 2025,
        rating: 7.8,
        duration: "1h 47m",
        genre: ["Action", "Sci-Fi"],
        category: "action",
        poster: "poster images/predator.png",
        quality: "HD",
        description: "A young Predator outcast from his clan finds an unlikely ally on his journey in search of the ultimate adversary.",
        director: "Dan Trachtenberg",
        stars: ["Elle Fanning", "Dimitrius Schuster-Koloamatangi", "Ravi Narayan"],
        trailer: "https://www.youtube.com/watch?v=43R9l7EkJwE",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 6,
        title: "Spider-Man: No Way Home",
        year: 2021,
        rating: 7.0,
        duration: "2h 28m",
        genre: ["Sci-Fi", "Action"],
        category: "Sci-Fi",
        poster: "poster images/spider-man .png",
        quality: "4K",
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        director: "Jon Watts",
        stars: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
        trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 7,
        title: "Badland Hunters",
        year: 2024,
        rating: 8.2,
        duration: "1h 47m",
        genre: ["Action", "Drama", "Adventure"],
        category: "action",
        poster: "poster images/badlands.jpg",
        quality: "4K",
        description: "When an earthquake turns Seoul into a lawless badland, a fearless huntsman goes on to rescue a teenager from a mad doctor who held the teenager captive in a camp full of dangerous cultists.",
        director: "Heo Myeong-haeng",
        stars: ["Ma Dong-seok", "Lee Hee-joon", "Lee Jung-hyun"],
        trailer: "https://www.youtube.com/watch?v=hKbo-ZKdSqw",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 8,
        title: "Trolls 2",
        year: 2025,
        rating: 6.5,
        duration: "1h 45m",
        genre: ["Action", "Adventure", "Drama"],
        category: "adventure",
        poster: "poster images/trolls2.png",
        quality: "4K",
        description: " Nora, Andreas and Captain Kris leap back into action when a dangerous new troll awakes - and this time they'll need more help to take it down.",
        director: "Roar Uthaug",
        stars: ["Ine Marie Wilmann", "Kim Falck", "Mads Sjøgård Pettersen"],
        trending: false,
        new: false,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 9,
        title: "Tron: Ares",
        year: 2025,
        rating: 6.8,
        duration: "1h 59m",
        genre: ["Sci-Fi", "Action"],
        category: "sci-fi",
        poster: "poster images/tron.jpg",
        quality: "4K",
        description: "A highly sophisticated program, Ares, is sent from the digital world into the real world on a dangerous mission.",
        director: "Joachim Rønning",
        stars: ["Jared Leto", "Greta Lee", "Jeff Bridges"],
        trailer: "https://www.youtube.com/watch?v=YShVEXb7-ic",
        trending: true,
        new: false,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 10,
        title: "Zootopia 2",
        year: 2025,
        rating: 8.0,
        duration: "1h 48m",
        genre: ["Comedy", "Animation", "Action"],
        category: "comedy",
        poster: "poster images/zootpia.png",
        quality: "4K",
        description: " Brave rabbit cop Judy Hopps and her friend, the fox Nick Wilde, team up again to crack a new case, the most perilous and intricate of their careers.",
        director: "Jared Bush, Byron Howard",
        stars: ["Ginnifer Goodwin", "Jason Bateman", "Ke Huy Quan"],
        trailer: "https://www.youtube.com/watch?v=BjkIOU5PhyQ",
        trending: true,
        new: true,
        series: false,
        recentlyAdded: false,
        original: false
    },
    {
        id: 12,
        title: "Avatar: Fire and Ash",
        year: 2025,
        rating: 9.0,
        duration: "3h 17m",
        genre: ["Action", "Sci-Fi", "Adventure"],
        category: "action",
        poster: "poster images/avator fire and ash.png",
        quality: "4K",
        description: "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges.",
        director: "James Cameron",
        stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        trailer: "https://www.youtube.com/watch?v=Ma1x7ikpid8",
        trending: true,
        new: true,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 13,
        title: "Eternity",
        year: 2025,
        rating: 8.2,
        duration: "1h 54m",
        genre: ["Drama", "Fantasy", "Romance"],
        category: "drama",
        poster: "poster images/eternity.png",
        quality: "4K",
        description: "In an afterlife where souls have one week to decide where to spend eternity, Joan is faced with the impossible choice between the man she spent her life with and her first love, who died young and has waited decades for her to arrive.",
        director: "David Freyne",
        stars: ["Miles Teller", "Elizabeth Olsen", "Callum Turner"],
        trailer: "https://www.youtube.com/watch?v=irXTps1REHU",
        trending: false,
        new: true,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 14,
        title: "The Rip",
        year: 2026,
        rating: 7.8,
        duration: "1h 53m",
        genre: ["Action", "Drama", "Crime"],
        category: "action",
        poster: "poster images/rip.png",
        quality: "4K",
        description: "A group of Miami cops discovers a stash of millions in cash, leading to distrust as outsiders learn about the huge seizure, making them question who to rely on.",
        director: "Joe Carnahan",
        stars: ["Matt Damon", "Ben Affleck", "Steven Yeun"],
        trailer: "https://www.youtube.com/watch?v=ARU2WHyOPxE",
        trending: false,
        new: true,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 15,
        title: "Mercy",
        year: 2026,
        rating: 8.0,
        duration: "1h 39m",
        genre: ["Action", "Drama", "Crime" , "Sci-Fi"],
        category: "action",
        poster: "poster images/mercy.png",
        quality: "4K",
        description: "Set in the near future, a detective accused of murdering his wife has 90 minutes to prove his innocence to an advanced AI judge.",
        director: "Timur Bekmambetov",
        stars: ["Chris Pratt", "Rebecca Ferguson", "Kali Reis"],
        trailer: "https://www.youtube.com/watch?v=07823456789",
        trending: false,
        new: true,
        series: false,
        recentlyAdded: true,
        original: false
    },
    {
        id: 16,
        title: "Akhanda 2: Thaandavam",
        year: 2025,
        rating: 8.8,
        duration: "2h 44m",
        genre: ["Action", "Drama", "Spiritual"],
        category: "action",
        poster: "poster images/akhanda.png",
        quality: "4K",
        description: "A heartwarming journey explores the connection between children's innocence, the natural world, and spiritual faith as communities strive for progress.",
        director: "Boyapati Srinu",
        stars: ["Nandamuri Balakrishna", "Aadhi", "Samyuktha Menon"],
        trailer: "https://www.youtube.com/watch?v=qlCBzdZSnlY",
        trending: true,
        new: true,
        series: false,
        recentlyAdded: true,
        original: false
    }
];

// My List (sample data)
const myList = [movies[0], movies[1], movies[3], movies[5]];

// Viewing History (sample data)
const viewingHistory = [
    { movie: movies[1], progress: 75, lastWatched: "2 hours ago" },
    { movie: movies[3], progress: 45, lastWatched: "1 day ago" },
    { movie: movies[5], progress: 100, lastWatched: "3 days ago" },
    { movie: movies[0], progress: 20, lastWatched: "1 week ago" }
];

// User preferences
const userPreferences = {
    autoplay: true,
    subtitles: true,
    quality: "4K",
    notifications: true
};

// Current page
let currentPage = 'home';

// DOM Elements
const trendingMoviesEl = document.getElementById('trendingMovies');
const newMoviesEl = document.getElementById('newMovies');
const seriesMoviesEl = document.getElementById('seriesMovies');
const myListMoviesEl = document.getElementById('myListMovies');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const categoryBtns = document.querySelectorAll('.category-btn');
const modal = document.getElementById('movieModal');
const modalClose = document.getElementById('modalClose');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const pageLinks = document.querySelectorAll('[data-page]');
const notificationBtn = document.getElementById('notificationBtn');
const notificationDropdown = document.getElementById('notificationDropdown');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Create Movie Card
function createMovieCard(movie) {
    const watchedClass = movie.watched ? 'watched' : '';
    const eyeIcon = movie.watched ? 'fa-eye-slash' : 'fa-eye';
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
                <button class="watched-toggle ${watchedClass}" onclick="toggleWatched(${movie.id}); event.stopPropagation();" title="${movie.watched ? 'Mark as not watched' : 'Mark as watched'}">
                    <i class="fas ${eyeIcon}"></i>
                </button>
                <div class="movie-overlay">
                    <div class="movie-actions">
                        <button class="movie-action-btn" title="Play"><i class="fas fa-play"></i></button>
                        <button class="movie-action-btn" title="Add to List" onclick="addToList(${movie.id}); event.stopPropagation();"><i class="fas fa-plus"></i></button>
                        <button class="movie-action-btn" title="Like"><i class="fas fa-thumbs-up"></i></button>
                    </div>
                </div>
                <div class="movie-rating-badge">
                    <i class="fas fa-star"></i> ${movie.rating}
                </div>
                <span class="movie-quality">${movie.quality}</span>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span><i class="fas fa-clock"></i> ${movie.duration}</span>
                    <span class="movie-genre">${movie.genre[0]}</span>
                </div>
            </div>
        </div>
    `;
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }
    
    if (searchTerm.length < 1) {
        return;
    }
    
    const filtered = movies.filter(m => 
        m.title.toLowerCase().includes(searchTerm) ||
        m.genre.some(g => g.toLowerCase().includes(searchTerm)) ||
        m.year.toString().includes(searchTerm)
    );
    
    if (filtered.length > 0) {
        searchResults.innerHTML = filtered.map(movie => `
            <div class="search-result-item" data-id="${movie.id}">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="search-result-info">
                    <h5>${movie.title}</h5>
                    <p>${movie.year} • ${movie.genre[0]} • ${movie.rating} ★</p>
                </div>
            </div>
        `).join('');
        
        // Add click listeners to search results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const movieId = parseInt(item.dataset.id);
                const movie = movies.find(m => m.id === movieId);
                if (movie) {
                    openModal(movie);
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                }
            });
        });
    } else {
        searchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>No movies found for "${searchTerm}"</p>
            </div>
        `;
    }
    
    searchResults.classList.add('active');
}

// Render Movies - Home Page
function renderHomeMovies() {
    // Trending Movies - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const trending = movies.filter(m => m.trending).sort((a, b) => b.year - a.year);
    trendingMoviesEl.innerHTML = trending.map(createMovieCard).join('');
    
    // New Movies - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const newReleases = movies.filter(m => m.new).sort((a, b) => b.year - a.year);
    newMoviesEl.innerHTML = newReleases.map(createMovieCard).join('');
    
    // TV Series - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const seriesMovies = movies.slice(0, 8).sort((a, b) => b.year - a.year);
    seriesMoviesEl.innerHTML = seriesMovies.map(createMovieCard).join('');
    
    // My List - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const sortedMyList = myList.sort((a, b) => b.year - a.year);
    myListMoviesEl.innerHTML = sortedMyList.map(createMovieCard).join('');
    
    // Add click listeners to movie cards
    addCardClickListeners();
}

// Render Movies - All Movies Page
function renderAllMovies() {
    const allMoviesEl = document.getElementById('allMovies');
    if (allMoviesEl) {
        allMoviesEl.innerHTML = movies.map(createMovieCard).join('');
        addCardClickListeners();
    }
}

// Render Movies - TV Shows Page
function renderTVShows() {
    const tvShowsEl = document.getElementById('tvShowsList');
    if (tvShowsEl) {
        // For demo, show some movies as TV shows
        tvShowsEl.innerHTML = movies.slice(0, 6).map(createMovieCard).join('');
        addCardClickListeners();
    }
}

// Render Movies - Originals Page
function renderOriginals() {
    const originalsEl = document.getElementById('originalsMovies');
    if (originalsEl) {
        const originals = movies.filter(m => m.original || m.id === 11);
        originalsEl.innerHTML = originals.map(createMovieCard).join('');
        addCardClickListeners();
    }
}

// Render Movies - Recently Added Page
function renderRecentlyAdded() {
    const recentlyEl = document.getElementById('recentlyAddedList');
    if (recentlyEl) {
        const recent = movies.filter(m => m.recentlyAdded);
        recentlyEl.innerHTML = recent.map(createMovieCard).join('');
        addCardClickListeners();
    }
}

// Render My List Page
function renderMyListPage() {
    const myListPageEl = document.getElementById('myListPage');
    if (myListPageEl) {
        myListPageEl.innerHTML = myList.sort((a, b) => b.year - a.year).map(createMovieCard).join('');
        addCardClickListeners();
    }
}

// Render Viewing History
function renderViewingHistory() {
    const historyEl = document.getElementById('viewingHistory');
    if (historyEl) {
        if (viewingHistory.length === 0) {
            historyEl.innerHTML = '<p style="color: var(--text-gray);">No viewing history yet. Start watching!</p>';
            return;
        }
        
        historyEl.innerHTML = viewingHistory.map(item => `
            <div class="history-item" data-id="${item.movie.id}">
                <img src="${item.movie.poster}" alt="${item.movie.title}">
                <div class="history-info">
                    <h5>${item.movie.title}</h5>
                    <p>${item.lastWatched}</p>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${item.progress}%"></div>
                </div>
                <button class="history-remove" onclick="removeFromHistory(${item.movie.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }
}

// Clear viewing history
function clearHistory() {
    viewingHistory.length = 0;
    renderViewingHistory();
    alert('Viewing history cleared!');
}

// Remove single item from history
function removeFromHistory(movieId) {
    const index = viewingHistory.findIndex(h => h.movie.id === movieId);
    if (index > -1) {
        viewingHistory.splice(index, 1);
        renderViewingHistory();
    }
}

// Add click listeners to movie cards
function addCardClickListeners() {
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const movieId = parseInt(card.dataset.id);
            const movie = movies.find(m => m.id === movieId);
            if (movie) {
                openModal(movie);
            }
        });
    });
    
    // Add click listeners to play buttons in movie card overlay
    document.querySelectorAll('.movie-card .movie-action-btn[title="Play"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.movie-card');
            const movieId = parseInt(card.dataset.id);
            const movie = movies.find(m => m.id === movieId);
            if (movie) {
                currentMovie = movie;
                openVideoPlayer(movie);
            }
        });
    });
}

// Open Modal
let currentMovie = null;

// Window State Detection
let isWindowMaximized = false;
const BREAKPOINT_MAXIMIZED = 1200; // Width threshold for maximized state

// Check if window is maximized
function checkWindowState() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Check if window is at maximum size (screen dimensions)
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // Consider maximized if window takes up most of the screen
    // or if width is above our breakpoint
    const wasMaximized = isWindowMaximized;
    isWindowMaximized = (width >= BREAKPOINT_MAXIMIZED) || 
                        (width >= screenWidth * 0.9 && height >= screenHeight * 0.9);
    
    // Update modal state if changed
    if (modal && modal.classList.contains('active')) {
        updateModalForWindowState();
    }
    
    // Update indicator
    updateWindowStateIndicator();
}

// Update modal styling based on window state
function updateModalForWindowState() {
    if (!modal) return;
    
    // Remove both state classes first
    modal.classList.remove('window-maximized', 'window-restored');
    
    // Add appropriate class based on window state
    if (isWindowMaximized) {
        modal.classList.add('window-maximized');
        console.log('Window state: Maximized - Full screen layout active');
    } else {
        modal.classList.add('window-restored');
        console.log('Window state: Restored - Scrollable layout active');
    }
}

// Update window state indicator
function updateWindowStateIndicator() {
    let indicator = document.getElementById('windowStateIndicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'windowStateIndicator';
        indicator.className = 'window-state-indicator';
        document.body.appendChild(indicator);
    }
    
    if (isWindowMaximized) {
        indicator.className = 'window-state-indicator maximized visible';
        indicator.innerHTML = '<i class="fas fa-expand"></i> Maximized Mode';
    } else {
        indicator.className = 'window-state-indicator restored visible';
        indicator.innerHTML = '<i class="fas fa-compress"></i> Restored Mode';
    }
    
    // Hide indicator after 3 seconds
    setTimeout(() => {
        indicator.classList.remove('visible');
    }, 3000);
}

// Listen for window resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkWindowState, 150);
});

// Listen for window state changes (maximize/restore)
window.addEventListener('resize', checkWindowState);

// Initial check
checkWindowState();

function openModal(movie) {
    currentMovie = movie;
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalRating').textContent = movie.rating;
    document.getElementById('modalDuration').textContent = movie.duration;
    document.getElementById('modalDescription').textContent = movie.description;
    
    const genresContainer = document.getElementById('modalGenres');
    genresContainer.innerHTML = movie.genre.map(g => `<span>${g}</span>`).join('');
    
    // Director and Stars
    document.getElementById('modalDirector').textContent = movie.director || 'N/A';
    document.getElementById('modalStars').textContent = movie.stars ? movie.stars.join(', ') : 'N/A';
    
    // Show/hide trailer button based on trailer availability
    const trailerBtn = document.getElementById('watchTrailerBtn');
    if (movie.trailer) {
        trailerBtn.style.display = 'inline-flex';
    } else {
        trailerBtn.style.display = 'none';
    }
    
    // Apply window state class to modal
    updateModalForWindowState();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    searchResults.classList.remove('active');
}

// Play Movie
function playMovie() {
    if (currentMovie) {
        openVideoPlayer(currentMovie);
    } else {
        alert('No movie selected');
    }
}

// Open Video Player
function openVideoPlayer(movie) {
    const videoPlayerOverlay = document.getElementById('videoPlayerOverlay');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPlayerTitle = document.getElementById('videoPlayerTitle');
    const videoPlayerGenre = document.getElementById('videoPlayerGenre');
    const videoPlayerGenreDisplay = document.getElementById('videoPlayerGenreDisplay');
    const playPauseBtn = document.getElementById('playPauseBtn');
    
    if (videoPlayerOverlay && videoPlayer) {
        // Set movie info - Display movie name at top
        videoPlayerTitle.textContent = movie.title;
        
        // Set genre from movie data (first genre in the array)
        const genreLabel = movie.genre[0];
        videoPlayerGenre.textContent = genreLabel;
        
        // Reset play button to play icon
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.classList.remove('playing');
        }
        
        // Show overlay
        videoPlayerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Play video
        videoPlayer.play().catch(error => {
            console.log('Auto-play prevented:', error);
        });
    }
}

// Close Video Player
function closeVideoPlayer() {
    const videoPlayerOverlay = document.getElementById('videoPlayerOverlay');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoPlayerOverlay && videoPlayer) {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Watch Trailer
function watchTrailer() {
    if (currentMovie && currentMovie.trailer) {
        window.open(currentMovie.trailer, '_blank');
    }
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Category Filter
function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    const section = e.target.closest('.movies-section');
    
    // Get all category buttons in this section
    const sectionBtns = section ? section.querySelectorAll('.category-btn') : categoryBtns;
    
    // Update active button in this section
    sectionBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Get the movies grid in this section
    const grid = section ? section.querySelector('.movies-grid') : document.getElementById('allMovies');
    
    if (!grid) return;
    
    // Get the grid ID to determine what movies to show
    const gridId = grid.id;
    
    // Filter movies based on category
    let filteredMovies = [];
    
    if (gridId === 'trendingMovies') {
        filteredMovies = movies.filter(m => m.trending);
    } else if (gridId === 'newMovies') {
        filteredMovies = movies.filter(m => m.new);
    } else if (gridId === 'seriesMovies') {
        filteredMovies = movies.slice(0, 8);
    } else if (gridId === 'myListMovies') {
        filteredMovies = [...myList];
    } else if (gridId === 'allMovies') {
        filteredMovies = [...movies];
    } else if (gridId === 'tvShowsList') {
        filteredMovies = movies.slice(0, 6);
    } else if (gridId === 'originalsMovies') {
        filteredMovies = movies.filter(m => m.original || m.id === 11);
    } else if (gridId === 'recentlyAddedList') {
        filteredMovies = movies.filter(m => m.recentlyAdded);
    } else if (gridId === 'myListPage') {
        filteredMovies = [...myList];
    } else {
        filteredMovies = [...movies];
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredMovies = filteredMovies.filter(m => m.category === category);
    }
    
    // Sort by year (most recent first)
    filteredMovies = filteredMovies.sort((a, b) => b.year - a.year);
    
    // Render filtered movies
    grid.innerHTML = filteredMovies.map(createMovieCard).join('');
    addCardClickListeners();
}

// Category Scroll Arrows
function initCategoryScrollArrows() {
    document.querySelectorAll('.category-scroll-left').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.closest('.movies-section');
            const container = section.querySelector('.categories-container');
            container.scrollBy({ left: -200, behavior: 'smooth' });
        });
    });
    
    document.querySelectorAll('.category-scroll-right').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.closest('.movies-section');
            const container = section.querySelector('.categories-container');
            container.scrollBy({ left: 200, behavior: 'smooth' });
        });
    });
}

// Add to List
function addToList(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie && !myList.find(m => m.id === movieId)) {
        myList.push(movie);
        
        // Update home page my list - Sorted by year (most recent first)
        myListMoviesEl.innerHTML = myList.sort((a, b) => b.year - a.year).map(createMovieCard).join('');
        
        // Update my list page if it exists
        const myListPageEl = document.getElementById('myListPage');
        if (myListPageEl) {
            myListPageEl.innerHTML = myList.sort((a, b) => b.year - a.year).map(createMovieCard).join('');
        }
        
        addCardClickListeners();
        alert(`${movie.title} added to your list!`);
    }
}

// Toggle Watched Status
function toggleWatched(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        movie.watched = !movie.watched;
        
        // Refresh all movie displays
        refreshAllMovies();
    }
}

// Refresh all movie displays
function refreshAllMovies() {
    // Trending Movies - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const trending = movies.filter(m => m.trending).sort((a, b) => b.year - a.year);
    if (trendingMoviesEl) trendingMoviesEl.innerHTML = trending.map(createMovieCard).join('');
    
    // New Movies - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    const newReleases = movies.filter(m => m.new).sort((a, b) => b.year - a.year);
    if (newMoviesEl) newMoviesEl.innerHTML = newReleases.map(createMovieCard).join('');
    
    // TV Series - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    if (seriesMoviesEl) seriesMoviesEl.innerHTML = movies.slice(0, 8).sort((a, b) => b.year - a.year).map(createMovieCard).join('');
    
    // My List - Sorted by year (most recent first: 2026, 2025, 2024, 2021)
    if (myListMoviesEl) myListMoviesEl.innerHTML = myList.sort((a, b) => b.year - a.year).map(createMovieCard).join('');
    
    const allMoviesEl = document.getElementById('allMovies');
    if (allMoviesEl) {
        allMoviesEl.innerHTML = movies.map(createMovieCard).join('');
        addCardClickListeners();
    }
    
    const tvShowsEl = document.getElementById('tvShows');
    if (tvShowsEl) {
        tvShowsEl.innerHTML = movies.slice(0, 8).sort((a, b) => b.year - a.year).map(createMovieCard).join('');
        addCardClickListeners();
    }
    
    const originalsEl = document.getElementById('originals');
    if (originalsEl) {
        const originals = movies.filter(m => m.original || m.id === 11);
        originalsEl.innerHTML = originals.map(createMovieCard).join('');
        addCardClickListeners();
    }
    
    const recentlyEl = document.getElementById('recentlyAdded');
    if (recentlyEl) {
        const recent = movies.filter(m => m.recentlyAdded);
        recentlyEl.innerHTML = recent.map(createMovieCard).join('');
        addCardClickListeners();
    }
    
    const myListPageEl = document.getElementById('myListPage');
    if (myListPageEl) {
        myListPageEl.innerHTML = myList.sort((a, b) => b.year - a.year).map(createMovieCard).join('');
        addCardClickListeners();
    }
    
    addCardClickListeners();
}

// Hero Slider Functions
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let slideInterval;

function showSlide(n) {
    if (!slides.length) return;
    
    // Wrap around
    if (n >= slides.length) currentSlide = 0;
    else if (n < 0) currentSlide = slides.length - 1;
    else currentSlide = n;
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetInterval();
}

function goToSlide(n) {
    showSlide(n);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

// Auto-play slider
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length) {
        slideInterval = setInterval(() => changeSlide(1), 5000);
    }
});

// Play movie from hero
function playHeroMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        currentMovie = movie;
        openVideoPlayer(movie);
    } else {
        alert('Movie not found');
    }
}

// Open modal from hero
function openHeroModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        openModal(movie);
    }
}

// Add to watchlist from hero
function addToWatchlist(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        // Show a notification or feedback
        showNotification(`${movie.title} added to watchlist!`);
    }
}

// Share movie from hero
function shareMovie(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        const shareUrl = window.location.origin + '?movie=' + movieId;
        if (navigator.share) {
            navigator.share({
                title: movie.title,
                text: `Check out ${movie.title} on Novara!`,
                url: shareUrl
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareUrl).then(() => {
                showNotification('Link copied to clipboard!');
            });
        }
    }
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'hero-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles inline for the notification
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #e50914 0%, #b20710 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        box-shadow: 0 4px 20px rgba(229, 9, 20, 0.4);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Notification functions
function toggleNotifications() {
    notificationDropdown.classList.toggle('active');
    profileDropdown.classList.remove('active');
}

function markAllNotificationsRead() {
    document.querySelectorAll('.notification-item.unread').forEach(item => {
        item.classList.remove('unread');
    });
    document.querySelector('.notification-badge').style.display = 'none';
}

// Profile functions
function toggleProfile() {
    profileDropdown.classList.toggle('active');
    notificationDropdown.classList.remove('active');
}

// Mobile Navigation functions
function toggleMobileNav() {
    hamburgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileNav() {
    hamburgerBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
}

function handleMobileNavClick(e) {
    const link = e.target.closest('.mobile-nav-link');
    if (link) {
        const page = link.dataset.page;
        window.location.hash = page;
        closeMobileNav();
    }
}

// Close dropdowns when clicking outside
function handleClickOutside(e) {
    if (!e.target.closest('.notification-container')) {
        notificationDropdown.classList.remove('active');
    }
    if (!e.target.closest('.profile-container')) {
        profileDropdown.classList.remove('active');
    }
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
    }
}

// Navigate to page
function navigateTo(page) {
    currentPage = page;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show selected page
    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) {
        pageEl.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Update nav links
    navLinks.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update mobile nav links
    mobileNavLinks.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Close dropdowns
    notificationDropdown.classList.remove('active');
    profileDropdown.classList.remove('active');
    searchResults.classList.remove('active');
    
    // Render page content
    switch(page) {
        case 'home':
            renderHomeMovies();
            break;
        case 'movies':
            renderAllMovies();
            break;
        case 'tvshows':
            renderTVShows();
            break;
        case 'originals':
            renderOriginals();
            break;
        case 'recentlyadded':
            renderRecentlyAdded();
            break;
        case 'mylist':
            renderMyListPage();
            break;
        case 'account':
            renderViewingHistory();
            break;
    }
}

// Handle hash changes
function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
}

// Header Scroll Effect
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderHomeMovies();
    handleHashChange();
    initHeroSlider();
});

// Hero Slider Functionality
function initHeroSlider() {
    // No dots needed - slider works automatically
}

function changeHeroSlide(direction) {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    if (direction === 1) {
        slides[currentSlide].classList.add('prev');
    }
    
    // Calculate new slide index
    currentSlide += direction;
    
    // Loop around
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Add active class to new slide
    slides.forEach(slide => slide.classList.remove('prev'));
    slides[currentSlide].classList.add('active');
}

function goToSlide(index) {
    if (index === currentSlide) return;
    
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    if (index > currentSlide) {
        slides[currentSlide].classList.add('prev');
    }
    
    // Set new slide
    currentSlide = index;
    
    // Add active class to new slide
    slides.forEach(slide => slide.classList.remove('prev'));
    slides[currentSlide].classList.add('active');
}

// Auto-advance slides every 5 seconds
let heroSlideInterval;

function startHeroSlideInterval() {
    if (!heroSlideInterval) {
        heroSlideInterval = setInterval(() => {
            if (document.querySelector('.hero-slide')) {
                changeHeroSlide(1);
            }
        }, 5000);
    }
}

function stopHeroSlideInterval() {
    if (heroSlideInterval) {
        clearInterval(heroSlideInterval);
        heroSlideInterval = null;
    }
}

// Start the auto-advance
startHeroSlideInterval();

// Pause slider when user is scrolling/hovering the hero content
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    // When user starts scrolling (mousedown or touchstart on scrollbar area)
    heroContent.addEventListener('mouseenter', () => {
        stopHeroSlideInterval();
    });
    
    // Resume when user leaves the hero content
    heroContent.addEventListener('mouseleave', () => {
        startHeroSlideInterval();
    });
    
    // Also pause while actively scrolling (for touch devices)
    heroContent.addEventListener('scroll', () => {
        stopHeroSlideInterval();
    });
}

// Also handle the slider wrapper specifically
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => {
        stopHeroSlideInterval();
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        startHeroSlideInterval();
    });
}

// Hash change listener
window.addEventListener('hashchange', handleHashChange);

// Click listeners for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        window.location.hash = page;
    });
});

// Click listeners for footer and other page links
pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        window.location.hash = page;
    });
});

// Search input
searchInput.addEventListener('input', handleSearch);

// Category buttons
categoryBtns.forEach(btn => btn.addEventListener('click', handleCategoryFilter));

// Initialize category scroll arrows
initCategoryScrollArrows();

// Modal
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Video Player
const videoPlayerClose = document.getElementById('videoPlayerClose');
const videoPlayerOverlay = document.getElementById('videoPlayerOverlay');
const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const skipForwardBtn = document.getElementById('skipForward');
const skipBackwardBtn = document.getElementById('skipBackward');

// Skip interval for holding down skip buttons
let skipInterval = null;
let skipDirection = 0; // 1 for forward, -1 for backward
const SKIP_AMOUNT = 10; // seconds to skip
const SKIP_INTERVAL_MS = 200; // ms between skips when holding

// Play/Pause Button Functionality
if (playPauseBtn && videoPlayer) {
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Update button icon based on video state
    videoPlayer.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playPauseBtn.classList.add('playing');
    });
    
    videoPlayer.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playPauseBtn.classList.remove('playing');
    });
}

function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// Skip Forward - Hold down to skip
if (skipForwardBtn && videoPlayer) {
    skipForwardBtn.addEventListener('mousedown', () => startSkip(1));
    skipForwardBtn.addEventListener('mouseup', stopSkip);
    skipForwardBtn.addEventListener('mouseleave', stopSkip);
    skipForwardBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startSkip(1); });
    skipForwardBtn.addEventListener('touchend', stopSkip);
}

// Skip Backward - Hold down to skip
if (skipBackwardBtn && videoPlayer) {
    skipBackwardBtn.addEventListener('mousedown', () => startSkip(-1));
    skipBackwardBtn.addEventListener('mouseup', stopSkip);
    skipBackwardBtn.addEventListener('mouseleave', stopSkip);
    skipBackwardBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startSkip(-1); });
    skipBackwardBtn.addEventListener('touchend', stopSkip);
}

function startSkip(direction) {
    skipDirection = direction;
    
    // Add visual feedback
    if (direction === 1 && skipForwardBtn) {
        skipForwardBtn.classList.add('skipping');
    } else if (direction === -1 && skipBackwardBtn) {
        skipBackwardBtn.classList.add('skipping');
    }
    
    // Skip immediately on first press
    performSkip();
    
    // Then continue skipping while held
    skipInterval = setInterval(performSkip, SKIP_INTERVAL_MS);
}

function stopSkip() {
    if (skipInterval) {
        clearInterval(skipInterval);
        skipInterval = null;
    }
    
    // Remove visual feedback
    if (skipForwardBtn) skipForwardBtn.classList.remove('skipping');
    if (skipBackwardBtn) skipBackwardBtn.classList.remove('skipping');
    
    skipDirection = 0;
}

function performSkip() {
    if (!videoPlayer) return;
    
    let newTime = videoPlayer.currentTime + (skipDirection * SKIP_AMOUNT);
    
    // Clamp to valid range
    if (newTime < 0) newTime = 0;
    if (newTime > videoPlayer.duration) newTime = videoPlayer.duration;
    
    videoPlayer.currentTime = newTime;
}

// Keyboard Controls for Video Player
document.addEventListener('keydown', (e) => {
    if (!videoPlayerOverlay || !videoPlayerOverlay.classList.contains('active')) {
        return;
    }
    
    // Enter key - Pause the movie
    if (e.key === 'Enter') {
        e.preventDefault();
        if (videoPlayer) {
            if (!videoPlayer.paused) {
                videoPlayer.pause();
            }
        }
    }
    
    // P key - Play the movie
    if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        if (videoPlayer) {
            if (videoPlayer.paused) {
                videoPlayer.play();
            }
        }
    }
    
    // Space key - Toggle play/pause
    if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
    }
    
    // Arrow keys for seeking
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        videoPlayer.currentTime = Math.min(videoPlayer.currentTime + 10, videoPlayer.duration);
    }
    
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        videoPlayer.currentTime = Math.max(videoPlayer.currentTime - 10, 0);
    }
});

if (videoPlayerClose) {
    videoPlayerClose.addEventListener('click', closeVideoPlayer);
}

// Removed: Click outside to close video player
// The player will now only close when clicking the X button or pressing Escape

// Close video player on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoPlayerOverlay && videoPlayerOverlay.classList.contains('active')) {
        closeVideoPlayer();
    }
});

// Notification button
if (notificationBtn) {
    notificationBtn.addEventListener('click', toggleNotifications);
}

// Mark all read button
document.querySelector('.mark-read')?.addEventListener('click', markAllNotificationsRead);

// Profile button
if (profileBtn) {
    profileBtn.addEventListener('click', toggleProfile);
}

// Hamburger menu
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileNav);
}

// Mobile nav close
if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
}

// Mobile nav links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', handleMobileNavClick);
});

// Click outside to close dropdowns
document.addEventListener('click', handleClickOutside);

// Scroll
window.addEventListener('scroll', handleScroll);

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) {
            closeModal();
        }
        notificationDropdown.classList.remove('active');
        profileDropdown.classList.remove('active');
        searchResults.classList.remove('active');
    }
});
