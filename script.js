// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submissions
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
    });

    // Handle booking buttons
    const bookButtons = document.querySelectorAll('.card .btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Booking confirmed!');
        });
    });
});
// Hero Section Animation
gsap.from(".hero-content", {
    duration: 1.5,
    opacity: 0,
    y: 30,
    ease: "power2.out"
  });
  gsap.from(".hero .btn", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "bounce.out"
  });
  // Room Cards Animation
gsap.from(".room-cards .card", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    ease: "power3.out"
  });
// Gallery Grid Animation
gsap.from(".gallery-item", {
    duration: 1.2,
    opacity: 0,
    scale: 0.9,
    stagger: 0.3,
    ease: "power3.out"
  });
// About Section Animation
gsap.from(".about-image", {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out"
  });
  gsap.from(".about-text", {
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power2.out",
    delay: 0.5
  });
// Services Section Animation
gsap.from(".services-image", {
    duration: 1,
    opacity: 0,
    x: -50
  });
  gsap.from(".services-text", {
    duration: 1,
    opacity: 0,
    x: 50,
    delay: 0.5
  });
// Contact Section Animation
gsap.from(".contact-info", {
    duration: 1,
    opacity: 0,
    y: 30
  });
  gsap.from(".contact-form", {
    duration: 1,
    opacity: 0,
    y: 30,
    delay: 0.5
  });
// Footer Animation
gsap.from(".footer-section", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2
  });
            