document.addEventListener('DOMContentLoaded', () => {
    initLoginForm();
    initMapInteractions();
});

/**
 * Handles validation, states, and submission data for the login card form.
 */
function initLoginForm() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop page refresh

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const submitBtn = document.querySelector('.login-btn');

        // Simple validation checks
        if (!nameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value) {
            alert('Please fill out all fields.');
            return;
        }

        // Visual loading state feedback
        if (submitBtn) {
            submitBtn.textContent = 'Logging in...';
            submitBtn.disabled = true;
        }

        // Prepare credential payload for your backend service
        const loginData = {
            fullName: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value
        };

        console.log('Sending secure payload:', loginData);

        // Simulation of login API delay
        setTimeout(() => {
            // Optional: Save the user's name so your dashboard can read it and display a greeting
            localStorage.setItem('loggedInUser', loginData.fullName);

            // UPDATED: Redirect to your dashboard page
            // Make sure your dashboard file is named exactly "dashboard.html" and is in the same directory.
            window.location.href = "dashboard.html";
            
        }, 1500);
    });
}

/**
 * Adds subtle interactive hover animations to the background world map SVG coordinates.
 */
function initMapInteractions() {
    // Select the active blue network pointer dots on the SVG
    const nodes = document.querySelectorAll('.map-background circle[fill="#3b82f6"]');
    
    nodes.forEach(node => {
        // Change cursor property dynamically on mouse hover
        node.style.cursor = 'pointer';
        node.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        node.style.transformOrigin = `${node.getAttribute('cx')}px ${node.getAttribute('cy')}px`;

        node.addEventListener('mouseenter', () => {
            node.style.transform = 'scale(1.8)';
            node.style.opacity = '1';
        });

        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.opacity = '0.7';
        });
        
        node.addEventListener('click', () => {
            console.log(`Pinged coordinate: X=${node.getAttribute('cx')} Y=${node.getAttribute('cy')}`);
        });
    });
}
