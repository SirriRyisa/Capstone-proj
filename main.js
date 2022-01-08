const openMenu = document.querySelector('.toggle');
const menu = document.querySelector('.second-nav');
const closeMenu = document.querySelector('.close');
openMenu.addEventListener('click', () => {
  menu.classList.remove('hide-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hide-menu');
});
