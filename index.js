document.addEventListener('DOMContentLoaded', () => {
  initGenreSearch();
  initAuthActions();
  initGameCardInteractions();
});

/**
 * Filters the visible game cards in real time based on the genre search input.
 */
function initGenreSearch() {
  const searchInput = document.querySelector('.genre-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
      const genreText = card.querySelector('.game-genre')?.textContent.toLowerCase() || '';
      const nameText = card.querySelector('.game-name')?.textContent.toLowerCase() || '';
      
      // Matches search term against both genre and game title fields
      const isMatch = genreText.includes(searchTerm) || nameText.includes(searchTerm);
      
      // Toggles visibility smoothly without breaking grid layouts
      card.style.display = isMatch ? '' : 'none';
    });
  });
}

/**
 * Attaches functional event tracking or handling for authorization steps.
 */
function initAuthActions() {
  const authButtons = document.querySelectorAll('.auth-buttons .btn');
  
  authButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const targetHash = button.getAttribute('href');
      
      // Simple routing handler example for non-functional mock links
      if (targetHash.startsWith('#')) {
        console.log(`Navigating user to section: ${targetHash.substring(1)}`);
      }
    });
  });
}

/**
 * Adds lightweight micro-interactions and security provisions to image nodes.
 */
function initGameCardInteractions() {
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    // Prevents breaking UI layout paths if individual images drop or fail to load
    const image = card.querySelector('.game-image');
    if (image) {
      image.addEventListener('error', () => {
        image.src = 'https://placehold.co';
      });
    }

    // Accessible keyboard support for card navigation focus
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });
}
