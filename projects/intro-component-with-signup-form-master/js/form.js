let popUpSuccess = document.querySelector('.pop-up.success');
let popUpError = document.querySelector('.pop-up.error');
let closeSuccess = document.querySelector('.pop-up.success h2 span');
let closeError = document.querySelector('.pop-up.error h2 span');
let buttonSubmit = document.querySelector('button[type="submit"');

/**
 * Form Variables
 */

let inputName = document.querySelector('input[name="firstName"');
let inputLast = document.querySelector('input[name="lastName"');
let inputEmail = document.querySelector('input[name="email"');
let inputPassword = document.querySelector('input[name="password"');

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputName.value === "" || inputLast.value === "" || inputEmail.value === "" || inputPassword.value === "") {
        return popUpError.classList.remove('d-none');
    }

    popUpSuccess.classList.remove('d-none');

    inputName.value = '';
    inputLast.value = '';
    inputEmail.value = '';
    inputPassword.value = '';

})

closeSuccess.addEventListener('click', (e) => {
    popUpSuccess.classList.add('d-none');
});

closeError.addEventListener('click', (e) => {
    popUpError.classList.add('d-none');
});