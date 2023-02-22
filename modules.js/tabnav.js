export default class TabNav {
  constructor(navMenu, navConteudo) {
    this.navMenu = document.querySelectorAll(navMenu);
    this.navConteudo = document.querySelectorAll(navConteudo);
    this.classAtivo = "ativo";
    this.ativarConteudo = this.ativarConteudo.bind(this);
  }

  ativarConteudo(index) {
    this.navConteudo.forEach((i) => {
      i.classList.remove(this.classAtivo);
    });
    this.navConteudo[index].classList.add(this.classAtivo);
  }

  ativarMenu(index) {
    this.navMenu.forEach((i) => {
      i.classList.remove(this.classAtivo);
    });
    this.navMenu[index].classList.add(this.classAtivo);
  }

  addEvento() {
    this.navMenu.forEach((items, index) => {
      items.addEventListener("click", () => {
        this.ativarConteudo(index);
        this.ativarMenu(index);
      });
    });
  }

  init() {
    if (this.navMenu.length && this.navConteudo.length) {
      this.addEvento();
      this.ativarConteudo(0)
      this.ativarMenu(0)
    }
    return this;
  }
}
