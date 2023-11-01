changeNewsletterImgSource();

window.addEventListener('resize', () => {
    changeNewsletterImgSource();
})

function changeNewsletterImgSource() {
    document.querySelector('#newsletterImg').src = (window.innerWidth >= 1280) ? './assets/images/illustration-sign-up-desktop.svg' : './assets/images/illustration-sign-up-mobile.svg';
}

function validateForm() {
    const emailError = document.querySelector('#newsletter-register-email-error');
    const emailInput = document.querySelector('#newsletter-register-email');
    const email = emailInput.value;

    if (email.length === 0 || email === null || email === undefined) {
        const msg = 'Veuillez renseigner un email.';
        displayError(emailInput, emailError, msg)
    }
    else if (!email.includes('@')) {
        const msg = 'L\'email saisi est invalide.';
        displayError(emailInput, emailError, msg);
    }
    else if (email.includes('@') && email.substring(email.length-4, email.length) === ".com") {
        hideError(emailInput, emailError);
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