/**
 * DOM EN JAVASCRIPT
 * ------------------------------------------------------------
 * El DOM (Document Object Model) es una interfaz de programación
 * para documentos HTML y XML. Proporciona una representación estructurada
 * del documento y métodos para acceder y manipular sus elementos.
 *
 * 1. Acceso al DOM (querySelector, getElementById, etc.)
 * 2. Creación y manipulación de elementos
 * 3. Modificación de atributos
 * 4. Manejo de clases (classList)
 * 5. Eventos en el DOM
 * 6. Traversing (navegación en el DOM)
 * 7. Ejemplos prácticos
 * ------------------------------------------------------------
 */

// ------------------------------------------------------------
// 1. ACCESO AL DOM
// ------------------------------------------------------------
//
// El DOM (Document Object Model) es la representación interna del documento
// HTML en forma de árbol de nodos. Para manipular o leer datos de estos
// nodos, primero debemos seleccionarlos. A continuación, se muestran varios
// métodos para acceder a los elementos del DOM:

// Acceder a un elemento por ID:
// Devuelve el elemento cuyo atributo id coincida con "titulo".
const titulo = document.getElementById("titulo");
console.log(titulo.textContent); // Muestra el contenido de texto del elemento

// Acceder a múltiples elementos por su clase:
// Devuelve una colección (HTMLCollection) de todos los elementos que tengan
// la clase "mi-clase".
const elementosClase = document.getElementsByClassName("mi-clase");
console.log(elementosClase); // Colección de elementos

// Acceder a múltiples elementos por su etiqueta:
// Devuelve una colección (HTMLCollection) de todos los elementos <p>.
const elementosEtiqueta = document.getElementsByTagName("p");
console.log(elementosEtiqueta); // Colección de elementos <p>

// Acceso moderno con querySelector y querySelectorAll:
// querySelector: Devuelve el primer elemento que coincida con el selector.
// querySelectorAll: Devuelve todos los elementos que coincidan con el selector,
//                   en forma de NodeList (más flexible que HTMLCollection).

const primerElemento = document.querySelector(".mi-clase");
console.log(primerElemento); // Primer elemento con la clase "mi-clase"

const todosLosElementos = document.querySelectorAll(".mi-clase");
console.log(todosLosElementos); // NodeList con todos los elementos "mi-clase"


// ------------------------------------------------------------
// 3. MODIFICACIÓN DE ATRIBUTOS
// ------------------------------------------------------------

// Cambiar atributos de un elemento
const enlace = document.querySelector("a");
enlace.setAttribute("href", "https://www.google.com");
enlace.setAttribute("target", "_blank");

// Obtener el valor de un atributo
console.log(enlace.getAttribute("href"));

// Eliminar un atributo
enlace.removeAttribute("target");

// ------------------------------------------------------------
// 4. MANEJO DE CLASES (classList)
// ------------------------------------------------------------

const elemento = document.querySelector(".mi-elemento");

// Agregar una clase
elemento.classList.add("nueva-clase");

// Eliminar una clase
elemento.classList.remove("mi-clase");

// Alternar una clase
elemento.classList.toggle("activa");

// Verificar si tiene una clase
console.log(elemento.classList.contains("activa"));

// ------------------------------------------------------------
// 5. EVENTOS EN EL DOM
// ------------------------------------------------------------

// Agregar un evento a un botón
const boton = document.getElementById("mi-boton");
boton.addEventListener("click", () => {
    alert("¡Botón clickeado!");
});

// Eliminar un evento
const manejarClick = () => {
    console.log("Evento eliminado");
};
boton.addEventListener("click", manejarClick);
boton.removeEventListener("click", manejarClick);

// ------------------------------------------------------------
// 6. TRAVERSING (NAVEGACIÓN EN EL DOM)
// ------------------------------------------------------------

const lista = document.getElementById("mi-lista");

// Acceder al primer hijo
console.log(lista.firstChild); // Puede incluir nodos de texto
console.log(lista.firstElementChild); // Solo elementos

// Acceder al último hijo
console.log(lista.lastChild);
console.log(lista.lastElementChild);

// Acceder a nodos hermanos
console.log(lista.previousSibling);
console.log(lista.nextSibling);

