document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeDonationModal();
    initializeParallax();
    initializeUPIDonation();
});

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a page link (contains .html) or external link, don't prevent default
            if (href.includes('.html') || href.startsWith('http') || href.startsWith('mailto')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                return; // Let the browser handle the navigation
            }
            
            // Only prevent default for anchor links on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
            
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Handle footer navigation links
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        highlightActiveNavLink();
    });
}

function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

function initializeAnimations() {
    const cards = document.querySelectorAll('.institution-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        setTimeout(() => heroTitle.style.animation = 'fadeInUp 0.8s ease-out forwards', 200);
    }
    if (heroDescription) {
        setTimeout(() => heroDescription.style.animation = 'fadeInUp 0.8s ease-out forwards', 400);
    }
    if (heroButtons) {
        setTimeout(() => heroButtons.style.animation = 'fadeInUp 0.8s ease-out forwards', 600);
    }
}

function initializeDonationModal() {
    const modal = document.getElementById('donationModal');
    const closeBtn = document.querySelector('.close');

    window.showDonationModal = function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modal.style.animation = 'fadeIn 0.3s ease-out';
    };

    function closeDonationModal() {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    closeBtn.addEventListener('click', closeDonationModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeDonationModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeDonationModal();
        }
    });
}

function initializeParallax() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.backgroundPosition = `center ${rate}px`;
        }
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease-out',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
    
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        }
    });
});

window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.getElementById('hamburger');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
    }
    
    .notification {
        animation: slideIn 0.3s ease-out;
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    
    img {
        transition: opacity 0.3s ease-out;
        opacity: 0;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

document.querySelectorAll('img').forEach(img => {
    if (img.complete) {
        img.classList.add('loaded');
        img.style.opacity = '1';
    } else {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.style.opacity = '1';
        });
    }
});

// UPI Donation System
function initializeUPIDonation() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const upiPayButton = document.getElementById('upiPayBtn');

    // Generate device identifier for transaction tracking
    function generateDeviceId() {
        // More reliable browser detection
        let browser = 'Unknown';
        if (navigator.userAgent.indexOf('Chrome') > -1) browser = 'Chrome';
        else if (navigator.userAgent.indexOf('Firefox') > -1) browser = 'Firefox';
        else if (navigator.userAgent.indexOf('Safari') > -1) browser = 'Safari';
        else if (navigator.userAgent.indexOf('Edge') > -1) browser = 'Edge';

        // Platform detection
        let platform = 'Unknown';
        if (navigator.platform.indexOf('Win') > -1) platform = 'Windows';
        else if (navigator.platform.indexOf('Mac') > -1) platform = 'Mac';
        else if (navigator.platform.indexOf('Android') > -1) platform = 'Android';
        else if (navigator.platform.indexOf('iPhone') > -1) platform = 'iPhone';

        const timestamp = Date.now().toString().slice(-4);
        return `${browser}-${platform}-${timestamp}`;
    }

    // Set up quick amount buttons (direct UPI links)
    amountButtons.forEach(button => {
        const amount = button.getAttribute('data-amount');
        const deviceId = generateDeviceId();
        const baseUPI = 'sufiyahameediatrust@indianbk';
        const name = 'Sufiya Hameedia Trust';
        const note = `Education Donation ₹${amount} - Device: ${deviceId}`;

        // Set direct UPI link
        const upiLink = `upi://pay?pa=${baseUPI}&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(note)}&am=${amount}&cu=INR`;
        button.href = upiLink;

        // Add click tracking
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Open UPI app directly
            window.location.href = button.href;

            showNotification(`Opening UPI app for ₹${amount} donation...`, 'success');

            // Fallback for mobile detection
            setTimeout(() => {
                const fallbackMessage = `If no UPI app opened, please scan the QR code or use any UPI app with UPI ID: sufiyahameediatrust@indianbk`;
                console.log(fallbackMessage);
            }, 3000);
        });
    });

    // Set up main UPI button for custom amounts
    if (upiPayButton) {
        const deviceId = generateDeviceId();
        const baseUPI = 'sufiyahameediatrust@indianbk';
        const name = 'Sufiya Hameedia Trust';
        const note = `Education Donation - Device: ${deviceId}`;

        // Set custom UPI link (no amount - user sets in app)
        const customUpiLink = `upi://pay?pa=${baseUPI}&pn=${encodeURIComponent(name)}&tn=${encodeURIComponent(note)}&cu=INR`;
        upiPayButton.href = customUpiLink;

        // Add click tracking for main button
        upiPayButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Open UPI app directly
            window.location.href = upiPayButton.href;

            showNotification('Opening UPI app for custom amount donation...', 'success');

            // Fallback for mobile detection
            setTimeout(() => {
                const fallbackMessage = `If no UPI app opened, please scan the QR code or use any UPI app with UPI ID: sufiyahameediatrust@indianbk`;
                console.log(fallbackMessage);
            }, 3000);
        });
    }
}

