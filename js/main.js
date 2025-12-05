// ========================================
// COOPLIX - MAIN PAGE INITIALIZATION
// ========================================

// Initialize store home page - OPTIMIZED WITH PARALLEL LOADING
// NOTE: No DOMContentLoaded needed - defer scripts run after DOM is ready
(async function () {
  console.log('🚀 Cooplix initializing...');

  try {
    // Check if functions exist
    console.log('Checking functions...');
    console.log('- showLoading:', typeof showLoading);
    console.log('- getFeaturedGames:', typeof getFeaturedGames);
    console.log('- MOCK_GAMES:', typeof MOCK_GAMES, MOCK_GAMES ? MOCK_GAMES.length : 0);

    // Show loading states
    console.log('Showing loading states...');
    showLoading('hero-carousel');
    showLoading('special-offers');
    showLoading('new-releases');
    showLoading('popular-games');

    // PARALLEL LOADING - Much faster!
    console.log('Fetching game data...');
    const [featured, specials, newReleases, popular] = await Promise.all([
      getFeaturedGames(),
      getSpecialOffers(),
      getNewReleases(),
      getPopularGames()
    ]);

    console.log('Games fetched:', {
      featured: featured.length,
      specials: specials.length,
      newReleases: newReleases.length,
      popular: popular.length
    });

    // Render carousel
    console.log('Rendering carousel...');
    const heroCarousel = document.getElementById('hero-carousel');
    if (heroCarousel && featured.length > 0) {
      heroCarousel.innerHTML = `
        ${featured.map((game, index) => createHeroSlide(game, index, index === 0)).join('')}
        <div class="carousel-controls">
          <button class="carousel-btn" onclick="prevSlide()" aria-label="Previous game">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="carousel-btn" onclick="nextSlide()" aria-label="Next game">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="carousel-indicators" role="tablist">
          ${featured.map((_, index) => `<div class="carousel-indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})" role="tab" aria-label="Go to slide ${index + 1}"></div>`).join('')}
        </div>
      `;

      CarouselController.init();
      console.log('✅ Carousel rendered');
    }

    // Render all sections
    console.log('Rendering game grids...');
    renderGamesGrid(specials.slice(0, 8), 'special-offers');
    renderGamesGrid(newReleases.slice(0, 8), 'new-releases');
    renderGamesGrid(popular.slice(0, 10), 'popular-games');

    console.log('✅ Cooplix loaded successfully!');
  } catch (error) {
    console.error('❌ Error loading page:', error);
    console.error('Error stack:', error.stack);
    // Show user-friendly error
    const container = document.querySelector('.container') || document.body;
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'color: white; text-align: center; padding: 50px; background: rgba(255,0,0,0.2); border-radius: 8px; margin: 20px;';
    errorDiv.innerHTML = `
      <h2>Oops! Something went wrong</h2>
      <p>Unable to load games. Error: ${error.message}</p>
      <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 10px; cursor: pointer;">Refresh Page</button>
    `;
    container.appendChild(errorDiv);
  }
})();
