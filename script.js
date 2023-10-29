changeNewsletterImgSource();

function changeNewsletterImgSource() {
    document.querySelector('#newsletterImg').src = (window.innerWidth >= 1280) ? './assets/images/illustration-sign-up-desktop.svg' : './assets/images/illustration-sign-up-mobile.svg';
}

window.addEventListener('resize', () => {
    changeNewsletterImgSource();
})