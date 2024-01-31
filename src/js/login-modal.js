const body = document.querySelector('body');
const modalRegistr = document.querySelector('.js-modal');
const modalLogin = document.querySelector('.js-modal-login');
const btnOpen = document.querySelector('.js-open-login');
const btnOpenRegistr = document.querySelector('.js-open-registr')
const btnClose = document.querySelector('.js-close-login');
const btnSubmit = document.querySelector('.js-form-login');

btnOpen.addEventListener('click', onOpenModal);
btnClose.addEventListener('click', onCloseModal);
btnOpenRegistr.addEventListener('click', onOpenRegistration);
btnSubmit.addEventListener('submit', onSubmitForm);
window.addEventListener('keydown', onKeyPress);

function onOpenModal() {
    modalLogin.classList.add('open-login')
    body.classList.add('hidden')
}

function onCloseModal() {
    modalLogin.classList.remove('open-login')
    body.classList.remove('hidden')
}

function onOpenRegistration() {
    modalLogin.classList.remove('open-login')
    modalRegistr.classList.add('is-open')
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