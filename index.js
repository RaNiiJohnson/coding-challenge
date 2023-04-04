const burger = document.querySelector('.burger');
const out = document.querySelector('nav');
const main = document.querySelector('main');
const h1 = document.querySelector('h1')

burger.addEventListener('click', () => {
    out.classList.toggle('open')
    burger.classList.toggle('open')
    main.classList.toggle('open')
    h1.classList.toggle('open')
})

// main.addEventListener('click', () => {
//     out.classList.remove('open')
//     burger.classList.remove('open')
// })