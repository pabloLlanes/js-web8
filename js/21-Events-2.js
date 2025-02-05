/**
 * EVENTOS EN JAVASCRIPT - PARTE 2
 * ------------------------------------------------------------
 * En este archivo se amplían más conceptos sobre eventos en JavaScript.
 * 
 * 1. Delegación de eventos
 * 2. Eventos de teclado avanzados
 * 3. Eventos de carga y scroll
 * 4. Intersection Observer API (detectar elementos en pantalla)
 * 5. Mutation Observer API (detectar cambios en el DOM)
 * 6. Eventos táctiles (touchstart, touchmove, touchend)
 * 7. Ejemplos prácticos
 * ------------------------------------------------------------
 */

// 1. DELEGACIÓN DE EVENTOS
// ------------------------------------------------------------
// Se usa cuando hay múltiples elementos hijos y queremos manejar sus eventos en un padre.
document.getElementById("listaDelegada").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        alert(`Hiciste clic en: ${e.target.textContent}`);
    }
});

// 2. EVENTOS DE TECLADO AVANZADOS
// ------------------------------------------------------------
document.addEventListener("keydown", (e) => {
    console.log(`Tecla presionada: ${e.key}, Código: ${e.code}`);
    if (e.key === "Escape") {
        alert("¡Has presionado la tecla Escape!");
    }
});

// 3. EVENTOS DE CARGA Y SCROLL
// ------------------------------------------------------------
window.addEventListener("load", () => {
    console.log("Página completamente cargada");
});

window.addEventListener("scroll", () => {
    console.log(`Posición de scroll: ${window.scrollY}px`);
});

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

// 6. EVENTOS TÁCTILES (TOUCH EVENTS)
// ------------------------------------------------------------
document.addEventListener("touchstart", (e) => {
    console.log("Pantalla tocada", e.touches[0].clientX, e.touches[0].clientY);
});

document.addEventListener("touchmove", (e) => {
    console.log("Movimiento detectado en", e.touches[0].clientX, e.touches[0].clientY);
});

document.addEventListener("touchend", () => {
    console.log("Toque finalizado");
});
