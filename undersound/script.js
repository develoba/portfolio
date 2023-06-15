// Shadow on scroll
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        nav.classList.add('header-shadow');
    } else {
        nav.classList.remove('header-shadow');
    }
})