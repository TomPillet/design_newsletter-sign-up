changeNewsletterImgSource();

window.addEventListener('resize', () => {
    changeNewsletterImgSource();
})

function changeNewsletterImgSource() {
    document.querySelector('#newsletterImg').src = (window.innerWidth >= 1280) ? './assets/images/illustration-sign-up-desktop.svg' : './assets/images/illustration-sign-up-mobile.svg';
}

function isFormValid() {
    const email = document.querySelector('#newsletter-register-email').value;
    let emailError = document.querySelector('#newsletter-register-email-error');

    if (email.length === 0 || email === null || email === undefined) {
        emailError.classList.remove('hide');
        emailError.textContent = 'Un email est requis pour l\'abonnement à la newsletter.';
    }
    else if (!email.includes('@')) {
        emailError.classList.remove('hide');
        emailError.textContent = 'L\'email saisi est incorrect. Vérifiez qu`il contient un arobase.';
    }
    else if (email.includes('@') && email.substring(email.length-4, email.length) === ".com") {
        window.location.href = 'https://www.youtube.com';
    }
}
