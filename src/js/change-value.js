const value = document.querySelector('.js-value');
const changeValue = document.querySelector('.js-change-value');

changeValue.oninput = function() {
    value.innerHTML = changeValue.value;
}