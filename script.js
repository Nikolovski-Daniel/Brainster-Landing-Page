// PRELOADER
const preloader = document.querySelector('.preloader');

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');

// Cache nav-links
const navLinks = document.querySelectorAll('.nav-link');

// PRELOADER
window.addEventListener('load', () => {
    preloader.classList.add('remove');
})

// HAMBURGER MENU
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainMenu.classList.toggle('active');
})

// Use event delegation for nav-links
mainMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('active');
        mainMenu.classList.remove('active');
    }
});