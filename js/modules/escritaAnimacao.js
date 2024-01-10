export default function initEscritaAnimacao() {
    function typeWriter(texto) {
        const text1 = "Fullstack Developer";
        let currentIndex = 0;
        texto.innerHTML = "I'm ";

        function addLetter() {
            if (currentIndex < text1.length) {
                texto.innerHTML += text1[currentIndex];
                currentIndex++;
                setTimeout(addLetter, 90);
            } else {
                setTimeout(() => {
                    texto.innerHTML = "I'm ";
                    currentIndex = 0;
                    typeWriter(texto);
                }, 6000);
            }
        }

        addLetter();
    }

    const textoElement = document.getElementById("cargoAnimation");
    typeWriter(textoElement);
}
