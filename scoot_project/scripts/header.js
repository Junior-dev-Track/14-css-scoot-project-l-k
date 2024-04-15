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

burger.addEventListener('click', () => {
    if (nav.style.left === '-100%') {
        nav.style.left = '0'; // Show the navigation bar
    } else {
        nav.style.left = '-100%'; // Hide the navigation bar
    }
});