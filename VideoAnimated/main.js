const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {

    menuToggle.classList.toggle('active')
    showCase.classList.toggle('active')
    menu.classList.toggle('active')
})