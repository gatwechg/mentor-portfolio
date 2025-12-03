// ==================== Contact Form Handler ==================== //

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate inputs are not empty
    if (!name || !email || !message) {
        displayMessage('Please fill in all fields.', 'error');
        showAlert('⚠️ Error', 'Please fill in all fields.', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        showAlert('❌ Invalid Email', 'Please enter a valid email address.', 'error');
        return;
    }

    // Log form data (in production, send to backend)
    console.log('Contact Form Submitted:', { name, email, message });

    // Show success messages
    displayMessage('Message sent successfully! Thank you for reaching out.', 'success');
    showAlert('✅ Success', `Thank you, ${name}! Your message has been sent successfully.`, 'success');

    // Clear form fields
    document.querySelector('.contact-form').reset();
}

// Display inline message below form
function displayMessage(text, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;

    // Auto-clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// Display alert notification (browser-style or custom)
function showAlert(title, message, type) {
    // Create alert container
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.innerHTML = `
        <div class="alert-content">
            <strong>${title}</strong>
            <p>${message}</p>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    // Insert alert at top of page
    document.body.insertBefore(alertContainer, document.body.firstChild);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (alertContainer.parentElement) {
            alertContainer.remove();
        }
    }, 4000);
}
