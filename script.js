function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function toggleContent(button) {
    // Obtener el contenedor de contenido completo
    var moreContent = button.closest('.news-item').querySelector('.more-content');

    // Comprobar si el contenido está oculto
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        // Mostrar el contenido completo y cambiar el texto del botón
        moreContent.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        // Ocultar el contenido completo y cambiar el texto del botón
        moreContent.style.display = "none";
        button.textContent = "Leer más";
    }
}
