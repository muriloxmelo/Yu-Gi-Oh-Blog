export default function menuMobile() {
const btn = document.querySelector('#btn-mobile')
const menu = document.querySelector('#menu')
  btn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    menu.classList.toggle('ativado')
  }

  function removerMenu() {
    console.log('oi')
    menu.addEventListener('click', () => {
      menu.classList.remove('ativado')
    })
  }
  removerMenu()
}