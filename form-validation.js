
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const mobileEmail = document.querySelector('#mobileEmail');
const password = document.querySelector('#password');

const form = document.querySelector('.form');
const error = document.querySelector('#errorMessage');

const firstnameError = document.querySelector('span.error-firstname');
const lastnameError = document.querySelector('span.error-lastname');
const mobileEmailError = document.querySelector('span.error-mobileEmail');


form.onsubmit = function validate(evt) {
    if (firstname.validity.valueMissing) {
        evt.preventDefault();
        firstnameError.textContent = "What's your name?";
    }

    if (lastname.validity.valueMissing) {
        evt.preventDefault();
        lastnameError.textContent = "What's your name?";
    }

    const mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const mobileFormat = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/; //для телефонов РФ
    if (mobileEmail.value.match(mailFormat) || mobileEmail.value.match(mobileFormat)) {
        return true;
    }
    else {
        evt.preventDefault();
        mobileEmailError.textContent = "Please enter a valid mobile number or email address.";
    }

};

firstname.onfocus = function () {
    firstnameError.textContent = '';
};

lastname.onfocus = function () {
    lastnameError.textContent = '';
};

mobileEmail.onfocus = function () {
    mobileEmailError.textContent = '';
};



