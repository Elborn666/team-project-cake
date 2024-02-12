const trigerSpoiler = document.querySelector('.js-triger-spoiler');
const contentSpoiler = document.querySelector('.js-spoiler-content');
const buttonSpoiler = document.querySelector('.js-spoiler-button')
const iconSpoiler = document.querySelector('.js-spoiler-icon');

trigerSpoiler.addEventListener('click', onToglSpoiler);

function onToglSpoiler() {
    buttonSpoiler.classList.toggle('change-color')
    contentSpoiler.classList.toggle('open-spoiler')
    iconSpoiler.classList.toggle('rotate-icon')
}