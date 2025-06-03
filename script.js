const burgerIcon = document.querySelector('.burger');
const navMenu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
