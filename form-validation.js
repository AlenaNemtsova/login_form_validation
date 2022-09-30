
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let mobileEmail = document.querySelector('#mobileEmail');
let password = document.querySelector('#password');

let form = document.querySelector('.form');
let error = document.querySelector('#errorMessage');


form.onsubmit = function(evt) {
    error.innerHTML = "";

    if(firstname.value == '' || lastname.value == '') {
        evt.preventDefault();
        error.innerHTML += "What's your name?</br>";
    }
    
    if(mobileEmail.value == '') {
        evt.preventDefault();
        error.innerHTML += "Enter your mobile number or email</br>";
    }

    if(password.value == '') {
        evt.preventDefault();
        error.innerHTML += "Create a password</br>";
    }
}; 



