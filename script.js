const persoMenu = document.querySelectorAll(".personagens-icon img");
const persoContent = document.querySelectorAll("[data-tab='content'] section");

if (persoMenu.length && persoContent.length) {
  function activeBordaMenu(index) {
    persoMenu.forEach((i) => {
      i.classList.remove("ativo");
    });
    persoMenu[index].classList.toggle("ativo");
  }

  function activeTab(index) {
    persoContent.forEach((i) => {
      i.classList.remove("ativo");
    });
    persoContent[index].classList.add("ativo");
  }

  persoMenu.forEach((i, index) => {
    i.addEventListener("click", () => {
      activeTab(index);
      activeBordaMenu(index);
    });
  });
}
