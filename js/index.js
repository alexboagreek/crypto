const headerNavBtn = document.querySelector('.header__nav_btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
    headerNavigation.classList.toggle('header__navigation_open');
});