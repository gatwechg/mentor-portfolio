// ==================== Smooth Scrolling ==================== //
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== Form Submission Handler ==================== //
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Basic validation
    if (!name || !email || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (in real project, send to backend)
    console.log('Form Data:', { name, email, message });
    showMessage('Message sent successfully! Thank you for reaching out.', 'success');

    // Reset form
    document.querySelector('.contact-form').reset();
}

// ==================== Display Form Message ==================== //
function showMessage(text, type) {
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 5000);
}

// ==================== Navigation Active State ==================== //
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ==================== Smooth Scroll on Page Load ==================== //
window.addEventListener('load', function() {
    // Optional: Add any animations or initialization here
    console.log('Portfolio loaded successfully!');
});
