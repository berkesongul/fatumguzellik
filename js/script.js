// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // ===== Contact Form Handler =====
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.message) {
                showMessage('Lütfen tüm alanları doldurunuz.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Lütfen geçerli bir e-posta adresi giriniz.', 'error');
                return;
            }

            // In a real application, you would send this data to a backend server
            // For now, we'll just show a success message
            console.log('Form submitted:', formData);

            // Simulate form submission
            submitForm(formData);
        });
    }

    function submitForm(formData) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Gönderiliyor...';
        submitButton.disabled = true;

        // Simulate API call with delay
        setTimeout(() => {
            showMessage('Mesaj başarı ile gönderilmiştir. İlginiz için teşekkür ederiz.', 'success');
            
            // Reset form
            contactForm.reset();

            // Restore button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // In a real application, you would send the data like this:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         showMessage('Mesaj başarı ile gönderilmiştir. İlginiz için teşekkür ederiz.', 'success');
            //         contactForm.reset();
            //     } else {
            //         showMessage('Mesaj gönderilirken birkaç sorun oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
            //     }
            //     submitButton.textContent = originalText;
            //     submitButton.disabled = false;
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     showMessage('Mesaj gönderilirken birkaç sorun oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
            //     submitButton.textContent = originalText;
            //     submitButton.disabled = false;
            // });
        }, 1000);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Auto hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }

    // ===== Smooth Scroll for Navigation Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Add scroll effect to navbar =====
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 8px 24px rgba(37, 33, 31, 0.06)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ===== Animate on scroll =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and service cards
    document.querySelectorAll('.feature-card, .service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ===== Utility Functions =====

// Function to format phone number
function formatPhoneNumber(number) {
    const cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return number;
}

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to get query parameters
function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
