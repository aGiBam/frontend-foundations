/**
 * FRONTEND FOUNDATIONS - MAIN JAVASCRIPT FILE
 * Educational starter for learning JavaScript fundamentals
 * Topics: DOM Manipulation, Event Listeners, Modern ES6+ Syntax
 */

// ===========================
// WAIT FOR DOM TO LOAD
// Ensure all HTML elements are loaded before running scripts
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Frontend Foundations loaded successfully!');
    
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    initButtonInteractions();
});

// ===========================
// MOBILE NAVIGATION TOGGLE
// Hamburger menu functionality for responsive navigation
// ===========================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Check if elements exist before adding listeners
    if (!hamburger || !navMenu) return;
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger to X (optional enhancement)
        hamburger.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside (improved UX)
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===========================
// SMOOTH SCROLL BEHAVIOR
// Enhanced smooth scrolling for anchor links
// ===========================
function initSmoothScroll() {
    // Select all links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Don't prevent default if it's just "#"
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll to element with offset for sticky header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// FORM VALIDATION
// Basic client-side form validation
// ===========================
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission for demo
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation (basic regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert('Please enter a valid email address', 'error');
            return;
        }
        
        // Success! In a real app, you would send this data to a server
        console.log('Form Data:', { name, email, message });
        showAlert('Message sent successfully! (Demo only)', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// BUTTON INTERACTIONS
// Add interactivity to CTA buttons
// ===========================
function initButtonInteractions() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (!ctaButton) return;
    
    ctaButton.addEventListener('click', function() {
        // Scroll to the about section or show a message
        const aboutSection = document.querySelector('#about');
        
        if (aboutSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = aboutSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        console.log('CTA button clicked!');
    });
}

// ===========================
// UTILITY FUNCTIONS
// Reusable helper functions
// ===========================

/**
 * Display an alert message to the user
 * @param {string} message - The message to display
 * @param {string} type - Type of alert ('success', 'error', 'info')
 */
function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Style the alert
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(alert);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}

/**
 * Debounce function to limit how often a function can run
 * Useful for scroll/resize events to improve performance
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// EXAMPLE: SCROLL EVENT
// Detect scroll position (commented out by default)
// ===========================
/*
window.addEventListener('scroll', debounce(function() {
    const scrollPosition = window.scrollY;
    console.log('Scroll position:', scrollPosition);
    
    // Example: Add shadow to header when scrolled
    const header = document.querySelector('.header');
    if (scrollPosition > 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
}, 100));
*/

// ===========================
// ADDITIONAL LEARNING RESOURCES
// ===========================
/*
 * DOM MANIPULATION REFERENCE:
 * - querySelector(): Select single element
 * - querySelectorAll(): Select multiple elements
 * - getElementById(), getElementsByClassName(): Alternative selectors
 * - createElement(): Create new element
 * - appendChild(), append(): Add elements to DOM
 * - classList.add/remove/toggle(): Modify classes
 * - style: Modify inline styles
 * - addEventListener(): Listen for events
 * 
 * MODERN JAVASCRIPT FEATURES:
 * - const/let: Block-scoped variables
 * - Arrow functions: () => {}
 * - Template literals: `Hello ${name}`
 * - Destructuring: const { name, email } = formData
 * - Spread operator: [...array]
 * - Array methods: map, filter, reduce, forEach
 * - Async/await: Handle asynchronous code
 * 
 * COMMON EVENT TYPES:
 * - click: Mouse click
 * - submit: Form submission
 * - input/change: Form input changes
 * - scroll: Page scroll
 * - resize: Window resize
 * - keydown/keyup: Keyboard input
 * - DOMContentLoaded: DOM is ready
 * - load: Page fully loaded
 */
