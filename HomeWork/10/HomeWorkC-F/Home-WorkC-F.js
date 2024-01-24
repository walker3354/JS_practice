console.log(document.querySelector('.js-gamming-button').classList.contains('js-button'));

function click_button(button_class) {
    if (!document.querySelector(`.js-${button_class}-button`).classList.contains('clicked-button')) {
    document.querySelector(`.js-${button_class}-button`).classList.add('clicked-button');
    } else {
    document.querySelector(`.js-${button_class}-button`).classList.remove('clicked-button');
    }
}