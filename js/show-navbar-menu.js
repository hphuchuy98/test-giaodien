const openMenus = document.querySelectorAll('.js-open-menu')
const showMenu = document.querySelector('.js-show-menu');
const closeMenu = document.querySelector('.js-close-menu');
const modalContainer = document.querySelector('.js-modal-container');
const opacity_menu = document.querySelector('.js-add-opacity');

function showMenu_modal () {
    showMenu.classList.add('show-navbar');
    showMenu.classList.add('transition');
    opacity_menu.classList.add('show-navbar');
}

function hideMenu_modal () {
    showMenu.classList.remove('show-navbar');
    showMenu.classList.remove('transition');
    opacity_menu.classList.remove('show-navbar');

}

for (const openMenu of openMenus ) {
    openMenu.addEventListener('click', showMenu_modal)
}

closeMenu.addEventListener('click', hideMenu_modal)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation() 
})