export default function initEnvioEmails() {
    const form = document.querySelector(".contatoDireita");
    form.addEventListener("submit", checkEmails);

    function checkEmails(event) {
        event.preventDefault();
        const nome = document.querySelector("#nome").value;
        const empresa = document.querySelector("#empresa").value;
        const email = document.querySelector("#email").value;
        const mensagem = document.querySelector("#mensagem").value;

        const campoNome = `${nome} - ${empresa}`;
        const campoMensagem = `
        de: ${email}
        
        ${mensagem}
        `;

        fetch("https://formsubmit.co/ajax/lucaspramos21@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: campoNome,
                message: campoMensagem,
            }),
        })
            .then((response) => response.json())
            .then(cleanForm)
            .catch((error) => console.log(error));
    }
}

function cleanForm() {
    const nome = document.querySelector("#nome");
    const empresa = document.querySelector("#empresa");
    const email = document.querySelector("#email");
    const mensagem = document.querySelector("#mensagem");

    nome.value = "";
    empresa.value = "";
    email.value = "";
    mensagem.value = "";

    alert("E-mail enviado com sucesso!");
}
