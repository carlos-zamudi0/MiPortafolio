document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("menu");
    const navLinks = document.getElementById("links");

    // Asegurar que el menú inicie cerrado
    navLinks.classList.remove("active");
    toggleButton.classList.remove("active");

    // Abrir/cerrar menú al hacer clic en el botón
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        toggleButton.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en cualquier enlace
    document.querySelectorAll("#links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggleButton.classList.remove("active");
        });
    });

    // Cerrar menú si se cambia el tamaño de ventana (de móvil a escritorio)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            toggleButton.classList.remove("active");
        }
    });
});