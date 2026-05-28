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

document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del formulario
    const form = document.querySelector(".form-turnos");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const fechaInput = document.getElementById("fecha");
    const horaInput = document.getElementById("hora");
    const especialidadSelect = document.getElementById("especialidad");

    // Función para mostrar mensajes de error
    const mostrarError = (input, mensaje) => {
        const error = document.createElement("small");
        error.textContent = mensaje;
        error.style.color = "red";
        error.style.display = "block";
        input.parentElement.appendChild(error);
        input.classList.add("error");
    };
    
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
    
        alert("Formulario enviado correctamente");
    });
    // Función para limpiar errores previos
    const limpiarErrores = () => {
        const errores = document.querySelectorAll("small");
        errores.forEach((error) => error.remove());
        const inputs = document.querySelectorAll(".error");
        inputs.forEach((input) => input.classList.remove("error"));
    };

    // Función para validar el nombre
    const validarNombre = () => {
        const nombre = nombreInput.value.trim();
        if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
            mostrarError(nombreInput, "El nombre es obligatorio y solo debe contener letras.");
            return false;
        }
        return true;
    };

    // Función para validar el email
    const validarEmail = () => {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailRegex.test(email)) {
            mostrarError(emailInput, "Ingrese un correo electrónico válido.");
            return false;
        }
        return true;
    };

    // Función para validar el teléfono
    const validarTelefono = () => {
        const telefono = telefonoInput.value.trim();
        if (telefono === "" || !/^\d{10}$/.test(telefono)) {
            mostrarError(telefonoInput, "El teléfono debe contener 10 dígitos.");
            return false;
        }
        return true;
    };

    // Función para validar la fecha
    const validarFecha = () => {
        const fecha = fechaInput.value;
        const hoy = new Date().toISOString().split("T")[0];
        if (fecha === "" || fecha < hoy) {
            mostrarError(fechaInput, "Seleccione una fecha válida (no puede ser anterior a hoy).");
            return false;
        }
        return true;
    };

    // Función para validar la hora
    const validarHora = () => {
        const hora = horaInput.value;
        if (hora === "") {
            mostrarError(horaInput, "Seleccione una hora válida.");
            return false;
        }
        return true;
    };

    // Función para validar la especialidad
    const validarEspecialidad = () => {
        if (especialidadSelect.value === "") {
            mostrarError(especialidadSelect, "Seleccione una especialidad.");
            return false;
        }
        return true;
    };

    // Función para validar el formulario completo
    const validarFormulario = (e) => {
        limpiarErrores(); // Limpiar errores previos
        const esValido =
            validarNombre() &&
            validarEmail() &&
            validarTelefono() &&
            validarFecha() &&
            validarHora() &&
            validarEspecialidad();

        if (!esValido) {
            e.preventDefault(); // Evitar el envío del formulario si hay errores
        }
    };

    // Evento para validar el formulario al enviarlo
    form.addEventListener("submit", validarFormulario);
});