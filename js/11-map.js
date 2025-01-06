/**
 * MAP EN JAVASCRIPT
 *
 * 1. ¿Qué es map?
 * 2. Principales características
 * 3. Ejemplo 1: Transformar un array de números (duplicar valores)
 * 4. Ejemplo 2: Transformar cadenas de texto (capitalizar)
 * 5. Ejemplo 3: Obtener longitudes de un array de strings
 * 6. Ejemplo 4: Uso de map con objetos
 * 7. Notas importantes sobre map
 * 8. Ejemplos adicionales sin usar objetos
 * 9. Ejercicios prácticos con map
 */

// --------------------------------------------------------------------
// 1. ¿Qué es map?
// --------------------------------------------------------------------

/**
 * 'map' es un método de los arrays en JavaScript que permite transformar
 * cada elemento del array en otro valor. Retorna un nuevo array con los
 * resultados de la transformación aplicada a cada uno de los elementos
 * del array original.
 *
 * Sintaxis Básica:
 *   const nuevoArray = array.map(function(elemento, indice, array) {
 *       // Lógica para transformar 'elemento'
 *       return valorTransformado;
 *   });
 *
 * - 'elemento': valor del elemento en la iteración actual.
 * - 'indice': posición del elemento en el array (opcional).
 * - 'array': el propio array que estamos recorriendo (opcional).
 */

// --------------------------------------------------------------------
// 2. Principales características
// --------------------------------------------------------------------

/**
 * - Crea un nuevo array: 'map' NO modifica el array original; en su lugar,
 *   devuelve un nuevo array.
 * - Función de transformación: Se proporciona una función de transformación
 *   como argumento a 'map'. Esta función se aplica a cada elemento del array,
 *   y el resultado se utiliza para construir el nuevo array.
 * - Preserva la longitud: El nuevo array tiene la misma longitud que el
 *   array original.
 * - Inmutabilidad: 'map' se alinea con el enfoque de inmutabilidad en
 *   programación funcional, ya que no modifica el array original.
 * - Útil cuando necesitas transformar cada elemento de un array de manera
 *   uniforme y construir un nuevo array basado en esas transformaciones.
 */

// --------------------------------------------------------------------
// 3. Ejemplo 1: Transformar un array de números (duplicar valores)
// --------------------------------------------------------------------

const numeros = [3, 7, 1, 5, 9];

// Usando Function Expression
const numerosDobles = numeros.map(function (numero) {
    return numero * 2;
});

// Usando Arrow function
const numerosDobles2 = numeros.map((numero) => numero * 2);

console.log("Array original:", numeros);
// [3, 7, 1, 5, 9]
console.log("Doblado (Func. Expr.):", numerosDobles);
// [6, 14, 2, 10, 18]
console.log("Doblado (Arrow Func.):", numerosDobles2);
// [6, 14, 2, 10, 18]

// --------------------------------------------------------------------
// 4. Ejemplo 2: Transformar cadenas de texto (capitalizar)
// --------------------------------------------------------------------

const nombres = ["ana", "juan", "maría", "carlos"];

// Se capitaliza la primera letra y se mantienen las restantes
const nombresCapitalizados = nombres.map(function (nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
});

console.log("\nNombres capitalizados:", nombresCapitalizados);
// Ejemplo de salida: ["Ana", "Juan", "María", "Carlos"]

// --------------------------------------------------------------------
// 5. Ejemplo 3: Obtener longitudes de un array de strings
// --------------------------------------------------------------------

const palabras = ["Python", "JavaScript", "C#", "C++", "Java"];

// map para obtener la longitud de cada palabra
const longitudes = palabras.map(function (palabra) {
    return palabra.length;
});

console.log("\nLongitudes de palabras:", longitudes);
// Ejemplo de salida: [6, 10, 2, 3, 4]

// Ejemplo 4.1: Invertir manualmente cada palabra
const frasesParaInvertir = ["Hola", "mundo", "programación", "map", "JavaScript"];

const palabrasInvertidas = frasesParaInvertir.map(function (palabra) {
    // Recorremos la palabra desde el final hasta el principio
    // y construimos la versión invertida carácter por carácter.
    let invertida = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }
    return invertida;
});

console.log("\nPalabras originales:", frasesParaInvertir);
console.log("Palabras invertidas (sin regex, usando map):", palabrasInvertidas);
/**
 * Ejemplo de salida:
 * Palabras originales: [ 'Hola', 'mundo', 'programación', 'map', 'JavaScript' ]
 * Palabras invertidas: [ 'aloH', 'odnum', 'nóicamargorp', 'pam', 'tpircSavaJ' ]
 */


// Ejemplo 4.2: Eliminar manualmente las vocales de cada palabra
// SIN usar regex (se itera letra por letra y se descartan vocales)

const palabrasParaQuitarVocales = ["mundo", "hola", "javascript", "casa", "map"];

const sinVocales = palabrasParaQuitarVocales.map(function (palabra) {
    // Definimos un conjunto de vocales (en minúsculas y mayúsculas, si lo deseas)
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    let resultado = "";

    // Recorremos cada letra y verificamos si NO es vocal
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        // Verificamos si la letra en minúscula está en el array de vocales
        if (!vocales.includes(letra.toLowerCase())) {
            resultado += letra;
        }
    }
    return resultado;
});

