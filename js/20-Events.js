/**
 * EVENTOS EN JAVASCRIPT
 * ------------------------------------------------------------
 * Los eventos permiten detectar y responder a acciones o sucesos
 * que ocurren en la página, como un click, el paso del ratón,
 * presionar teclas, envío de formularios, entre otros.
 *
 * ÍNDICE:
 * 1. Tipos de eventos
 * 2. Manejo de eventos con addEventListener
 * 3. Usar eventos en HTML (atributos inline) vs. addEventListener
 * 4. Capturar eventos (Objeto event)
 * 5. Ejercicios prácticos
 * ------------------------------------------------------------
 */

//
// 1. TIPOS DE EVENTOS
// ------------------------------------------------------------
// Ejemplos de eventos comunes en JavaScript:
//
// - click: Cuando el usuario hace clic en un elemento.
// - mouseover / mouseout: Cuando el ratón entra / sale de un elemento.
// - keydown / keyup / keypress: Cuando el usuario presiona / suelta / mantiene una tecla.
// - submit: Cuando se envía un formulario.
// - change: Cuando cambia el valor de un elemento, como un <select> o <input>.
// - focus / blur: Cuando un elemento (por ejemplo un input) gana o pierde el foco.
// - load / unload: Cuando se carga / descarga un recurso o la página.
// - scroll: Cuando se hace scroll dentro de un elemento o en la ventana.
//

//
// 2. MANEJO DE EVENTOS CON addEventListener
// ------------------------------------------------------------
// addEventListener(tipoEvento, callback) permite asociar un evento
// a un elemento, recibiendo como primer parámetro el tipo de evento
// y como segundo una función que se ejecutará cuando ocurra.
//

// Ejemplo: Escuchar un click en un botón
const botonEjemplo = document.getElementById("botonEjemplo");
if (botonEjemplo) {
    botonEjemplo.addEventListener("click", function () {
        alert("¡Has hecho clic en el botón!");
    });
}

//
// 3. USAR EVENTOS EN HTML (ATRIBUTOS INLINE) vs. addEventListener
// ------------------------------------------------------------
// Dos maneras de asociar eventos a elementos:
//
// A) Atributo inline en el HTML:
//    <button onclick="mostrarMensaje()">Click aquí</button>
//
// B) addEventListener en el archivo JS (más recomendado):
//    document.getElementById("btn").addEventListener("click", mostrarMensaje);
//
// Ejemplo de función global para usar inline:
function mostrarMensaje() {
    alert("Este mensaje proviene de una función llamada de forma inline.");
}

//
// 4. CAPTURAR EVENTOS (OBJETO event)
// ------------------------------------------------------------
// Cuando se dispara un evento, el navegador pasa un objeto 'event' a la
// función callback que contiene información detallada:
// - e.target: El elemento donde ocurrió el evento
// - e.type: Tipo de evento
// - e.key, e.code: Tecla presionada, si aplica
// - y más...

document.addEventListener("click", function (e) {
    console.log("Tipo de evento:", e.type);
    console.log("Elemento donde ocurrió el click:", e.target);
});

//
// 5. EJERCICIOS PRÁCTICOS
// ------------------------------------------------------------
// A continuación, se incluyen varios ejemplos y ejercicios de eventos
// para que los alumnos practiquen y comprendan su funcionamiento.
//

/**
 * EJERCICIO 1:
 * Mostrar en tiempo real la tecla que el usuario presiona en un input
 */
const inputTeclas = document.getElementById("inputTeclas");
const resultadoTecla = document.getElementById("resultadoTecla");
if (inputTeclas && resultadoTecla) {
    inputTeclas.addEventListener("keyup", function (e) {
        resultadoTecla.innerText = `Última tecla presionada: ${e.key}`;
    });
}

/**
 * EJERCICIO 2:
 * Cambiar el color de un div al hacer mouseover y volver al original con mouseout
 */
const cajaColor = document.getElementById("cajaColor");
if (cajaColor) {
    cajaColor.addEventListener("mouseover", function () {
        cajaColor.style.backgroundColor = "lightblue";
    });
    cajaColor.addEventListener("mouseout", function () {
        cajaColor.style.backgroundColor = "";
    });
}

