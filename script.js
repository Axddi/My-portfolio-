// Select the menu icon and navbar elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add an event listener to the menu icon
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the icon (if using an icon library like Boxicons)
    navbar.classList.toggle('active');  // Toggle the navbar visibility
};
