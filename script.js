
// ========== HERO SECTION SCRIPT ==========
const heroPages = document.querySelectorAll('.hero-page');
const heroDots = document.querySelectorAll('.hero-dot');
const progressBar = document.getElementById('progressBar');
let currentHero = 0;
let isScrolling = false;

//Hero Scroll
 // Interactive effects for burger vibe
 document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const burger = document.querySelector('.burger');
    
    // Button hover effects
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Burger hover effect
    if (burger) {
        burger.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        burger.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add a subtle parallax effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const burgerContainer = document.querySelector('.burger-container');
        
        if (hero) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
        
        if (burgerContainer && window.innerWidth > 1100) {
            burgerContainer.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // Animate the burger layers on load
    setTimeout(function() {
        const layers = document.querySelectorAll('.burger-layer');
        layers.forEach((layer, index) => {
            layer.style.animation = `slideIn 0.5s ease-out ${index * 0.1}s forwards`;
            layer.style.opacity = '0';
            layer.style.transform = 'translateY(20px)';
        });
        
        // Add the animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }, 500);
});
// ========== YOUR EXISTING SCRIPTS ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    if(mobileMenu.style.right === '0px'){
        mobileMenu.style.right = '-100%';
    } else {
        mobileMenu.style.right = '0';
    }
});

// Parallax
const img = document.getElementById('parallaxImg');
const box = document.getElementById('parallaxBox');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const boxTop = box.offsetTop;
    const boxHeight = box.offsetHeight;
    
    const scrollInBox = scrollY - boxTop + (window.innerHeight * 0.3);
    if (scrollInBox > 0 && scrollInBox < window.innerHeight * 1.5) {
        const percent = Math.min(Math.max(scrollInBox / (window.innerHeight * 1.5), 0), 1);
        img.style.transform = `translateY(-${percent * (img.offsetHeight - boxHeight)}px)`;
    }
});

// Initial position for parallax
window.addEventListener('load', () => {
    img.style.transform = `translateY(-${img.offsetHeight - box.offsetHeight}px)`;
});

// CTA Button
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('View our cafe menu!');
});

// Newsletter form
document.querySelector('.newsletter-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-input input').value;
    if(email) {
        alert(`Thank you for subscribing with: ${email}`);
        document.querySelector('.newsletter-input input').value = '';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize on load
window.addEventListener('load', () => {
    initHeroScroll();
});

