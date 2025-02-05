/**
 * DOM EN JAVASCRIPT - PARTE 2
 * ------------------------------------------------------------
 * En este archivo se amplían más funcionalidades del DOM que pueden
 * ser útiles para el desarrollo web (avanzado)
 * 
 * 1. Creación y manipulación de nodos
 * 2. Modificación de estilos con JavaScript
 * 3. Delegación de eventos
 * 4. Intersection Observer API
 * 5. Mutation Observer API
 * 6. Drag & Drop API
 * 7. Ejemplos prácticos
 * ------------------------------------------------------------
 */

// 1. CREACIÓN Y MANIPULACIÓN DE NODOS
// ------------------------------------------------------------
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Este es un nuevo div creado dinámicamente";
nuevoDiv.style.border = "1px solid black";
document.body.appendChild(nuevoDiv);

// 2. MODIFICACIÓN DE ESTILOS CON JAVASCRIPT
// ------------------------------------------------------------
const cambiarFondo = document.createElement("button");
cambiarFondo.textContent = "Cambiar Fondo";
cambiarFondo.addEventListener("click", () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});
document.body.appendChild(cambiarFondo);

// 3. DELEGACIÓN DE EVENTOS
// ------------------------------------------------------------
document.body.addEventListener("click", (event) => {
    if (event.target.matches(".btn-delegado")) {
        alert("Botón delegado presionado");
    }
});
const btnDelegado = document.createElement("button");
btnDelegado.textContent = "Soy un botón delegado";
btnDelegado.classList.add("btn-delegado");
document.body.appendChild(btnDelegado);

// 4. INTERSECTION OBSERVER API (Detectar elementos en pantalla)
// ------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Elemento en pantalla:", entry.target);
        }
    });
});
const elementoObservado = document.createElement("div");
elementoObservado.textContent = "Observa cuando entro en la pantalla";
elementoObservado.style.height = "100px";
elementoObservado.style.marginTop = "150vh";
document.body.appendChild(elementoObservado);
observer.observe(elementoObservado);

// 5. MUTATION OBSERVER API (Detectar cambios en el DOM)
// ------------------------------------------------------------
const observerMutation = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        console.log("Cambio detectado en el DOM:", mutation);
    });
});
const nodoObservado = document.createElement("p");
nodoObservado.textContent = "Este párrafo será observado";
document.body.appendChild(nodoObservado);
observerMutation.observe(nodoObservado, { childList: true, subtree: true });

setTimeout(() => {
    nodoObservado.textContent = "El texto ha cambiado dinámicamente";
}, 3000);

// 6. DRAG & DROP API
// ------------------------------------------------------------
const elementoArrastrable = document.createElement("div");
elementoArrastrable.textContent = "Arrástrame";
elementoArrastrable.draggable = true;
elementoArrastrable.style.width = "100px";
elementoArrastrable.style.height = "100px";
elementoArrastrable.style.backgroundColor = "red";
document.body.appendChild(elementoArrastrable);

elementoArrastrable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "Este es un elemento arrastrable");
    console.log("Elemento arrastrado");
});
