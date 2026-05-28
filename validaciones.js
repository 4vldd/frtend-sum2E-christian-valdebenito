document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del formulario
    const especialidadSelect = document.getElementById("especialidad");
    const modalidadFieldset = document.getElementById("modalidad-fieldset");
    const coberturaFieldset = document.getElementById("cobertura-fieldset");
    const primeraVisitaFieldset = document.getElementById("primera-visita-fieldset");
    const estudiosPreviosFieldset = document.getElementById("estudios-previos-fieldset");

    // Función para ocultar todos los campos dinámicos
    const ocultarCampos = () => {
        if(modalidadFieldset) modalidadFieldset.classList.add("hidden");
        if(coberturaFieldset) coberturaFieldset.classList.add("hidden");
        if(primeraVisitaFieldset) primeraVisitaFieldset.classList.add("hidden");
        if(estudiosPreviosFieldset) estudiosPreviosFieldset.classList.add("hidden");
    };

    // Función para mostrar campos según la especialidad seleccionada
    const mostrarCampos = () => {
        ocultarCampos(); // Ocultar todos los campos primero

        const especialidad = especialidadSelect.value;

        // Mostrar campos según la especialidad seleccionada
        if (especialidad === "cardiologia") {
            modalidadFieldset.classList.remove("hidden");
            estudiosPreviosFieldset.classList.remove("hidden");
        } else if (especialidad === "pediatria") {
            coberturaFieldset.classList.remove("hidden");
            primeraVisitaFieldset.classList.remove("hidden");
        } else if (especialidad === "dermatologia") {
            modalidadFieldset.classList.remove("hidden");
            primeraVisitaFieldset.classList.remove("hidden");
        }
    };

    // Evento para detectar cambios en el campo de especialidad
    if (especialidadSelect) {
        especialidadSelect.addEventListener("change", mostrarCampos);
    }

    // Inicializar ocultando los campos al cargar la página
    ocultarCampos();
});