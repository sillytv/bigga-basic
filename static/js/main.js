document.addEventListener('DOMContentLoaded', () => {
    // Ambient effects
    const hero = document.querySelector('.hero');

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        hero.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }

    setInterval(createParticle, 200);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate features on scroll
    const features = document.querySelectorAll('.feature');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    features.forEach(feature => {
        observer.observe(feature);
    });

    // Play Now button pulse effect
    const playNowBtn = document.querySelector('.play-now-btn');
    setInterval(() => {
        playNowBtn.classList.add('pulse');
        setTimeout(() => {
            playNowBtn.classList.remove('pulse');
        }, 1000);
    }, 3000);

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = `
        <div></div>
        <div></div>
        <div></div>
    `;
    document.querySelector('nav').prepend(menuToggle);

    const navMenu = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active'); // Toggle animation
    });

    // Responsive image loading
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const loadHighResImage = () => {
            heroImage.src = heroImage.dataset.highres;
        };
        if (window.innerWidth > 768) {
            loadHighResImage();
        } else {
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    loadHighResImage();
                }
            });
        }
    }
});