const body = document.querySelector('body');
const btnOpen = document.querySelector('.js-open-registration');
const btnOpenLogin = document.querySelector('.js-open-login');
const btnClose = document.querySelector('.js-close');
const btnSubmit = document.querySelector('.js-form');
const modalWindow = document.querySelector('.js-modal');
const modalLogin = document.querySelector('.js-modal-login')

btnOpen.addEventListener('click', onOpenModal);
btnOpenLogin.addEventListener('click', onOPenLogin);
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

function onOPenLogin() {
    modalWindow.classList.remove('is-open')
    modalLogin.classList.add('open-login')
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