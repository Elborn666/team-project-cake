const body = document.querySelector('body');
const burgerMenu = document.querySelector('.js-burger-menu')
const btnOpenBurger = document.querySelector('.js-open-burger');
const btnCloseBurger = document.querySelector('.js-close-burger');

btnOpenBurger.addEventListener('click', onOpenBurger);
btnCloseBurger.addEventListener('click', onCloseBurger);

function onOpenBurger() {
    body.classList.add('hidden')
    burgerMenu.classList.add('is-open')
}

function onCloseBurger() {
    body.classList.remove('hidden')
    burgerMenu.classList.remove('is-open')
}
