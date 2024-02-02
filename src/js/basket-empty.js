const body = document.querySelector('body');
const modalBasket = document.querySelector('.js-modal-basket-empty');
const btnOpenBasket = document.querySelector('.js-open-basket');
const btnCloseBasket = document.querySelector('.js-close-basket-empty');
const btnNextPurch = document.querySelector('.js-next-purchase');

btnOpenBasket.addEventListener('click', onOpenBasket);
btnCloseBasket.addEventListener('click', onCloseBasket);
btnNextPurch.addEventListener('click', onNexPurchase);
window.addEventListener('keydown', onKeyPress);

function onOpenBasket() {
    modalBasket.classList.add('open-basket')
    body.classList.add('hidden')
}

function onCloseBasket() {
    modalBasket.classList.remove('open-basket')
    body.classList.remove('hidden')
}

function onNexPurchase() {
    modalBasket.classList.remove('open-basket')
    body.classList.remove('hidden')
}

function onKeyPress(e) {
    if(e.code === "Escape") {
        onCloseModal()
    }
}