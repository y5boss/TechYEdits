const lines = document.querySelector('.lines');
const menu = document.querySelector('nav ul');

lines.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('active');
}