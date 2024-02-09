const body = document.querySelector('body');
const btnOpen = document.querySelector('.js-open-feedback');
const btnClose = document.querySelector('.js-close-feedback');
const btnSubmit = document.querySelector('.js-form');
const modalWindow = document.querySelector('.js-modal-feedback');

btnOpen.addEventListener('click', onOpenModal);
btnClose.addEventListener('click', onCloseModal);
btnSubmit.addEventListener('submit', onSubmitForm);
window.addEventListener('keydown', onKeyPress);

function onOpenModal() {
    modalWindow.classList.add('is-open-feedback')
    body.classList.add('hidden')
    console.log("HIIII")
}

function onCloseModal() {
    modalWindow.classList.remove('is-open-feedback')
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