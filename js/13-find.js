/**
 * FIND EN JAVASCRIPT
 *
 * 1. ¿Qué es find?
 * 2. Principales características
 * 3. Ejemplo 1: Buscando el primer número mayor que un umbral
 * 4. Ejemplo 2: Buscando el primer número par
 * 5. Ejemplo 3: Buscando la primera palabra que empiece con un carácter
 * 6. Notas importantes sobre find
 * 7. Ejemplos adicionales
 */

// --------------------------------------------------------------------
// 1. ¿Qué es find?
// --------------------------------------------------------------------

/**
 * 'find' es un método de los arrays en JavaScript que permite retornar
 * el primer elemento que cumpla la condición definida en una función
 * de prueba (callback).
 *
 * Sintaxis Básica:
 *   const elementoEncontrado = array.find(function(elemento, indice, array) {
 *       // Devuelve true si el elemento cumple la condición
 *       // find retornará este 'elemento' y detendrá la búsqueda
 *   });
 *
 * - 'elemento': valor del elemento en la iteración actual.
 * - 'indice': posición del elemento en el array (opcional).
 * - 'array': el propio array que estamos recorriendo (opcional).
 *
 * Si ningún elemento cumple la condición, find retorna undefined.
 */

// --------------------------------------------------------------------
// 2. Principales características
// --------------------------------------------------------------------

/**
 * - Devuelve el PRIMER elemento que cumple la condición.
 * - Deja de iterar una vez que encuentra un elemento que devuelva true.
 * - Si no encuentra ningún elemento que cumpla la condición, retorna undefined.
 * - No modifica el array original (inmutable).
 * - Útil cuando se necesita "encontrar" un elemento específico, en lugar
 *   de crear un subconjunto (para eso sirve filter).
 */

// --------------------------------------------------------------------
// 3. Ejemplo 1: Buscando el primer número mayor que un umbral
// --------------------------------------------------------------------

const numeros = [1, 3, 5, 8, 10, 12, 15];
const umbral = 5;

// Queremos el PRIMER número mayor que 5
const primerMayorQue5 = numeros.find(function (numero) {
    return numero > umbral;
});

console.log("Array original:", numeros);
// [1, 3, 5, 8, 10, 12, 15]
console.log("Primer número > 5 (find):", primerMayorQue5);
// 8 (detiene la búsqueda en el primer elemento que cumple)

// --------------------------------------------------------------------
// 4. Ejemplo 2: Buscando el primer número par
// --------------------------------------------------------------------

const primerPar = numeros.find(function (numero) {
    return numero % 2 === 0;
});

console.log("\nPrimer número par (find):", primerPar);
// 8 (detiene la búsqueda en el 8, aunque hay otros pares después)

// --------------------------------------------------------------------
// 5. Ejemplo 3: Buscando la primera palabra que empiece con un carácter
// --------------------------------------------------------------------

const palabras = ["map", "filter", "forEach", "js", "html", "css"];
const letraInicial = "f";

// Buscamos la PRIMERA palabra que comience con 'f'
const primeraPalabraConF = palabras.find(function (palabra) {
    return palabra[0].toLowerCase() === letraInicial.toLowerCase();
});

console.log("\nPalabras originales:", palabras);
// ["map", "filter", "forEach", "js", "html", "css"]
console.log(`Primera palabra que empieza con '${letraInicial}':`, primeraPalabraConF);
// "filter" (detiene la búsqueda en "filter")

// --------------------------------------------------------------------
// 6. Notas importantes sobre find
// --------------------------------------------------------------------

/**
 * - 'find' se detiene al encontrar el primer elemento que cumple la condición,
 *   devolviendo dicho elemento.
 * - Retorna 'undefined' si ningún elemento la cumple.
 * - A diferencia de 'filter', sólo devuelve un ÚNICO elemento (el primero),
 *   en lugar de un nuevo array.
 * - Si necesitas múltiples elementos, usa 'filter'.
 * - No muta el array original.
 * - Es útil para búsquedas "puntuales": "la primera palabra que empiece con...",
 *   "el primer número que sea...", etc.
 */

// --------------------------------------------------------------------
// 7. Ejemplos adicionales
// --------------------------------------------------------------------

/**
 * A continuación, mostramos casos típicos de uso con números y strings.
 */

// Ejemplo 7.1: Encontrar el primer número negativo
const numerosMixtos = [-5, 3, 9, -2, 11, -7, 6];
const primerNegativo = numerosMixtos.find(function (num) {
    return num < 0;
});

console.log("\nArray de números mixtos:", numerosMixtos);
// [-5, 3, 9, -2, 11, -7, 6]
console.log("Primer número negativo (find):", primerNegativo);
// -5 (el primero que cumple num < 0)

// Ejemplo 7.2: Encontrar la primera palabra cuya longitud sea > 5
const masPalabras = ["casa", "auto", "programación", "map", "elefante", "python"];
const primeraLarga = masPalabras.find(function (palabra) {
    return palabra.length > 5;
});

console.log("\nPalabras:", masPalabras);
// ["casa", "auto", "programación", "map", "elefante", "python"]
console.log("Primera palabra con longitud > 5 (find):", primeraLarga);
// "programación" (se detiene aquí, aunque "elefante" también es > 5)

// Ejemplo 7.3: Encontrar la primera palabra que contenga la letra 'o'
const palabrasConO = ["casa", "mundo", "js", "hola", "roca", "html"];
const primeraConO = palabrasConO.find(function (palabra) {
    // Verificamos si la palabra contiene 'o' (sin regex, indexOf).
    return palabra.toLowerCase().indexOf("o") !== -1;
});

console.log("\nPalabras con posible 'o':", palabrasConO);
// ["casa", "mundo", "js", "hola", "roca", "html"]
console.log("Primera palabra con 'o' (find):", primeraConO);
// "mundo"

/**
 * Estos ejemplos extras demuestran cómo 'find' se utiliza para
 * "encontrar" el primer elemento que cumpla una condición dada.
 *
 * Con todo esto, tu informe sobre 'find' en JavaScript cubrirá
 * la teoría, ejemplos básicos y casos típicos que NO involucran
 * objetos, permitiendo ver su comportamiento de manera clara y
 * sencilla en arrays de números y strings.
 */
