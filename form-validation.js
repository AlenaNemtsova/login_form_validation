
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const mobileEmail = document.querySelector('#mobileEmail');
const password = document.querySelector('#password');

const form = document.querySelector('.form');
const error = document.querySelector('#errorMessage');

const firstnameError = document.querySelector('span.error-firstname');
const lastnameError = document.querySelector('span.error-lastname');
const mobileEmailError = document.querySelector('span.error-mobileEmail');
const passwordError = document.querySelector('span.error-password');


form.onsubmit = function validate(evt) {
    if (firstname.validity.valueMissing) {
        evt.preventDefault();
        firstnameError.textContent = "What's your name?";
        firstname.classList.add('error-field');
    }

    if (lastname.validity.valueMissing) {
        evt.preventDefault();
        lastnameError.textContent = "What's your name?";
        lastname.classList.add('error-field');
    }

    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const mobileFormat = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d[- .]?\d\d$/; //для любых телефонов от 10 цифр
    if (mobileEmail.value.match(emailFormat) || mobileEmail.value.match(mobileFormat)) {
        return true;
    }
    else {
        evt.preventDefault();
        mobileEmailError.textContent = "Please enter a valid mobile number or email address.";
        mobileEmail.classList.add('error-field');
    }

    const passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/; //пароль вида AA#11aaa
    if (password.value.match(passwordFormat)) {
        return true;
    }
    else {
        evt.preventDefault();
        passwordError.textContent = "Enter a conbination of at least eight characters including two numbers and a punctuation mark.";
        passwordError.classList.add('error-field');
    }

};

firstname.onfocus = function () {
    firstnameError.textContent = '';
    firstname.classList.remove('error-field');
};

lastname.onfocus = function () {
    lastnameError.textContent = '';
    lastname.classList.remove('error-field');
};

mobileEmail.onfocus = function () {
    mobileEmailError.textContent = '';
    mobileEmail.classList.remove('error-field');
};

password.onfocus = function () {
    passwordError.textContent = '';
    password.classList.remove('error-field');
};


