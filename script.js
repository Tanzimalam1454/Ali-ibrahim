// ==========================================
// SMOOTH SCROLL NAVIGATION
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add subtle shadow on scroll
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// ==========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ==========================================

const scrollObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, delay);
            scrollObserver.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// Legacy animation support
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-item, .capability-card, .contact-cta-card').forEach(el => {
    observer.observe(el);
});

// ==========================================
// PREVENT LAYOUT JUMP FROM CLIENT LOGOS
// ==========================================

// Pause marquee on hover for better UX
const marquee = document.querySelector('.clients-marquee');
if (marquee) {
    marquee.addEventListener('mouseenter', () => {
        const track = marquee.querySelector('.clients-track');
        if (track) {
            track.style.animationPlayState = 'paused';
        }
    });

    marquee.addEventListener('mouseleave', () => {
        const track = marquee.querySelector('.clients-track');
        if (track) {
            track.style.animationPlayState = 'running';
        }
    });
}
