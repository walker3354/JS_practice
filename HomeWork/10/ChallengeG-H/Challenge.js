let button_status = false;

console.log(document.querySelector('.js-gamming-button').classList.contains('js-button'));

function click_button(button_class) {
    const chose_button = document.querySelector(`.js-${button_class}-button`);

    if (!chose_button.classList.contains('clicked-button') && button_status === false) {
        button_status = true;
        document.querySelector(`.js-${button_class}-button`).classList.add('clicked-button');
    }
    else if (chose_button.classList.contains('clicked-button') && button_status === true) {
        button_status = false;
        chose_button.classList.remove('clicked-button');
    }
}

function detect_string_end(input_key) {
    if (input_key === 'Enter') {
        click_calculate_button();
    }
}

function click_calculate_button() {
    const input_number = parseInt(document.querySelector('.js_input_box').value);
    const result_txt = document.querySelector('.waring_txt');
    if (input_number < 0) {
        result_txt.innerHTML = 'Error cost cannt not below $0'
    }
    else if (input_number >= 0 && input_number <= 40) {
        result_txt.innerHTML = `Total cost :$${input_number + 10}`;
    }
    else if (input_number > 40) {
        result_txt.innerHTML = `Total cost : $${input_number}`;
    }
}