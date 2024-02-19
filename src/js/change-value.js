const valueInput = document.querySelector('.js-value');
const changeValue = document.querySelector('.js-change-value');
const reset = document.querySelector('.js-reset');

valueInput.addEventListener('input', onInputValue);
changeValue.addEventListener('input', onInputRange);
reset.addEventListener('click', onReset);


function onInputRange(event) {
    console.log(event.currentTarget.value)
    valueInput.value = event.currentTarget.value
}

function onInputValue(e) {
    console.log(e.currentTarget.value)
    valueInput.value = e.currentTarget.value
    changeValue.value = e.currentTarget.value
    if (valueInput.value === "") {
        valueInput.value = changeValue.value = "100" 
    }
}

function onReset() {
    valueInput.value = "100"
}