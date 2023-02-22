import TabNav from "./modules.js/tabnav.js";

const tabnavPersonagens = new TabNav(
  ".personagens-icon img",
  "[data-tab='content'] section"
);

tabnavPersonagens.init()

const tabnavBoosters = new TabNav(".cartas-lista img", ".cartas-descricao div")

tabnavBoosters.init()