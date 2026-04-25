// ==========================================
// MOBILE NAVIGATION MENU
// ==========================================

const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');
const body = document.body;

// Toggle mobile menu
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    navOverlay.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

    // Animate hamburger to X
    mobileToggle.classList.toggle('active');
}

// Close mobile menu
function closeMobileMenu() {
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    body.style.overflow = '';
    mobileToggle.classList.remove('active');
}

// Event listeners
if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
}

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

            // Close mobile menu if open
            closeMobileMenu();
        }
    });
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add "scrolled" class for styling
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
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

// ==========================================
// CONTACT SECTION — DIAGONAL LINE ANIMATION
// ==========================================

const contactDiagonal = document.querySelector('.contact-bg-diagonal');
if (contactDiagonal) {
    const diagonalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactDiagonal.classList.add('animate');
                diagonalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    diagonalObserver.observe(document.querySelector('#contact'));
}

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

// ==========================================
// HERO SPLIT — IMAGE CYCLING + COUNTER
// ==========================================

(function heroSplitInit() {
    'use strict';

    const SLIDE_INTERVAL_MS  = 4000;
    const COUNTER_DURATION_MS = 2000;
    const COUNTER_EASING = function(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    var PROJECT_NAMES = [
        'King Salman Park',
        'NEOM Hospital',
        'Aramco Stadium',
        'Ithra Cultural Center',
        'Chamber of Commerce Tower',
        'SNT Gulf Factory'
    ];

    var slides    = document.querySelectorAll('.hero-slide');
    var dots      = document.querySelectorAll('.hero-dot');
    var nameEl    = document.getElementById('heroProjectName');
    var statEls   = document.querySelectorAll('.hero-split-stat-number[data-count-target]');

    if (!slides.length) return;

    var currentIndex   = 0;
    var slideshowTimer = null;
    var counterFired   = false;

    function goToSlide(index) {
        index = ((index % slides.length) + slides.length) % slides.length;

        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) {
            d.classList.remove('active');
            d.setAttribute('aria-selected', 'false');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        dots[index].setAttribute('aria-selected', 'true');

        if (nameEl) {
            nameEl.style.opacity = '0';
            setTimeout(function() {
                nameEl.textContent = PROJECT_NAMES[index] || '';
                nameEl.style.opacity = '1';
            }, 300);
        }

        currentIndex = index;
    }

    function startAutoplay() {
        clearInterval(slideshowTimer);
        slideshowTimer = setInterval(function() {
            goToSlide(currentIndex + 1);
        }, SLIDE_INTERVAL_MS);
    }

    function stopAutoplay() {
        clearInterval(slideshowTimer);
    }

    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            goToSlide(parseInt(dot.dataset.dot, 10));
            startAutoplay();
        });
    });

    var heroRight = document.querySelector('.hero-right');
    if (heroRight) {
        heroRight.addEventListener('mouseenter', stopAutoplay);
        heroRight.addEventListener('mouseleave', startAutoplay);

        var touchStartX = 0;
        heroRight.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });
        heroRight.addEventListener('touchend', function(e) {
            var dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) {
                goToSlide(currentIndex + (dx < 0 ? 1 : -1));
                startAutoplay();
            }
        }, { passive: true });
    }

    function animateCounter(el) {
        var target = parseInt(el.dataset.countTarget, 10);
        var suffix = el.dataset.countSuffix || '';
        var start  = performance.now();

        function tick(now) {
            var elapsed  = now - start;
            var progress = Math.min(elapsed / COUNTER_DURATION_MS, 1);
            var eased    = COUNTER_EASING(progress);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) { requestAnimationFrame(tick); }
        }

        requestAnimationFrame(tick);
    }

    function runCounters() {
        if (counterFired) return;
        counterFired = true;
        statEls.forEach(function(el, i) {
            setTimeout(function() { animateCounter(el); }, i * 150);
        });
    }

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        counterFired = true;
        statEls.forEach(function(el) {
            el.textContent = el.dataset.countTarget + (el.dataset.countSuffix || '');
        });
    } else {
        setTimeout(runCounters, 1500);
    }

    goToSlide(0);
    startAutoplay();

})();
