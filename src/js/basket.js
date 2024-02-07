const body = document.querySelector('body');
const basket = document.querySelector('.js-modal-basket-modal');
const closeBasket = document.querySelector('.js-close-basket-modal');
const nextPurchase = document.querySelector('.js-close-basket');


closeBasket.addEventListener('click', onCloseBasket);
nextPurchase.addEventListener('click', onNextPurchase);


function onCloseBasket() {
    body.classList.remove('hidden')
    basket.classList.remove('basket-is-open')
}

function onNextPurchase() {
    onCloseBasket()
}