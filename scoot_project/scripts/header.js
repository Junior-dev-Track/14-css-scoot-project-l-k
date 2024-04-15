let prevScrollpos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-110px"; // adjust this value according to your header's height
    }
    prevScrollpos = currentScrollPos;
}

// JavaScript
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const overlay = document.querySelector('#overlay');

burger.addEventListener('click', () => {
    if (nav.style.left === '-100%') {
        nav.style.left = '0'; // Show the navigation bar
        overlay.style.display = 'block'; // Show the overlay
        burger.classList.add('open'); // Change the burger icon
    } else {
        nav.style.left = '-100%'; // Hide the navigation bar
        overlay.style.display = 'none'; // Hide the overlay
        burger.classList.remove('open'); // Change the burger icon back
    }
});