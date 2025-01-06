// archivo: bucles.js

/**
 * BUCLES (LOOPS) EN JAVASCRIPT
 *
 * Los bucles o loops permiten ejecutar un bloque de código repetidamente
 * mientras se cumpla o no cierta condición. JavaScript cuenta con varias
 * estructuras de bucles:
 *
 * 1. while
 * 2. do-while
 * 3. for
 *
 * También veremos el uso de la instrucción 'break' (y brevemente 'continue')
 * para controlar el flujo de ejecución dentro de los bucles.
 */

// --------------------------------------------------------------------
// 1. BUCLE WHILE
// --------------------------------------------------------------------

/**
 * Sintaxis:
 *   while (condición) {
 *       // bloque de código
 *       // (se ejecuta mientras la condición sea true)
 *   }
 *
 * Característica principal:
 * - Verifica la condición antes de entrar al bloque de código.
 * - Si la condición es false desde el inicio, el bloque no se ejecuta ni una sola vez.
 */

console.log("Ejemplo de bucle WHILE:");

let contadorWhile = 0;
while (contadorWhile < 5) {
    console.log("Iteración WHILE " + (contadorWhile + 1));
    contadorWhile++;
}
console.log("\n");

/**
 * En este ejemplo, el bloque se repite mientras 'contadorWhile < 5'.
 * Cada vez que se ejecuta, se incrementa la variable 'contadorWhile'
 * en 1 para evitar un bucle infinito.
 */

// Ejemplo adicional donde el bucle NO se ejecuta
let i = 6;
while (i < 5) {
    console.log("Hola Mundo, el valor de i es menor que 5");
    i += 4;
    // Este bloque no se ejecuta porque i = 6 no cumple la condición inicial (6 < 5)
}

// --------------------------------------------------------------------
// 2. BUCLE DO-WHILE
// --------------------------------------------------------------------

/**
 * Sintaxis:
 *   do {
 *       // bloque de código
 *   } while (condición);
 *
 * Característica principal:
 * - Ejecuta el bloque de código al menos UNA vez, y luego comprueba la condición.
 * - Si la condición es true, continúa el ciclo; si es false, se detiene.
 */

console.log("Ejemplo de bucle DO-WHILE:");

let contadorDoWhile = 0;
do {
    console.log("Iteración DO-WHILE " + (contadorDoWhile + 1));
    contadorDoWhile++;
} while (contadorDoWhile < 5);
console.log("\n");

// Ejemplo adicional donde el bucle ejecuta UNA vez aunque la condición sea false
let j = 6;
do {
    console.log("Hola Mundo (do-while). El valor de j es:", j);
    j++;
} while (j < 5);
// Se ejecuta al menos una vez aunque j = 6 no cumpla la condición (j < 5)

// --------------------------------------------------------------------
// 3. BUCLE FOR
// --------------------------------------------------------------------

/**
 * Sintaxis:
 *   for (inicialización; condición; incremento/decremento) {
 *       // bloque de código
 *   }
 *
 * Característica principal:
 * - Es muy usado cuando conocemos de antemano cuántas iteraciones vamos a realizar.
 * - Combina la inicialización, la condición y la actualización de la variable de control
 *   en una sola línea.
 */

console.log("Ejemplo de bucle FOR:");

for (let k = 0; k < 5; k++) {
    console.log("Iteración FOR " + (k + 1));
}

/**
 * - En este caso, k se inicializa en 0.
 * - Mientras k < 5 sea true, se ejecuta el bloque.
 * - Tras cada iteración, se incrementa k en 1.
 */

// Ejemplo adicional con for, uso de if dentro del bucle
let miNumero = 12;
const cajonDeManzanas = [];

for (let x = 1; x <= miNumero; x++) {
    if (x === 2) {
        console.log("Iteración número:", x);
        cajonDeManzanas.push("manzana");
    } else {
        console.log("No se carga el cajón en la iteración:", x);
    }
}
console.log("Contenido del cajonDeManzanas:", cajonDeManzanas);

// --------------------------------------------------------------------
// 4. USO DE 'BREAK' Y 'CONTINUE'
// --------------------------------------------------------------------

/**
 * - break: Detiene la ejecución del bucle inmediatamente y
 *          sale de la estructura de repetición.
 * - continue: Detiene la iteración actual y pasa a la siguiente (sin salir del bucle).
 */

// Ejemplo con 'break'
console.log("\nEjemplo de 'break' en un bucle for:");
for (let n = 0; n < 10; n++) {
    if (n === 5) {
        console.log("Se encontró el valor 5, se detiene el bucle con 'break'.");
        break; // Sale del bucle, ya no imprime n=6... n=9
    }
    console.log("Valor de n:", n);
}

/**
 * En este ejemplo, cuando n llega a 5, se ejecuta 'break' y
 * se sale por completo del bucle.
 */

// Ejemplo con 'continue'
console.log("\nEjemplo de 'continue' en un bucle for:");
for (let m = 0; m < 5; m++) {
    if (m === 2) {
        console.log("Se encontró el valor 2, se salta esta iteración con 'continue'.");
        continue;
        // Ignora el resto del bloque para m=2, pero el bucle continúa con m=3.
    }
    console.log("Valor de m:", m);
}

/**
 * Aquí, cuando m es 2, la instrucción 'continue' hace que el bucle
 * salte la ejecución del bloque y continúe con la siguiente iteración.
 */

// --------------------------------------------------------------------
// RESUMEN FINAL
// --------------------------------------------------------------------

/**
 * 1) while
 *    - Verifica la condición antes de entrar al bloque.
 *    - El bloque puede no ejecutarse si la condición es false al inicio.
 *
 * 2) do-while
 *    - Ejecuta el bloque al menos una vez.
 *    - Verifica la condición después de la primera ejecución.
 *
 * 3) for
 *    - Ideal cuando se conoce cuántas iteraciones se van a realizar.
 *    - Integra inicialización, condición y actualización en una sola línea.
 *
 * 4) break y continue
 *    - break: Detiene y sale del bucle actual.
 *    - continue: Salta a la siguiente iteración sin salir del bucle.
 *
 */
