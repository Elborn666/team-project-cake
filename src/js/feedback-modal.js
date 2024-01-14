const body = document.querySelector('body');
const btnOpen = document.querySelector('.js-open');
const btnClose = document.querySelector('.js-close');
const btnSubmit = document.querySelector('.js-form');
const modalWindow = document.querySelector('.js-modal');

btnOpen.addEventListener('click', onOpenModal);
btnClose.addEventListener('click', onCloseModal);
btnSubmit.addEventListener('submit', onSubmitForm);
window.addEventListener('keydown', onKeyPress);

function onOpenModal() {
    modalWindow.classList.add('is-open')
    body.classList.add('hidden')
}

function onCloseModal() {
    modalWindow.classList.remove('is-open')
    body.classList.remove('hidden')
}

function onKeyPress(e) {
    if(e.code === "Escape") {
        onCloseModal()
    }
}

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();

    onCloseModal();
}