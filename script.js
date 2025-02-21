function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function toggleContent(button) {
    var content = button.previousElementSibling.querySelector('.more-content');
    if (content.style.display === "none") {
        content.style.display = "block"; // Muestra el contenido
        button.textContent = "Leer menos"; // Cambia el texto a "Leer menos"
    } else {
        content.style.display = "none"; // Oculta el contenido
        button.textContent = "Leer más"; // Cambia el texto a "Leer más"
    }
}