/**
 * EJERCICIO 3:
 * Evitar el envío de un formulario y mostrar los datos introducidos en la consola
 */
const formEjemplo = document.getElementById("formEjemplo");
if (formEjemplo) {
    formEjemplo.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que se recargue la página
        const nombre = formEjemplo.elements["nombre"].value;
        const email = formEjemplo.elements["email"].value;
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        // Muestra un mensaje en pantalla
        alert(`Datos capturados:\nNombre: ${nombre}\nEmail: ${email}`);
    });
}

/**
 * EJERCICIO 4:
 * Crear un botón que, al darle click, agregue un nuevo elemento <li> en una lista
 */
const btnAgregarItem = document.getElementById("btnAgregarItem");
const listaElementos = document.getElementById("listaElementos");
if (btnAgregarItem && listaElementos) {
    btnAgregarItem.addEventListener("click", function () {
        const nuevoItem = document.createElement("li");
        nuevoItem.innerText = "Nuevo ítem agregado";
        listaElementos.appendChild(nuevoItem);
    });
}

/**
 * EJERCICIO 5:
 * Manejar la selección de un checkbox y mostrar un mensaje cuando esté marcado
 */
const checkTerminos = document.getElementById("checkTerminos");
const msjTerminos = document.getElementById("msjTerminos");
if (checkTerminos && msjTerminos) {
    checkTerminos.addEventListener("change", function () {
        if (checkTerminos.checked) {
            msjTerminos.innerText = "¡Has aceptado los términos!";
        } else {
            msjTerminos.innerText = "Aún no aceptas los términos.";
        }
    });
}

// 6. CAPTURAR EVENTOS (OBJETO event)
// ------------------------------------------------------------
// El objeto "event" contiene información acerca del evento que ocurrió,
// por ejemplo, la tecla presionada, la posición del ratón, el elemento
// en el que ocurrió el evento, etc.
//
// Puedes obtenerlo como parámetro en el callback del addEventListener.
//

document.addEventListener("click", function (e) {
    // e.target indica dónde ocurrió el click
    console.log("Click en:", e.target.tagName);
});


/**
 * Crear y añadir un nuevo elemento <li> a una lista al hacer click en un botón.
 */
function agregarItemLista() {
    const lista = document.getElementById("miLista");
    const nuevoItem = document.createElement("li");
    nuevoItem.innerText = "Nuevo ítem agregado";
    lista.appendChild(nuevoItem);
}

/**
 * EJERCICIO 2:
 * Cambiar el color de fondo de un elemento al pasar el mouse (mouseover) y
 * restaurar el color original con mouseout.
 */
const bloqueColor = document.getElementById("bloqueColor");
if (bloqueColor) {
    bloqueColor.addEventListener("mouseover", function () {
        bloqueColor.style.backgroundColor = "yellow";
    });
    bloqueColor.addEventListener("mouseout", function () {
        bloqueColor.style.backgroundColor = ""; // Restablecer color original
    });
}

/**
 * Mostrar el contenido de un input en un párrafo en tiempo real (evento keyup).
 */
const inputMensaje = document.getElementById("inputMensaje");
const textoSalida = document.getElementById("textoSalida");
if (inputMensaje && textoSalida) {
    inputMensaje.addEventListener("keyup", function () {
        textoSalida.innerText = inputMensaje.value;
    });
}

/**
 * Al hacer click en un ítem de la lista, resaltarlo con una clase CSS "active".
 */
const listaInteractiva = document.getElementById("listaInteractiva");
if (listaInteractiva) {
    const itemsLista = listaInteractiva.querySelectorAll("li");
    itemsLista.forEach((li) => {
        li.addEventListener("click", function () {
            // Remover "active" de todos los li
            itemsLista.forEach((item) => item.classList.remove("active"));
            // Añadir "active" al li clicado
            li.classList.add("active");
        });
    });
}

/**
 * Evitar el envío de un formulario y mostrar los datos en consola (submit event).
 */
const formulario = document.getElementById("formularioTest");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita la recarga de la página
        const nombre = formulario.elements["nombre"].value;
        const email = formulario.elements["email"].value;
        console.log("Nombre:", nombre);
        console.log("Email:", email);
    });
}