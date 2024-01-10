export default function initScrollSuave() {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((item) => {
        item.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}
