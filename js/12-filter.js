/**
 * FILTER EN JAVASCRIPT
 *
 * 1. ¿Qué es filter?
 * 2. Principales características
 * 3. Ejemplo 1: Filtrando números mayores a un umbral
 * 4. Ejemplo 2: Filtrando números pares
 * 5. Ejemplo 3: Filtrando palabras según longitud
 * 6. Ejemplo 4: Combinando filter con map (sin objetos)
 * 7. Notas importantes sobre filter
 * 8. Ejemplos adicionales
 */

// --------------------------------------------------------------------
// 1. ¿Qué es filter?
// --------------------------------------------------------------------

/**
 * 'filter' es un método de los arrays en JavaScript que permite crear
 * un nuevo array con todos los elementos que cumplan con la condición
 * definida en una función de prueba (callback).
 */

// --------------------------------------------------------------------
// 2. Principales características
// --------------------------------------------------------------------

/**
 * - Crea un nuevo array: 'filter' NO modifica el array original; 
 *   devuelve un nuevo array.
 * - Función de prueba: Se le pasa una función que define la condición
 *   para que un elemento sea incluido en el nuevo array.
 * - La longitud del nuevo array es menor o igual que la del original.
 * - Inmutabilidad: no altera el array original.
 * - Útil para crear subconjuntos de elementos que cumplan cierto criterio.
 */

// --------------------------------------------------------------------
// 3. Ejemplo 1: Filtrando números mayores a un umbral
// --------------------------------------------------------------------

const numeros = [1, 3, 5, 8, 10, 12, 15];
const umbral = 5;

const mayoresQue5 = numeros.filter(function (numero) {
    return numero > umbral;
});

console.log("Array original:", numeros);
console.log("Números > 5 (filter):", mayoresQue5);

// --------------------------------------------------------------------
// 4. Ejemplo 2: Filtrando números pares
// --------------------------------------------------------------------

const numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});

console.log("\nNúmeros pares (filter):", numerosPares);

// --------------------------------------------------------------------
// 5. Ejemplo 3: Filtrando palabras según longitud
// --------------------------------------------------------------------

const palabras = ["map", "filter", "forEach", "js", "html", "css"];
const palabrasLargas = palabras.filter(function (palabra) {
    return palabra.length > 3;
});

console.log("\nPalabras originales:", palabras);
console.log("Palabras de longitud > 3 (filter):", palabrasLargas);

// --------------------------------------------------------------------
// 6. Ejemplo 4: Combinando filter con map (sin objetos)
// --------------------------------------------------------------------

const numerosGrandesMultiplicados = numeros
    .filter(function (numero) {
        return numero > 5; // Filtra > 5
    })
    .map(function (numero) {
        return numero * 2; // Multiplica por 2
    });

console.log("\nNúmeros originales:", numeros);
console.log("Filtrados > 5 y multiplicados x2:", numerosGrandesMultiplicados);

// --------------------------------------------------------------------
// 7. Notas importantes sobre filter
// --------------------------------------------------------------------

/**
 * - 'filter' NO muta el array original.
 * - Se usa para obtener un subconjunto de elementos que cumplan
 *   ciertas condiciones.
 * - No detiene su iteración antes de recorrer todos los elementos.
 * - Si ningún elemento cumple la condición, retorna un array vacío.
 * - Combinado con otros métodos (como map), permite procesar datos
 *   de forma encadenada.
 */

// --------------------------------------------------------------------
// 8. Ejemplos adicionales
// --------------------------------------------------------------------

/**
 * A continuación, mostramos casos típicos de filtrado en arrays
 * de números y strings, sin emplear objetos ni regex.
 */

// Ejemplo 8.1: Filtrar números negativos
const numerosVariados = [-5, 0, 3, 9, -2, 11, -7, 6];
const numerosNegativos = numerosVariados.filter(function (num) {
    return num < 0;
});

console.log("\nArray de números variados:", numerosVariados);
// [-5, 0, 3, 9, -2, 11, -7, 6]
console.log("Números negativos (filter):", numerosNegativos);
// [-5, -2, -7]

// Ejemplo 8.2: Filtrar palabras que empiezan con 'm'
const palabrasConM = ["mesa", "casa", "mundo", "gato", "mouse", "mango"];
const soloConM = palabrasConM.filter(function (palabra) {
    // Verificamos si la primera letra es 'm' o 'M'
    return palabra[0].toLowerCase() === "m";
});

console.log("\nPalabras que empiezan con 'm':", soloConM);
// ["mesa", "mundo", "mouse", "mango"]

// Ejemplo 8.3: Filtrar un array para quedarnos con strings que contengan la letra 'r'
const animales = ["perro", "gato", "tigre", "elefante", "ratón", "jirafa"];
const conLetraR = animales.filter(function (animal) {
    // Incluimos el animal si encuentra 'r' en cualquier posición (sin regex)
    // Convertimos a minúsculas para que sea case-insensitive 
    return animal.toLowerCase().indexOf("r") !== -1;
});

console.log("\nAnimales con la letra 'r':", conLetraR);
// ["perro", "tigre", "ratón", "jirafa"]

/**
 * Con estos ejemplos, tu informe sobre filter en JavaScript contendrá
 * varios casos de uso comunes:
 * - Filtrar negativos
 * - Filtrar palabras que empiecen con una letra
 * - Filtrar palabras que contengan un cierto carácter
 * 
 * Y todo sin emplear objetos ni expresiones regulares, 
 * enfocándonos en la lógica básica de comparación y búsqueda.
 */
