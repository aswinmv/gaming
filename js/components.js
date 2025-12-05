// ========================================
// COOPLIX - SECURE COMPONENT FUNCTIONS
// ========================================

/**
 * HTML Escaping Utility - Prevents XSS attacks
 */
function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Create a game card element (grid view) - SECURE VERSION
 */
function createGameCard(game) {
  const safeTitle = escapeHtml(game.title);
  const safeGenre = escapeHtml(game.genre);
  const safeThumb = escapeHtml(game.thumbnail);
  const finalPrice = calculatePrice(game);
  const platformBadge = getPlatformBadge(game.platform);

  return `
    <div class="game-card" data-game-id="${parseInt(game.id, 10)}">
      <div class="game-card-image-wrapper">
        <img 
          src="${safeThumb}" 
          alt="${safeTitle} - ${safeGenre} game" 
          class="game-card-image" 
          loading="lazy"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%231b2838%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E'"
        >
        <div class="game-card-badge"><span class="badge badge-new">${escapeHtml(platformBadge)}</span></div>
      </div>
      <div class="game-card-content">
        <h3 class="game-card-title">${safeTitle}</h3>
        <div class="game-card-tags">
          <span class="tag">${safeGenre}</span>
        </div>
        <div class="game-card-footer">
          <div class="game-card-price">
            <span class="price-current">${escapeHtml(finalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Create a game card element (list view) - SECURE VERSION
 */
function createGameCardList(game) {
  const safeTitle = escapeHtml(game.title);
  const safeDesc = escapeHtml(game.short_description || '');
  const safeGenre = escapeHtml(game.genre);
  const safeThumb = escapeHtml(game.thumbnail);
  const finalPrice = calculatePrice(game);
  const platformBadge = getPlatformBadge(game.platform);

  return `
    <div class="game-card-list" data-game-id="${parseInt(game.id, 10)}">
      <div class="game-card-image-wrapper">
        <img 
          src="${safeThumb}" 
          alt="${safeTitle} - ${safeGenre} game"
          class="game-card-image" 
          loading="lazy"
          onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%231b2838%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%23666%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E'"
        >
      </div>
      <div class="game-card-content">
        <div>
          <h3 class="game-card-title">${safeTitle}</h3>
          <p class="text-muted">${safeDesc}</p>
          <div class="game-card-tags">
            <span class="tag">${safeGenre}</span>
            <span class="tag">${escapeHtml(platformBadge)}</span>
          </div>
        </div>
        <div class="game-card-footer">
          <span class="price-current">${escapeHtml(finalPrice)}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Create a hero carousel slide - SECURE VERSION
 */
function createHeroSlide(game, index, isActive = false) {
  const safeTitle = escapeHtml(game.title);
  const safeDesc = escapeHtml(game.short_description || game.description || '');
  const safeThumb = escapeHtml(game.thumbnail);
  const safeGenre = escapeHtml(game.genre);
  const finalPrice = calculatePrice(game);
  const headingTag = index === 0 ? 'h1' : 'h2'; // Only first slide is H1

  return `
    <div class="hero-slide ${isActive ? 'active' : ''}" data-slide="${index}">
      <img 
        src="${safeThumb}" 
        alt="${safeTitle} hero banner" 
        class="hero-image"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221200%22 height=%22400%22%3E%3Crect fill=%22%231b2838%22 width=%221200%22 height=%22400%22/%3E%3C/svg%3E'"
      >
      <div class="hero-content">
        <${headingTag} class="hero-title">${safeTitle}</${headingTag}>
        <p class="hero-description">${safeDesc}</p>
        <div class="hero-actions">
          <div class="hero-price">
            <span class="price-current">${escapeHtml(finalPrice)}</span>
          </div>
          <button class="btn btn-primary btn-lg" data-game-id="${parseInt(game.id, 10)}" aria-label="View details for ${safeTitle}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6.66667 9.16667L10 12.5L13.3333 9.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 3.33334V12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.6667 12.5V15.8333C16.6667 16.0543 16.5789 16.2663 16.4226 16.4226C16.2663 16.5789 16.0543 16.6667 15.8333 16.6667H4.16667C3.94565 16.6667 3.73369 16.5789 3.57741 16.4226C3.42113 16.2663 3.33333 16.0543 3.33333 15.8333V12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * Carousel Controller - Prevents global pollution
 */
const CarouselController = (function () {
  let currentSlide = 0;
  let slides = [];
  let indicators = [];
  let carouselInterval = null;

  function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide]?.classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  function prevSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide]?.classList.remove('active');

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  function goToSlide(index) {
    if (slides.length === 0 || index < 0 || index >= slides.length) return;
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide]?.classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    indicators[currentSlide]?.classList.add('active');
  }

  function init() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    indicators = Array.from(carousel.querySelectorAll('.carousel-indicator'));
    currentSlide = 0;

    // Auto-advance slides with cleanup
    if (carouselInterval) {
      clearInterval(carouselInterval);
    }
    carouselInterval = setInterval(nextSlide, 5000);

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    });
  }

  return {
    next: nextSlide,
    prev: prevSlide,
    goTo: goToSlide,
    init: init
  };
})();

// Make available for onclick handlers (will be replaced with event delegation)
window.Carousel = CarouselController;
window.nextSlide = () => CarouselController.next();
window.prevSlide = () => CarouselController.prev();
window.goToSlide = (index) => CarouselController.goTo(index);

/**
 * Show loading spinner
 */
function showLoading(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  }
}

/**
 * Render games grid with loading state
 */
function renderGamesGrid(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">No games found</p>';
    return;
  }

  container.innerHTML = games.map(game => createGameCard(game)).join('');
}

/**
 * Render games list with loading state
 */
function renderGamesList(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (games.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">No games found</p>';
    return;
  }

  container.innerHTML = games.map(game => createGameCardList(game)).join('');
}

/**
 * Navigate to game details page - SECURE VERSION
 */
function navigateToGame(gameId) {
  const safeId = parseInt(gameId, 10);
  if (isNaN(safeId) || safeId < 1) {
    console.error('Invalid game ID');
    return;
  }
  window.location.href = `game-details.html?id=${safeId}`;
}

/**
 * Initialize search functionality - SECURE VERSION
 */
function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const query = this.value.trim();
      if (query && query.length <= 100) {
        window.location.href = `browse.html?search=${encodeURIComponent(query)}`;
      } else if (query.length > 100) {
        alert('Search query too long (max 100 characters)');
      }
    }
  });
}

/**
 * Apply filters on browse page - WITH ERROR HANDLING
 */
async function applyFilters() {
  try {
    const category = document.querySelector('input[name="genre"]:checked')?.value;
    const platform = document.querySelector('input[name="platform"]:checked')?.value;
    const searchQuery = document.getElementById('search-input')?.value;

    const filters = {
      category,
      platform,
      search: searchQuery
    };

    // Show loading
    showLoading('browse-results');

    // Filter games using API
    const filteredGames = await getAllGames(filters);

    // Render results
    renderGamesGrid(filteredGames, 'browse-results');

    // Update results count
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
      resultsCount.textContent = `${filteredGames.length} games`;
    }
  } catch (error) {
    console.error('Error applying filters:', error);
    const container = document.getElementById('browse-results');
    if (container) {
      container.innerHTML = '<p class="text-center text-muted">Error loading games. Please try again.</p>';
    }
  }
}

/**
 * Sort games - WITH ERROR HANDLING
 */
async function sortGames(sortBy) {
  try {
    showLoading('browse-results');
    const games = await getSortedGames(sortBy);
    renderGamesGrid(games, 'browse-results');
  } catch (error) {
    console.error('Error sorting games:', error);
    const container = document.getElementById('browse-results');
    if (container) {
      container.innerHTML = '<p class="text-center text-muted">Error loading games. Please try again.</p>';
    }
  }
}

/**
 * Update active navigation link
 */
function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Event delegation for game cards - SECURE, NO INLINE ONCLICK
 */
function initGameCardClicks() {
  document.addEventListener('click', function (e) {
    // Handle game card clicks
    const card = e.target.closest('[data-game-id]');
    if (card) {
      const gameId = card.dataset.gameId;
      navigateToGame(gameId);
    }
  });
}

/**
 * Initialize page - SECURE VERSION
 */
document.addEventListener('DOMContentLoaded', function () {
  updateActiveNav();
  initSearch();
  initGameCardClicks();
  CarouselController.init();
});
