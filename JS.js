document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-responsive');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});