// Acceder al nodo padre
console.log(lista.parentNode);

// ------------------------------------------------------------
// 7. EJEMPLOS PRÁCTICOS
// ------------------------------------------------------------

// Ejemplo 1: Cambiar el texto de un elemento
const cambiarTexto = document.getElementById("titulo");
cambiarTexto.textContent = "Texto actualizado dinámicamente";

// Ejemplo 2: Cambiar el estilo de un elemento
cambiarTexto.style.color = "blue";
cambiarTexto.style.fontSize = "24px";

// Ejemplo 3: Eliminar un elemento
const elementoAEliminar = document.querySelector(".eliminar");
elementoAEliminar.remove();

// Ejemplo 4: Agregar múltiples elementos dinámicamente
const listaDinamica = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Elemento ${i}`;
    listaDinamica.appendChild(item);
}
document.body.appendChild(listaDinamica);

// Ejemplo 5: Cambiar clases dinámicamente al hacer clic
const botonClase1 = document.getElementById("boton-clase");
botonClase.addEventListener("click", () => {
    botonClase.classList.toggle("activo");
    console.log("Clase 'activo' alternada");
});

// Ejemplo 6: Validar formulario
const formulario1 = document.getElementById("miFormulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.elements["nombre"].value;
    const email = formulario.elements["email"].value;
    if (!nombre || !email) {
        alert("Por favor, completa todos los campos");
    } else {
        console.log(`Nombre: ${nombre}, Email: ${email}`);
    }
});

/**
 * Conclusión:
 * El DOM permite acceder y manipular los elementos de un documento HTML.
 * Los métodos y técnicas mostrados aquí te permiten agregar, eliminar,
 * modificar y navegar entre los nodos del DOM, así como agregar
 * interactividad con eventos.
 */

// Crear un arreglo de elementos
const elementos1 = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];

// Crear una lista dinámica con map
const listaConMap1 = document.createElement("ul");
elementos.map((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    listaConMap.appendChild(item);
});

// Agregar la lista al documento
document.body.appendChild(listaConMap);


// Crear un arreglo de elementos
const elementosForEach = ["Item A", "Item B", "Item C", "Item D", "Item E"];

// Crear una lista dinámica con forEach
const listaConForEach = document.createElement("ul");
elementosForEach.forEach((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    listaConForEach.appendChild(item);
});

// Agregar la lista al documento
document.body.appendChild(listaConForEach);


// Variable para determinar la imagen
let estado1 = "noche"; // Puede ser "día" o "noche"

// Crear el elemento de imagen
const imagen = document.createElement("img");

// Cambiar la imagen según el estado
if (estado1 === "día") {
    imagen.src = "https://via.placeholder.com/150/00FF00/FFFFFF?text=Día";
    imagen.alt = "Imagen de día";
} else if (estado1 === "noche") {
    imagen.src = "https://via.placeholder.com/150/0000FF/FFFFFF?text=Noche";
    imagen.alt = "Imagen de noche";
}

// Estilo opcional para la imagen
imagen.style.width = "150px";
imagen.style.height = "150px";

// Agregar la imagen al documento
document.body.appendChild(imagen);

// Cambiar la imagen dinámicamente
setTimeout(() => {
    estado = "día"; // Cambiamos el estado
    if (estado === "día") {
        imagen.src = "https://via.placeholder.com/150/00FF00/FFFFFF?text=Día";
        imagen.alt = "Imagen de día";
    }
}, 3000); // Cambia la imagen después de 3 segundos

// ------------------------------------------------------------
// 7. EJEMPLOS PRÁCTICOS
// ------------------------------------------------------------

// Ejemplo 1: Cambiar el texto de un elemento
const cambiarTexto = document.getElementById("titulo");
cambiarTexto.textContent = "Texto actualizado dinámicamente";

// Ejemplo 2: Cambiar el estilo de un elemento
cambiarTexto.style.color = "blue";
cambiarTexto.style.fontSize = "24px";

// Ejemplo 3: Eliminar un elemento
const elementoAEliminar1 = document.querySelector(".eliminar");
elementoAEliminar.remove();

// Ejemplo 4: Agregar múltiples elementos dinámicamente
const listaDinamica1 = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const item = document.createElement("li");
    item.textContent = `Elemento ${i}`;
    listaDinamica.appendChild(item);
}
document.body.appendChild(listaDinamica);

// Ejemplo 5: Cambiar clases dinámicamente al hacer clic
const botonClase = document.getElementById("boton-clase");
botonClase.addEventListener("click", () => {
    botonClase.classList.toggle("activo");
    console.log("Clase 'activo' alternada");
});

// Ejemplo 6: Validar formulario
const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.elements["nombre"].value;
    const email = formulario.elements["email"].value;
    if (!nombre || !email) {
        alert("Por favor, completa todos los campos");
    } else {
        console.log(`Nombre: ${nombre}, Email: ${email}`);
    }
});

// Crear un arreglo de elementos
const elementos = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];

// Crear una lista dinámica con map
const listaConMap = document.createElement("ul");
elementos.map((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    listaConMap.appendChild(item);
});

// Agregar la lista al documento
document.body.appendChild(listaConMap);


// Crear un arreglo de elementos
const elementosForEach1 = ["Item A", "Item B", "Item C", "Item D", "Item E"];

// Crear una lista dinámica con forEach
const listaConForEach1 = document.createElement("ul");
elementosForEach.forEach((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    listaConForEach.appendChild(item);
});

// Agregar la lista al documento
document.body.appendChild(listaConForEach);


// Variable para determinar la imagen
let estado = "noche"; // Puede ser "día" o "noche"

// Crear el elemento de imagen
const imagen = document.createElement("img");

// Cambiar la imagen según el estado
if (estado === "día") {
    imagen.src = "https://via.placeholder.com/150/00FF00/FFFFFF?text=Día";
    imagen.alt = "Imagen de día";
} else if (estado === "noche") {
    imagen.src = "https://via.placeholder.com/150/0000FF/FFFFFF?text=Noche";
    imagen.alt = "Imagen de noche";
}

// Estilo opcional para la imagen
imagen.style.width = "150px";
imagen.style.height = "150px";

// Agregar la imagen al documento
document.body.appendChild(imagen);

// Cambiar la imagen dinámicamente
setTimeout(() => {
    estado = "día"; // Cambiamos el estado
    if (estado === "día") {
        imagen.src = "https://via.placeholder.com/150/00FF00/FFFFFF?text=Día";
        imagen.alt = "Imagen de día";
    }
}, 3000); // Cambia la imagen después de 3 segundos

// ------------------------------------------------------------
// EJEMPLOS BÁSICOS ADICIONALES
// ------------------------------------------------------------

// Crear un título dinámicamente
const tituloDinamico = document.createElement("h1");
tituloDinamico.textContent = "Hola, este es un título dinámico";
document.body.appendChild(tituloDinamico);

// Cambiar el fondo del documento
const cambiarFondo = document.createElement("button");
cambiarFondo.textContent = "Cambiar fondo";
cambiarFondo.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});
document.body.appendChild(cambiarFondo);

// Agregar un párrafo al hacer clic en un botón
const botonAgregarParrafo = document.createElement("button");
botonAgregarParrafo.textContent = "Agregar párrafo";
botonAgregarParrafo.addEventListener("click", () => {
    const parrafoNuevo = document.createElement("p");
    parrafoNuevo.textContent = "Este párrafo fue agregado al hacer clic.";
    document.body.appendChild(parrafoNuevo);
});
document.body.appendChild(botonAgregarParrafo);

// Mostrar una lista de números dinámicamente
const numeros = [1, 2, 3, 4, 5];
const listaNumeros = document.createElement("ul");
numeros.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = `Número: ${num}`;
    listaNumeros.appendChild(li);
});
document.body.appendChild(listaNumeros);

// Crear un botón para alternar la visibilidad de un elemento
const textoOculto = document.createElement("p");
textoOculto.textContent = "Este texto se puede ocultar o mostrar.";
document.body.appendChild(textoOculto);

const botonToggleTexto1 = document.createElement("button");
botonToggleTexto1.textContent = "Mostrar/Ocultar Texto";
botonToggleTexto1.addEventListener("click", () => {
    textoOculto.style.display = textoOculto.style.display === "none" ? "block" : "none";
});
document.body.appendChild(botonToggleTexto1);
