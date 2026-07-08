// 1. Page Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});

// 2. Sticky Navbar Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
document.getElementById('reserveForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Page reload hone se rokega
    alert("Thank you! Your table request has been received. We will contact you shortly.");
    e.target.reset(); // Form clear kar dega
});
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    console.log("Menu button clicked!");
});
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
        });
    }
});