const persoMenu = document.querySelectorAll(".personagens-icon img");
const persoContent = document.querySelectorAll("[data-tab='content'] section");

// if (persoMenu.length && persoContent.length) {
//   function activeBordaMenu(index) {
//     persoMenu.forEach((i) => {
//       i.classList.remove("ativo");
//     });
//     persoMenu[index].classList.toggle("ativo");
//   }

//   function activeTab(index) {
//     persoContent.forEach((i) => {
//       i.classList.remove("ativo");
//     });
//     persoContent[index].classList.add("ativo");
//   }

//   persoMenu.forEach((i, index) => {
//     i.addEventListener("click", () => {
//       activeTab(index);
//       activeBordaMenu(index);
//     });
//   });
// }

import TabNav from "./modules.js/tabnav.js";

const tabnav = new TabNav(
  ".personagens-icon img",
  "[data-tab='content'] section"
);

tabnav.init()
