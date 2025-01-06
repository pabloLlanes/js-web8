/**
 * EL OBJETO MATH EN JAVASCRIPT
 *
 * 1. Métodos para redondear números
 * 2. Obtención de máximos, mínimos y potencias
 * 3. Números aleatorios
 * 4. Raíz cuadrada
 * 5. Operaciones para formatear números (toFixed, parseFloat)
 */

// --------------------------------------------------------------------
// 1. Métodos para redondear números
// --------------------------------------------------------------------

/**
 * Math.floor(x)
 *   Redondea "hacia abajo" (siempre al menor número entero menor o igual a x).
 */
console.log(Math.floor(45.89)); // 45

/**
 * Math.round(x)
 *   Redondea al entero más cercano.
 *   - Si la parte decimal de x es >= 0.5, redondea hacia arriba.
 *   - Si es < 0.5, redondea hacia abajo.
 */
console.log(Math.round(45.5)); // 46

// --------------------------------------------------------------------
// 2. Obtención de máximos, mínimos y potencias
// --------------------------------------------------------------------

/**
 * Math.max(x, y, z, ...)
 *   Retorna el valor numérico más alto de la lista de argumentos.
 */
console.log("El número máximo es: " + Math.max(56.5, 45, 90, 5)); // 90

/**
 * Math.min(x, y, z, ...)
 *   Retorna el valor numérico más bajo de la lista de argumentos.
 */
console.log("El número menor es: " + Math.min(56.5, 45, 90, 5)); // 5

// Elevar a la potencia
let base = parseInt("4");
let exponente = 2;

/**
 * Math.pow(base, exponente)
 *   Retorna base elevado a la potencia exponente.
 *   También se puede usar el operador ** en versiones modernas de JavaScript:
 *   Ejemplo: base ** exponente
 */
console.log(
    `El número ${base} a la potencia ${exponente} es ` + Math.pow(base, exponente)
); // "El número 4 a la potencia 2 es 16"

// --------------------------------------------------------------------
// 3. Método random() para números aleatorios
// --------------------------------------------------------------------

/**
 * Math.random()
 *   Devuelve un número pseudoaleatorio entre 0 (incluido) y 1 (excluido).
 *   Si deseas un entero entre 0 y 10, por ejemplo, puedes multiplicar por 10 y usar Math.floor o Math.round.
 */

let numeroAleatorio = Math.random();
console.log("Número aleatorio entre 0 y 1:", numeroAleatorio);

// Un número aleatorio entre 0 y 10 (entero)
let numeroAleatorio0a10 = Math.floor(Math.random() * 11);
console.log("Número aleatorio entre 0 y 10:", numeroAleatorio0a10);

// --------------------------------------------------------------------
// 4. Raíz cuadrada
// --------------------------------------------------------------------

/**
 * Math.sqrt(x)
 *   Calcula la raíz cuadrada de x.
 */
console.log(Math.sqrt(64)); // 8

// --------------------------------------------------------------------
// 5. Operaciones para formatear números (toFixed, parseFloat)
// --------------------------------------------------------------------

let numero1 = "34.656778";

/**
 *  Formatear un número con dos decimales:
 *  - Opción 1: Multiplicar, redondear y dividir.
 */
console.log(Math.round(numero1 * 100) / 100); // 34.66

/**
 *  - Opción 2: Usar el método toFixed() de Number.
 *    Devuelve un string con el número formateado.
 */
console.log("Usando toFixed: " + Number(numero1).toFixed(2)); // "34.66"

/**
 *  parseFloat()
 *    Convierte (parsea) una cadena y devuelve un número de punto flotante.
 *    Es útil para convertir el resultado de toFixed() (string) a número,
 *    aunque en muchos casos se queda en string si no lo usas.
 */

console.log(parseFloat(Number(numero1).toFixed(2))); // 34.66

/**
 * NOTA:
 * - parseInt() se usa para convertir una cadena a un entero (trunca decimales).
 * - parseFloat() mantiene la parte decimal.
 */
