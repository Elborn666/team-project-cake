const value = document.querySelector('.js-value');
const changeValue = document.querySelector('.js-change-value');
const spanTest = document.querySelector('.js-test');
const reset = document.querySelector('.js-reset');

value.addEventListener('input', onInputValue);
changeValue.addEventListener('input', onInputRange);
reset.addEventListener('click', onReset);

function onInputRange(event) {
    console.log(event.currentTarget.value)
    spanTest.textContent = event.currentTarget.value
}

function onInputValue(e) {
    console.log(e.currentTarget.value)
    spanTest.textContent = e.currentTarget.value
    changeValue.value = e.currentTarget.value
}

function onReset(elem) {
    spanTest.textContent = "100"
}