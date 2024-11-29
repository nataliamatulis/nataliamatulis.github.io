// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbarLinks = document.querySelectorAll(".nav-link");

    // Función: Mostrar/ocultar el menú en mobile
    toggleButton.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.toggle("show");
    });

    // Función: Scroll suave al hacer clic en los enlaces del menú
    navbarLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Evitar el comportamiento por defecto
            const targetId = link.getAttribute("href").slice(1); // Obtener el id de la sección
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Desplazamiento suave a la sección
                targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }

            // Cerrar el menú en dispositivos móviles
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    // Función: Cambiar estilo del header al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-secondary", "shadow"); // Cambiar fondo y agregar sombra
        } else {
            navbar.classList.remove("bg-secondary", "shadow"); // Restaurar estilo original
        }
    });
});

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(`Navegando a: ${event.target.href}`);
        });
    });
