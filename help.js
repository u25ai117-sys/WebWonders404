document.addEventListener('DOMContentLoaded', () => {
  initKnowledgeBaseSearch();
  initTicketSubmission();
});

/**
 * Live content filtering system parsing search queries across terms, headers, and individual link texts.
 */
function initKnowledgeBaseSearch() {
  const searchBar = document.getElementById('helpKnowledgeSearch');
  if (!searchBar) return;

  searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.kb-card');

    cards.forEach(card => {
      const heading = card.querySelector('h2')?.textContent.toLowerCase() || '';
      const description = card.querySelector('p')?.textContent.toLowerCase() || '';
      const articlesList = Array.from(card.querySelectorAll('.kb-article-link'))
        .map(link => link.textContent.toLowerCase())
        .join(' ');

      // Evaluate match parameters
      const isMatch = heading.includes(query) || 
                      description.includes(query) || 
                      articlesList.includes(query);

      // Hide or reveal the entire category card based on matched parameters
      card.style.display = isMatch ? '' : 'none';
    });
  });
}

/**
 * Processes support ticket form actions and controls double submission events.
 */
function initTicketSubmission() {
  const form = document.getElementById('supportTicketForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Lock default tracking reset

    const email = document.getElementById('ticketEmail').value.trim();
    const category = document.getElementById('ticketIssue').value;
    const message = document.getElementById('ticketMessage').value.trim();
    const submitBtn = form.querySelector('.submit-ticket-btn');

    if (!email || !message) {
      alert('Please compile all necessary fields before routing data.');
      return;
    }

    // Toggle button submission protection state
    if (submitBtn) {
      submitBtn.textContent = 'Filing Ticket...';
      submitBtn.disabled = true;
    }

    const supportPayload = { email, category, message };
    console.log('Sending secure support payload down pipeline:', supportPayload);

    // Network request delay simulation
    setTimeout(() => {
      alert(`Success! Ticket category [${category.toUpperCase()}] filed. Our moderation squad will reach out via ${email}.`);
      form.reset();
      
      if (submitBtn) {
        submitBtn.textContent = 'Submit Case File';
        submitBtn.disabled = false;
      }
    }, 1200);
  });
}
