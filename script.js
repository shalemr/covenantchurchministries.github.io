// Get the hamburger icon and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add a click event to toggle the menu visibility
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
