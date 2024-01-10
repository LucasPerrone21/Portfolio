import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
    const botao = document.querySelector("#menuBurguer");
    const menu = document.querySelector("#cabecalhoBurguer");
    botao.addEventListener("click", handleClick);

    function handleClick() {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
            botao.innerText = "close";
            outsideClick(menu, () => {
                botao.innerText = "menu";
                menu.classList.remove("active");
            });
        } else {
            menu.classList.remove("active");
            botao.innerText = "menu";
        }
    }
}
