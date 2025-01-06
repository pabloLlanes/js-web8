/**
 * FOREACH EN JAVASCRIPT
 *
 * 1. ¿Qué es forEach?
 * 2. Características principales
 * 3. Ejemplo 1: Recorrer un array de números e imprimir cada elemento
 * 4. Ejemplo 2: Duplicando cada elemento de un array
 * 5. Ejemplo 3: Filtrando manualmente elementos de un array
 * 6. Ejemplo 4: Modificando un array existente
 * 7. Ejemplo práctico: Imprimir nombres de equipos de la NBA
 * 8. forEach vs map
 * 9. Notas importantes sobre forEach
 */

// --------------------------------------------------------------------
// 1. ¿Qué es forEach?
// --------------------------------------------------------------------

/**
 * forEach es un método de los arrays en JavaScript que permite
 * iterar sobre cada uno de los elementos del array, ejecutando
 * la función que se pasa como argumento para cada elemento.
 *
 * Sintaxis Básica:
 *   array.forEach(function(elemento, indice, array) {
 *       // Operaciones sobre cada elemento
 *   });
 *
 * - 'elemento': valor del elemento en la iteración actual.
 * - 'indice': posición del elemento en el array (opcional).
 * - 'array': el propio array que estamos recorriendo (opcional).
 */

// --------------------------------------------------------------------
// 2. Características principales
// --------------------------------------------------------------------

/**
 * - Es especialmente útil cuando se desean realizar operaciones
 *   que no requieren devolver un nuevo array.
 * - No retorna ningún valor, por lo que su resultado es 'undefined'.
 * - No se puede interrumpir su ejecución con 'break' o 'return'
 *   como en los bucles tradicionales.
 * - Se suele utilizar para:
 *    -> imprimir valores
 *    -> acumular datos en una variable externa
 *    -> realizar efectos secundarios sobre el array
 *
 * Se diferencia de otros métodos como 'map', 'filter' o 'reduce',
 * que sí retornan un nuevo array o un valor derivado.
 */

// --------------------------------------------------------------------
// 3. Ejemplo 1: Recorrer un array de números e imprimir cada elemento
// --------------------------------------------------------------------

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero, indice) {
    console.log(`Elemento en la posición ${indice}: ${numero}`);
});

// --------------------------------------------------------------------
// 4. Ejemplo 2: Duplicando cada elemento de un array
// --------------------------------------------------------------------

const original = [1, 2, 3, 4];
const duplicados = [];

original.forEach(function (numero) {
    duplicados.push(numero * 2);
});

console.log("Array original:", original);       // [1, 2, 3, 4]
console.log("Array duplicado:", duplicados);    // [2, 4, 6, 8]

// --------------------------------------------------------------------
// 5. Ejemplo 3: Filtrando manualmente elementos de un array
// --------------------------------------------------------------------

/**
 * forEach por sí solo no crea un nuevo array filtrado. Sin embargo,
 * podemos usarlo para empujar manualmente los elementos que cumplan
 * cierta condición a otro array.
 */

const mayoresQue3 = [];

numeros.forEach(function (numero) {
    if (numero > 3) {
        mayoresQue3.push(numero);
    }
});

console.log("Números mayores que 3:", mayoresQue3); // [4, 5]

// --------------------------------------------------------------------
// 6. Ejemplo 4: Modificando un array existente
// --------------------------------------------------------------------

/**
 * Cuando utilizamos forEach, podemos acceder al 'indice' y al 'array'
 * completo como parámetros adicionales, lo que nos permite
 * modificar directamente los elementos del array.
 */

const frutas = ['manzana', 'plátano', 'uva'];

frutas.forEach(function (fruta, indice, array) {
    // Convertimos cada elemento a mayúsculas modificando el array original
    array[indice] = fruta.toUpperCase();
});

console.log("Frutas en mayúsculas:", frutas); // ['MANZANA', 'PLÁTANO', 'UVA']

// --------------------------------------------------------------------
// 7. Ejemplo práctico: Imprimir nombres de equipos de la NBA
// --------------------------------------------------------------------

const equiposNBA = [
    { nombre: 'Lakers', ciudad: 'Los Angeles', conferencia: 'Oeste' },
    { nombre: 'Bulls', ciudad: 'Chicago', conferencia: 'Este' },
    { nombre: 'Warriors', ciudad: 'Golden State', conferencia: 'Oeste' }
];

/**
 * Función para imprimir los nombres de los equipos utilizando forEach
 */
function imprimirNombresEquipos() {
    console.log('\nEquipos de la NBA (utilizando forEach):');
    equiposNBA.forEach(function (equipo) {
        console.log(equipo.nombre);
    });
}

imprimirNombresEquipos();

// --------------------------------------------------------------------
// 8. forEach vs map
// --------------------------------------------------------------------

/**
 * A diferencia de forEach, el método 'map' crea y retorna un nuevo array
 * con el resultado de aplicar una función a cada elemento del array original.
 *
 * En este ejemplo, usamos 'map' para generar un array que contenga
 * únicamente los nombres de los equipos.
 */

function obtenerNombresEquipos() {
    const nombresEquipos = equiposNBA.map(function (equipo) {
        return equipo.nombre;
    });

    console.log('\nNombres de equipos de la NBA (utilizando map):');
    console.log(nombresEquipos);
}

obtenerNombresEquipos();

// --------------------------------------------------------------------
// 9. Notas importantes sobre forEach
// --------------------------------------------------------------------

/**
 * - No retorna un valor (su valor de retorno es siempre undefined).
 * - No se puede "romper" (break) a mitad de su ejecución.
 * - Sirve para realizar efectos secundarios (imprimir, mutar el array, etc.).
 * - Si deseas crear un nuevo array basado en la transformación de cada elemento,
 *   conviene usar 'map'.
 * - Para filtrar elementos, es más conveniente 'filter'.
 *
 * EJEMPLO DE USO EN TAREAS DIARIAS:
 * forEach puede usarse para:
 *   - Contar la frecuencia de aparición de elementos.
 *   - Hacer sumas acumulativas de valores dentro de un array.
 *   - Imprimir o formatear datos para mostrarlos al usuario.
 */


