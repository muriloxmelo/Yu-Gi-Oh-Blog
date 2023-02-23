export default function menuMobile() {
const btn = document.querySelector('#btn-mobile')
const menu = document.querySelector('#menu')
  btn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    console.log('oi')
    menu.classList.toggle('ativado')
  }
}