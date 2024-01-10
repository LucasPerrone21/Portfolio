export default function outsideClick(element, callback) {
    const html = document.querySelector("body");
    const data = "data-outside";
    if (!element.hasAttribute(data)) {
        setTimeout(() => {
            html.addEventListener("click", handleOut);
        });
        element.setAttribute(data, "");
    }

    function handleOut(event) {
        if (!element.contains(event.target)) {
            callback();
            html.removeEventListener("click", handleOut);
            element.removeAttribute(data);
        }
    }
}