console.log("\nPalabras originales:", palabrasParaQuitarVocales);
console.log("Palabras sin vocales (sin regex, usando map):", sinVocales);
/**
 * Ejemplo de salida:
 * Palabras originales: [ 'mundo', 'hola', 'javascript', 'casa', 'map' ]
 * Palabras sin vocales: [ 'mnd', 'hl', 'jvscrpt', 'cs', 'mp' ]
 */

// --------------------------------------------------------------------
// 7. Notas importantes sobre map
// --------------------------------------------------------------------

/**
 * - Crea un nuevo array SIN modificar el original.
 * - Mantiene la misma longitud que el array original.
 * - Requiere una función de transformación que retorne el nuevo valor
 *   que ocupará la misma posición en el nuevo array.
 * - Es ideal cuando se necesita "transformar" todos los elementos de
 *   un array de la misma forma.
 * - Para recorrer un array sin necesitar un array nuevo, 'forEach' es
 *   más apropiado.
 * - Para filtrar elementos, 'filter' sería más adecuado.
 * - Para reducir (sumar, multiplicar o combinar) elementos a un
 *   solo valor, se usa 'reduce'.
 */

// --------------------------------------------------------------------
// 8. Ejemplos adicionales sin usar objetos
// --------------------------------------------------------------------

/**
 * Aquí veremos algunos casos comunes de map en arrays simples.
 */

// Ejemplo 8.1: Convertir un array de números de Celsius a Fahrenheit
const temperaturasCelsius = [0, 10, 20, 30, 40];
const temperaturasFahrenheit = temperaturasCelsius.map(function (tempC) {
    // Fórmula: °F = (°C × 9/5) + 32
    return (tempC * 9 / 5) + 32;
});
console.log("\nTemperaturas en Celsius:", temperaturasCelsius);
console.log("Temperaturas en Fahrenheit (map):", temperaturasFahrenheit);
// Ejemplo de salida: [32, 50, 68, 86, 104]

// Ejemplo 8.2: Convertir un array de strings a un array de booleanos
// que indique si la longitud de cada string es mayor a 3
const palabrasSimples = ["si", "hola", "hey", "map", "ok"];
const longitudMayor3 = palabrasSimples.map(function (palabra) {
    return palabra.length > 3;
});
console.log("\nPalabras originales:", palabrasSimples);
console.log("¿Longitud > 3?", longitudMayor3);
// Ejemplo de salida: [false, true, true, false, false]

// Ejemplo 8.3: Crear un array que contenga sólo la última letra de cada palabra
const ultimaLetra = palabrasSimples.map(function (palabra) {
    return palabra[palabra.length - 1];  // último índice
});
console.log("\nÚltimas letras de cada palabra:", ultimaLetra);
// Ejemplo de salida (usando palabrasSimples): ["i", "a", "y", "p", "k"]

// --------------------------------------------------------------------
// 9. Ejercicios prácticos con map
// --------------------------------------------------------------------

/**
 * Ejercicio 1:
 * Dado un array de números, crea un nuevo array con cada número
 * elevado al cuadrado usando map.
 *
 * const numerosEj = [2, 4, 6];
 * // Resultado esperado: [4, 16, 36]
 */

/**
 * Ejercicio 2:
 * Dado un array de strings, crea un nuevo array que contenga
 * la cantidad de vocales que tiene cada palabra.
 *
 * const palabrasEj = ["perro", "gato", "elefante"];
 * // Resultado esperado: [2, 2, 4] 
 * // ("perro" -> 2 vocales, "gato" -> 2 vocales, "elefante" -> 4 vocales)
 */

/**
 * Ejercicio 3:
 * Dado un array de números, crea un nuevo array que contenga
 * la forma "Par" o "Impar" para cada número (map).
 *
 * const numsParImpar = [3, 8, 11, 20];
 * // Resultado esperado: ["Impar", "Par", "Impar", "Par"]
 */

/**
 * Ejercicio 4:
 * Dado un array de frases, crea un nuevo array donde cada frase
 * sea invertida (es decir, las palabras en orden inverso).
 * Pista: puedes usar split(' '), reverse(), y join(' ').
 *
 * const frases = [
 *   "Hola mundo",
 *   "JavaScript es genial",
 *   "map transforma arrays"
 * ];
 * // Resultado esperado:
 * // [
 * //   "mundo Hola",
 * //   "genial es JavaScript",
 * //   "arrays transforma map"
 * // ]
 *
 * (Este último es un poco más complejo, pero muy útil para
 * practicar la manipulación de strings con map.)
 */

/**
 * ¡Prueba a resolver estos ejercicios y verifica los resultados 
 * en la consola! Con estos ejemplos adicionales, el tema de map
 * debería quedar muy claro en cuanto a su uso en arrays simples.
 */

/**
 * Con todo lo anterior, ahora cuentas con ejemplos que abarcan
 * desde el uso básico de map hasta ejercicios más desafiantes
 * que te ayudarán a solidificar tu comprensión de este método
 * de transformación en JavaScript.
 */
