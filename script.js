function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
function toggleContent(button) {
    let moreContent;

    // Verificar si el botón está dentro de la noticia principal o de una noticia secundaria
    if (button.closest('article.featured')) {
        // Caso para la noticia principal: Buscar .more-content dentro del contenedor principal
        moreContent = button.closest('article').querySelector('.more-content');
    } else {
        // Caso para las otras noticias: Buscar .more-content dentro de .news-item
        moreContent = button.closest('.news-item').querySelector('.more-content');
    }

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
