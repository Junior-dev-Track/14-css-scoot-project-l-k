const icons = document.querySelectorAll('.icons img');
const line = document.querySelector('.icons .line');

icons.forEach((icon, index) => {
    icon.addEventListener('mouseover', () => {
        line.style.left = `${index * 100 / icons.length}%`; // Update the left property
    });
});