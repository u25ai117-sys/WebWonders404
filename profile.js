document.addEventListener('DOMContentLoaded', () => {
  initProfileSearch();
  initEditProfile();
  initLiveMatchTracker();
});

/**
 * Handles basic input monitoring for the top navigation search field.
 */
function initProfileSearch() {
  const searchInput = document.querySelector('.genre-search');
  if (!searchInput) return;

  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        console.log(`Searching globally across EsportsHub for: ${query}`);
        // Implement redirect logic here: window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    }
  });
}

/**
 * Configures actions for the Edit Profile trigger button.
 */
function initEditProfile() {
  const editBtn = document.querySelector('.edit-profile-btn');
  if (!editBtn) return;

  editBtn.addEventListener('click', () => {
    console.log('Opening configuration overlay for GamerX...');
    
    // Prompt mockup for demo purposes; replace with an overlay modal component
    const originalBio = document.querySelector('.user-bio');
    const newBio = prompt('Update your gaming bio:', originalBio?.textContent || '');
    
    if (newBio !== null && newBio.trim() !== '') {
      originalBio.textContent = newBio.trim();
    }
  });
}

/**
 * Creates dynamic flashing effects or interval updates on structural match lists.
 */
function initLiveMatchTracker() {
  const liveIndicators = document.querySelectorAll('.t-status.live');
  
  // Simple CSS-less interval animation to pulse live elements subtly
  setInterval(() => {
    liveIndicators.forEach(indicator => {
      indicator.style.opacity = indicator.style.opacity === '0.5' ? '1' : '0.5';
      indicator.style.transition = 'opacity 0.4s ease-in-out';
    });
  }, 800);
}
