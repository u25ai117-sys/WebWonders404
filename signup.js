document.addEventListener('DOMContentLoaded', () => {
  initSignUpForm();
});

/**
 * Initializes validation and submission handling for the registration form.
 */
function initSignUpForm() {
  const form = document.querySelector('.signup-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page reload

    // Fetch input elements
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const terms = document.getElementById('terms');
    const submitBtn = document.querySelector('.submit-btn');

    // 1. Sanitize values to prevent simple injection inputs
    const cleanUsername = username.value.trim();
    const cleanEmail = email.value.trim().toLowerCase();
    const cleanPassword = password.value;

    // 2. Custom validation checks
    if (cleanUsername.length < 3) {
      alert('Username must be at least 3 characters long.');
      username.focus();
      return;
    }

    if (cleanPassword.length < 8) {
      alert('Password must be at least 8 characters long.');
      password.focus();
      return;
    }

    if (!terms.checked) {
      alert('You must agree to the Terms & Conditions to proceed.');
      terms.focus();
      return;
    }

    // 3. Prevent double submissions by disabling the button
    if (submitBtn) {
      submitBtn.textContent = 'Creating Account...';
      submitBtn.disabled = true;
    }

    // 4. Create data payload for your backend API
    const registrationPayload = {
      username: cleanUsername,
      email: cleanEmail,
      password: cleanPassword // In production, this will be encrypted via HTTPS
    };

    console.log('Sending secure registration payload:', registrationPayload);

    // Simulate API registration network request
    setTimeout(() => {
      alert(`Account successfully created for ${cleanUsername}! Welcome to EsportsHub.`);
      
      // Reset form or redirect user to dashboard/login page
      form.reset();
      if (submitBtn) {
        submitBtn.textContent = 'Sign Up';
        submitBtn.disabled = false;
      }
      // window.location.href = '/login'; 
    }, 1500);
  });
}
