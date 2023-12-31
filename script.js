changeNewsletterImgSource();

window.addEventListener('resize', () => {
    changeNewsletterImgSource();
})

function changeNewsletterImgSource() {
    document.querySelector('#newsletterImg').src = (window.innerWidth >= 1280) ? './assets/images/illustration-sign-up-desktop.svg' : './assets/images/illustration-sign-up-mobile.svg';
}

function validateForm() {
    validateEmail();
}

function validateEmail() {
    const emailError = document.querySelector('#newsletter-register-email-error');
    const emailInput = document.querySelector('#newsletter-register-email');
    const email = emailInput.value;

    const isArobase = email.includes('@');
    const isDotCom = email.substring(email.length-4, email.length) === ".com";

    if (isArobase && isDotCom) {
        hideError(emailInput, emailError);
        window.location.href = './success.html';
    } else {
        let msg = "L'email saisi est invalide.";
        if (email.length === 0 || email === null || email === undefined) {
            msg = "Veuillez renseigner un email.";
        }
        displayError(emailInput, emailError, msg);
    }
}

function displayError(inputElement, errorElement, msg) {
    inputElement.classList.add('error');
    errorElement.classList.remove('hide');
    errorElement.textContent = msg;
}
function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.classList.add('hide');
}