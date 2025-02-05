/**
 * BOM EN JAVASCRIPT
 * ------------------------------------------------------------
 * El BOM (Browser Object Model) hace referencia a los objetos
 * proporcionados por el navegador (fuera del DOM) que nos
 * permiten interactuar con el navegador, su ventana y características
 * como la URL, el historial, la pantalla, entre otros.
 *
 * 1. El objeto window
 * 2. Objetos de uso común: location, navigator, history, screen
 * 3. Métodos de diálogo (alert, confirm, prompt)
 * 4. Timers (setTimeout, setInterval, clearTimeout, clearInterval)
 * 5. Otras funcionalidades: localStorage, sessionStorage, cookies, window.open, window.close
 * 6. Ejemplos prácticos
 * 
 * ------------------------------------------------------------
 */

//
// 1. EL OBJETO WINDOW
// ------------------------------------------------------------
// 'window' es el objeto global en un entorno de navegador. Todas las
// variables y funciones declaradas en el scope global se convierten 
// en propiedades y métodos de 'window'.

console.log("Ancho de la ventana (innerWidth):", window.innerWidth);
console.log("Alto de la ventana (innerHeight):", window.innerHeight);
console.log("Posición en la pantalla (screenX, screenY):", window.screenX, window.screenY);

//
// 2. OBJETOS DE USO COMÚN: LOCATION, NAVIGATOR, HISTORY, SCREEN
// ------------------------------------------------------------
// Estos objetos permiten interactuar con diversos aspectos del navegador.

//
// 2.1 location
// ------------------------------------------------------------
// Permite acceder y manipular la URL de la página actual.
console.log("URL actual (location.href):", window.location.href);

// Ejemplo: redirigir a otra página (descomenta para usarlo)
// window.location.href = "https://www.google.com";

//
// 2.2 navigator
// ------------------------------------------------------------
// Contiene información sobre el navegador y el sistema operativo.
console.log("Información del navegador (userAgent):", window.navigator.userAgent);
console.log("Idioma del navegador (language):", window.navigator.language);

//
// 2.3 history
// ------------------------------------------------------------
// Permite manipular el historial de navegación (ir hacia atrás, adelante, etc.)
console.log("Longitud del historial:", window.history.length);

// Ejemplo: volver a la página anterior (descomentar para usarlo)
// window.history.back(); // retrocede en el historial

//
// 2.4 screen
// ------------------------------------------------------------
// Contiene información de la pantalla del dispositivo (resolución, área disponible, etc.)
console.log("Altura total de la pantalla (screen.height):", window.screen.height);
console.log("Anchura total de la pantalla (screen.width):", window.screen.width);

//
// 3. MÉTODOS DE DIÁLOGO (alert, confirm, prompt)
// ------------------------------------------------------------
// Se utilizan para interactuar con el usuario a través de ventanas emergentes.

// alert("Esto es un mensaje de alerta.");
// let respuesta = confirm("¿Estás seguro de continuar?");
// console.log("Respuesta del usuario:", respuesta);

// let nombre = prompt("Ingresa tu nombre:");
// console.log("El usuario ingresó:", nombre);

//
// 4. TIMERS (setTimeout, setInterval, clearTimeout, clearInterval)
// ------------------------------------------------------------
let timeoutID = setTimeout(() => {
  console.log("Este mensaje aparece después de 3 segundos (3000ms).");
}, 3000);

// clearTimeout(timeoutID) para cancelar el setTimeout antes de que ocurra
clearTimeout(timeoutID);

let count = 0;
let intervalID = setInterval(() => {
  count++;
  console.log(`Intervalo activo. Conteo: ${count}`);
}, 2000);

// clearInterval(intervalID) para detener el intervalo
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Intervalo detenido después de 6 segundos");
}, 6000);

//
// 5. OTRAS FUNCIONALIDADES BOM
// ------------------------------------------------------------
//
// 5.1 localStorage y sessionStorage
// ------------------------------------------------------------
// - localStorage: Almacena datos sin fecha de expiración.
// - sessionStorage: Almacena datos solo durante la sesión del navegador.
// Estas propiedades se usan comúnmente para guardar información
// de la aplicación en el navegador sin necesidad de cookies.

// Guardar un dato en localStorage
window.localStorage.setItem("miClave", "Hola mundo");
// Recuperar un dato
let valorGuardado = window.localStorage.getItem("miClave");
console.log("Valor en localStorage:", valorGuardado);

// Guardar datos en sessionStorage
window.sessionStorage.setItem("miClaveSession", "Sesión activa");
// Recuperar datos
let valorSession = window.sessionStorage.getItem("miClaveSession");
console.log("Valor en sessionStorage:", valorSession);

