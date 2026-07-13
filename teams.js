document.addEventListener('DOMContentLoaded', () => {
  initTeamSearchFilter();
  initStatsInspector();
});

/**
 * Filters the team directory cards in real time via the global navigation search bar.
 */
function initTeamSearchFilter() {
  const searchInput = document.querySelector('.genre-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
      const nameText = card.querySelector('.team-name')?.textContent.toLowerCase() || '';
      const regionText = card.querySelector('.team-region')?.textContent.toLowerCase() || '';
      const tagsText = Array.from(card.querySelectorAll('.genre-tag'))
        .map(tag => tag.textContent.toLowerCase())
        .join(' ');

      // Evaluate match parameters across multiple layout metadata points
      const matchesSearch = nameText.includes(searchTerm) || 
                            regionText.includes(searchTerm) || 
                            tagsText.includes(searchTerm);

      // Hide or reveal nodes conditionally without breaking standard grid structures
      card.style.display = matchesSearch ? '' : 'none';
    });
  });
}

/**
 * Binds active click events to inspect detailed organization performance variables.
 */
function initStatsInspector() {
  const statsButtons = document.querySelectorAll('.view-stats-btn');

  statsButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Traverse up to find the closest parent card data boundary
      const card = event.target.closest('.team-card');
      const teamName = card?.querySelector('.team-name')?.textContent || 'Organization';

      console.log(`Querying global API telemetry records for: ${teamName}`);
      
      // Temporary structural modal placeholder logic for previewing dashboard functionality
      alert(`Opening analytics breakdown dashboard for ${teamName}.\n\nFeature status: Connecting to EsportsHub analytical nodes...`);
    });
  });
}
