export default function initModal() {
    const tecnologias = document.querySelectorAll(".iconesTecnologias");
    const tecnologiasTratado = [];
    tecnologias.forEach((item) => {
        if (!item.classList.contains("links-redes")) {
            item.addEventListener("click", openModal);
        }
    });
}

function openModal(event) {
    const modalName = "." + event.target.dataset.modal;
    const modal = document.querySelector(modalName);
    modal.classList.add("active");
    const botao = modal.querySelector(".modalBotao");
    botao.addEventListener("click", closeModal);
    function closeModal(event) {
        modal.classList.remove("active");
        botao.removeEventListener("click", closeModal);
    }
}
