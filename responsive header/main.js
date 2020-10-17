const toogleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icon = document.querySelector(".navbar__icon");

toogleBtn.addEventListener('click', (e) => {
menu.classList.toggle('active');
icon.classList.toggle('active');
});
