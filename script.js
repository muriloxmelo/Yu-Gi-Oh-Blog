import TabNav from "./modules.js/tabnav.js";
import menuMobile from "./modules.js/menu-mobile.js";

menuMobile()

// Navegação ao clique e aparecer conteúdo --> personagens e lista de booster;
const tabnavPersonagens = new TabNav(
  ".personagens-icon img",
  "[data-tab='content'] section"
);

tabnavPersonagens.init()

const tabnavBoosters = new TabNav(".cartas-lista img", ".cartas-descricao div")
tabnavBoosters.init()