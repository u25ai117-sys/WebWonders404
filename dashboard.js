document.addEventListener('DOMContentLoaded', () => {
  initGenreFilterSearch();
  initSmoothScrollLinks();
});

/**
 * Filters dashboard game cards based on inputs in the global genre search box.
 */
function initGenreFilterSearch() {
  const searchInput = document.querySelector('.genre-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
      const tagText = card.querySelector('.card-tag')?.textContent.toLowerCase() || '';
      const titleText = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const metaText = card.querySelector('.card-meta')?.textContent.toLowerCase() || '';

      // Evaluate match across the card tag, main title, and meta text fields
      const isMatch = tagText.includes(searchTerm) || 
                      titleText.includes(searchTerm) || 
                      metaText.includes(searchTerm);

      // Toggles visibility cleanly without altering structural CSS rules
      card.style.display = isMatch ? '' : 'none';
    });
  });
}

/**
 * Implements smooth navigation behaviors for internal page anchor tags.
 */
function initSmoothScrollLinks() {
  const faqLink = document.querySelector('a[href="#faq"]');
  if (!faqLink) return;

  faqLink.addEventListener('click', (event) => {
    event.preventDefault(); // Intercept harsh jump-cut default action
    
    const targetSection = document.getElementById('faq');
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}
