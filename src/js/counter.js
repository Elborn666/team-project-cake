const btnMinus = document.querySelector('span[data-action="decrement"]');
const btnPlus = document.querySelector('span[data-action="increment"]');
const amount = document.querySelector('.js-amount');
let count = 0;

btnMinus.addEventListener('click', onMinusClick);
btnPlus.addEventListener('click', onPlusClick);

function onMinusClick() {
    count -= 0.5;
    amount.textContent = count + " кг";
    console.log('click -')
}

function onPlusClick() {
    count += 0.5;
    amount.textContent = count + " кг";
    console.log('click +')
}