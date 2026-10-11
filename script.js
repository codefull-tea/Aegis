// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    // Hero text animation
    gsap.from(".hero-text h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    });
    gsap.from(".hero-text p", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.7
    });
    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.9
    });

    // Feature cards animation on scroll
    gsap.utils.toArray(".feature-card").forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveNav() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                setActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial call

    // Ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('light-theme');
            const isLight = document.documentElement.classList.contains('light-theme');
            themeToggle.querySelector('.theme-icon').textContent = isLight ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });

        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light-theme');
            // Update toggle button icon
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    // Parallax effect on hero section
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
            const y = (e.clientY / window.innerHeight - 0.5) * 10; // -5 to 5
            hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    });
});