// Eliminar un dato
window.localStorage.removeItem("miClave");

// Para borrar toda la información del localStorage o sessionStorage
// window.localStorage.clear();
// window.sessionStorage.clear();

//
// 5.2 Cookies
// ------------------------------------------------------------
// Aunque técnicamente se manejan a través de document.cookie,
// suelen considerarse parte del BOM ya que son datos que maneja el navegador.

// Establecer una cookie (simple ejemplo, no seguro)
// document.cookie = "usuario=Juan; expires=Tue, 19 Jan 2038 03:14:07 GMT";
// Leer cookies
console.log("Cookies actuales:", document.cookie);

//
// 5.3 Abrir y cerrar ventanas (window.open, window.close)
// ------------------------------------------------------------
// - window.open(): Abre una nueva ventana o pestaña del navegador.
// - window.close(): Cierra la ventana actual (si fue abierta por JS) o la ventana abierta con open().

// Abre una nueva ventana/pestaña de Google (descomenta para usarlo)
const nuevaVentana = window.open("https://www.google.com", "_blank");

// Cerrar la ventana abierta
nuevaVentana.close();

// Cerrar la ventana actual (sujeto a restricciones del navegador):
window.close();

//
// 6. EJEMPLOS PRÁCTICOS
// ------------------------------------------------------------

// Ejemplo 1: Redirigir a otra página después de 5 segundos.
/*
setTimeout(() => {
  window.location.href = "https://www.google.com";
}, 5000);
*/

// Ejemplo 2: Guardar la URL actual en una variable y mostrarla.
/*
let urlActual = window.location.href;
alert("La URL actual es: " + urlActual);
*/

// Ejemplo 3: Detectar el navegador del usuario y mostrar un mensaje específico.
if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Estás navegando con Google Chrome.");
} else if (window.navigator.userAgent.includes("Firefox")) {
  console.log("Estás navegando con Mozilla Firefox.");
} else {
  console.log("Navegador no detectado con exactitud.");
}

// Ejemplo 4: Usar confirm para pedir confirmación antes de cerrar la pestaña.
/*
let cerrarPestana = confirm("¿Deseas cerrar esta pestaña?");
if (cerrarPestana) {
  window.close(); // Intenta cerrar la pestaña/ventana
}
*/

// Ejemplo 5: Manejar el historial de navegación.
console.log("Intenta navegar y luego volver (back) o avanzar (forward).");
/*
// Vuelve una página atrás
window.history.back();    

// Avanza una página
window.history.forward();
*/


/**
 *  Ejemplo 6:
 * Moverse a la parte superior de la página con scrollTo.
 */
function irArriba() {
  // Desplaza la ventana hasta la posición (0, 0), es decir, la parte superior.
  window.scrollTo(0, 0);
  console.log("Se ha hecho scroll a la parte superior de la página.");
}
// Llamar a la función de ejemplo (descomentar para probar).
// irArriba();

/**
 * Ejemplo 7:
 * Cambiar el título de la ventana (document.title) después de 3 segundos.
 */
setTimeout(() => {
  document.title = "Nuevo título dinámico";
  console.log("Título cambiado mediante BOM.");
}, 3000);

/**
 * Ejemplo 8:
 * Pedir confirmación para recargar la página (location.reload).
 */
function recargarPagina() {
  let confirmarRecarga = confirm("¿Deseas recargar la página?");
  if (confirmarRecarga) {
    // Recarga la página actual
    window.location.reload();
  }
}
// Llamar a la función de ejemplo (descomentar para probar).
// recargarPagina();

/**
 * Ejemplo 9:
 * Abrir una nueva ventana con window.open y cerrarla automáticamente
 * después de 5 segundos.
 */
function abrirYCerrarVentana() {
  let ventana = window.open("about:blank", "_blank", "width=300,height=200");
  ventana.document.write("<h1>Esta ventana se cerrará en 5 segundos</h1>");

  // Cerrar la ventana después de 5 segundos
  setTimeout(() => {
    ventana.close();
  }, 5000);
}
// Llamar a la función de ejemplo (descomentar para probar).
// abrirYCerrarVentana();

/**
 * Ejemplo 10:
 * Detectar si el navegador está en línea u offline con navigator.onLine.
 */
function comprobarConexion() {
  if (navigator.onLine) {
    console.log("El navegador está en línea");
    alert("Tienes conexión a Internet");
  } else {
    console.log("El navegador está offline");
    alert("No tienes conexión a Internet");
  }
}
// Llamar a la función de ejemplo (descomentar para probar).
// comprobarConexion();