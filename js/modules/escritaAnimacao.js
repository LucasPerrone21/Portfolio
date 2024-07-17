export default function initEscritaAnimacao() {
    function typeWriter(texto) {
        const text1 = "Desenvolvedor Backend";
        let currentIndex = 0;
        texto.innerHTML = "Sou ";

        function addLetter() {
            if (currentIndex < text1.length) {
                texto.innerHTML += text1[currentIndex];
                currentIndex++;
                setTimeout(addLetter, 90);
            } else {
                setTimeout(() => {
                    currentIndex = 0;
                    typeWriter(texto);
                }, 5000);
            }
        }

        addLetter();
    }

    const textoElement = document.getElementById("cargoAnimation");
    typeWriter(textoElement);
}
