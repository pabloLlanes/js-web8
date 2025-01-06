/**
 ARREGLOS (ARRAYS) EN JAVASCRIPT
 *
 * Los arreglos son estructuras de datos fundamentales en JavaScript
 * que permiten almacenar colecciones ordenadas de elementos. Pueden
 * contener cualquier tipo de dato, incluidos otros arreglos y objetos.
 *
 * En este archivo encontrarás:
 * 
 * 1. Creación y manipulación básica de arreglos
 * 2. Métodos comunes de arreglos
 * 3. Iteración sobre arreglos
 * 4. Arreglos de objetos
 * 5. Arreglos multidimensionales
 * 7. Buenas prácticas al trabajar con arreglos
 */

// --------------------------------------------------------------------
// 1. CREACIÓN Y MANIPULACIÓN BÁSICA DE ARREGLOS
// --------------------------------------------------------------------

/**
 * Un arreglo puede ser creado utilizando corchetes [] y puede contener
 * elementos de diferentes tipos.
 */

// Crear un array inicial
let frutas = ['manzana', 'pera', 'uva', 'kiwi', 'piña'];

console.log("Arreglo inicial de frutas:", frutas);

// Agregar elementos al final del array usando push()
frutas.push('naranja', 'sandía');
console.log("Después de push:", frutas); // ['manzana', 'pera', 'uva', 'kiwi', 'piña', 'naranja', 'sandía']

// Eliminar el último elemento del array usando pop()
let ultimaFruta = frutas.pop();
console.log("Elemento eliminado con pop():", ultimaFruta); // 'sandía'
console.log("Después de pop:", frutas); // ['manzana', 'pera', 'uva', 'kiwi', 'piña', 'naranja']

// Eliminar el primer elemento del array usando shift()
let primeraFruta = frutas.shift();
console.log("Elemento eliminado con shift():", primeraFruta); // 'manzana'
console.log("Después de shift:", frutas); // ['pera', 'uva', 'kiwi', 'piña', 'naranja']

// Agregar elementos al inicio del array usando unshift()
frutas.unshift('melón', 'ciruela');
console.log("Después de unshift:", frutas); // ['melón', 'ciruela', 'pera', 'uva', 'kiwi', 'piña', 'naranja']

// Obtener una porción del array usando slice()
let porcion = frutas.slice(2, 5);
console.log("Porción del array (slice 2-5):", porcion); // ['pera', 'uva', 'kiwi']

// Concatenar arreglos usando concat()
let otrasFrutas = ['durazno', 'mango'];
let todasLasFrutas = frutas.concat(otrasFrutas);
console.log("Arreglo concatenado:", todasLasFrutas);
// ['melón', 'ciruela', 'pera', 'uva', 'kiwi', 'piña', 'naranja', 'durazno', 'mango']

// Encontrar el índice de un elemento usando indexOf()
let indiceUva = frutas.indexOf('uva');
console.log("Índice de 'uva':", indiceUva); // 3

// Si el elemento no existe, indexOf() devuelve -1
let indiceNoExiste = frutas.indexOf('sdka;ldka');
console.log("Índice de elemento inexistente:", indiceNoExiste); // -1

// Verificar si un elemento existe en el array usando includes()
let existePera = frutas.includes('remolacha');
console.log("¿Existe 'remolacha' en el array?", existePera); // false

// Invertir el orden de los elementos usando reverse()
frutas.reverse();
console.log("Arreglo invertido:", frutas);
// ['naranja', 'piña', 'kiwi', 'uva', 'pera', 'ciruela', 'melón']

// Eliminar elementos de una posición específica usando splice()
let elementosEliminados = frutas.splice(2, 3);
// Elimina desde la posición 2, tres elementos
console.log("Elementos eliminados con splice(2, 3):", elementosEliminados); // ['kiwi', 'uva', 'pera']
console.log("Arreglo después de splice:", frutas); // ['naranja', 'piña', 'ciruela', 'melón']

// Unir todos los elementos del array en una cadena usando join()
let cadenaDeFrutas = frutas.join(', ');
console.log("Cadena de frutas:", cadenaDeFrutas); // 'naranja, piña, ciruela, melón'

// --------------------------------------------------------------------
// 2. MÉTODOS COMUNES DE ARREGLOS
// --------------------------------------------------------------------

/**
 * JavaScript ofrece una variedad de métodos para manipular arreglos.
 * A continuación se describen algunos de los más utilizados:
 */

// push() - Agrega uno o más elementos al final del array
frutas.push('fresa');
console.log("Después de push('fresa'):", frutas);

// pop() - Elimina el último elemento del array y lo retorna
let ultimaFrutaPop = frutas.pop();
console.log("Elemento eliminado con pop():", ultimaFrutaPop);

// shift() - Elimina el primer elemento del array y lo retorna
let primeraFrutaShift = frutas.shift();
console.log("Elemento eliminado con shift():", primeraFrutaShift);

// unshift() - Agrega uno o más elementos al inicio del array
frutas.unshift('mora');
console.log("Después de unshift('mora'):", frutas);

// slice() - Retorna una copia de una parte del array
let porcionSlice = frutas.slice(1, 3);
console.log("Porción del array (slice 1-3):", porcionSlice);

// splice() - Cambia el contenido del array eliminando, reemplazando o agregando elementos
let elementosSplice = frutas.splice(1, 2, 'arándano', 'cereza');
console.log("Elementos eliminados con splice(1, 2, 'arándano', 'cereza'):", elementosSplice);
console.log("Arreglo después de splice:", frutas);

// concat() - Combina dos o más arrays
let masFrutas = ['limón', 'mandarina'];
let frutasCombinadas = frutas.concat(masFrutas);
console.log("Frutas combinadas:", frutasCombinadas);

// indexOf() - Retorna el primer índice en el que se encuentra un elemento
let indiceCereza = frutas.indexOf('cereza');
console.log("Índice de 'cereza':", indiceCereza);

// includes() - Determina si un array incluye un elemento
let incluyeMango = frutas.includes('mango');
console.log("¿Incluye 'mango'?", incluyeMango); // false

// reverse() - Invierte el orden de los elementos del array
frutas.reverse();
console.log("Arreglo invertido:", frutas);

// join() - Une todos los elementos de un array en una cadena
let cadenaJoin = frutas.join(' - ');
console.log("Cadena unida con join(' - '):", cadenaJoin);

// --------------------------------------------------------------------
// 3. ITERACIÓN SOBRE ARREGLOS
// --------------------------------------------------------------------

/**
 * Iterar sobre los elementos de un arreglo es una tarea común. 
 * JavaScript ofrece varias estructuras para ello:
 * 
 * - for
 * - for...of
 */

// Ejemplo con for
console.log("\nEjemplo de iteración con for:");
for (let i = 0; i < todasLasFrutas.length; i++) {
    console.log(`Fruta en posición ${i}: ${todasLasFrutas[i]}`);
}

// Ejemplo con for...of
console.log("\nEjemplo de iteración con for...of:");
for (const fruta of todasLasFrutas) {
    console.log(`Fruta: ${fruta}`);
}

// --------------------------------------------------------------------
// 4. ARREGLOS DE OBJETOS
// --------------------------------------------------------------------

/**
 * Los arreglos pueden contener objetos, lo que permite manejar colecciones
 * de datos complejos. A continuación se muestran ejemplos de operaciones
 * con arreglos de objetos.
 */

const equipos = [
    {
        nombre: "Real Madrid",
        copas: 34,
        fundacion: 1902
    },
    {
        nombre: "FC Barcelona",
        copas: 26,
        fundacion: 1899
    },
    {
        nombre: "Manchester United",
        copas: 20,
        fundacion: 1878
    },
    {
        nombre: "Bayern Munich",
        copas: 31,
        fundacion: 1900
    },
    {
        nombre: "Boca Juniors",
        copas: 71,
        fundacion: 1905
    },
];

const equipos2 = [
    {
        nombre: "MentorTeam",
        copas: 2,
        fundacion: 1902
    },
    {
        nombre: "Winners",
        copas: 3,
        fundacion: 1899
    },
    {
        nombre: "Rolling",
        copas: 2,
        fundacion: 1878,
    },
];

// Función para calcular el promedio de copas
function mostrarPromediosEquipos(arrayEquipos) {
    let totalCopas = 0;

    for (let i = 0; i < arrayEquipos.length; i++) {
        totalCopas += arrayEquipos[i].copas;
    }

    const promedio = totalCopas / arrayEquipos.length;
    return `El total de copas de los ${arrayEquipos.length} equipos es: ${totalCopas}
y el promedio de copas por equipo es: ${promedio.toFixed(2)}`;
}

console.log(mostrarPromediosEquipos(equipos));
console.log(mostrarPromediosEquipos(equipos2));

// Función para buscar el equipo con más copas
function buscarMayorGanador(arrayEquipos) {
    let equipoConMasCopas = arrayEquipos[0];

    for (let i = 1; i < arrayEquipos.length; i++) {
        if (arrayEquipos[i].copas > equipoConMasCopas.copas) {
            equipoConMasCopas = arrayEquipos[i];
        }
    }

    return `Equipo con más copas: ${equipoConMasCopas.nombre} con ${equipoConMasCopas.copas} copas.`;
}

console.log(buscarMayorGanador(equipos));
console.log(buscarMayorGanador(equipos2));

// --------------------------------------------------------------------
// 5. ARREGLOS MULTIDIMENSIONALES
// --------------------------------------------------------------------

/**
 * Los arreglos pueden contener otros arreglos, formando estructuras
 * multidimensionales como matrices.
 */

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizNombres = [
    ['Juan', 'María', 'Pedro'],
    ['Laura', 'Carlos', 'Ana'],
    ['Luis', 'Lucía', 'Sofía']
];

// Iterar sobre una matriz usando bucles anidados
const filas = matriz.length;
const columnas = matriz[0].length;

console.log("\nIteración sobre matriz de números:");
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        const elemento = matriz[i][j];
        console.log(`Elemento en (${i}, ${j}): ${elemento}`);
    }
}

console.log("\nIteración sobre matriz de nombres:");
for (let i = 0; i < matrizNombres.length; i++) {
    for (let j = 0; j < matrizNombres[i].length; j++) {
        const nombre = matrizNombres[i][j];
        console.log(`Nombre en (${i}, ${j}): ${nombre}`);
    }
}

// --------------------------------------------------------------------
// 7. ARREGLOS DE NÚMEROS Y OPERACIONES COMUNES
// --------------------------------------------------------------------

/**
 * Trabajar con arreglos de números es común para realizar cálculos
 * y estadísticas. A continuación se presentan algunos ejemplos.
 */

// Arreglo de números
var elementos = [1, 2, 3, 4, 2, 5, 6, 1];
var elementosRepetidos = [];

// Encontrar elementos repetidos
for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var primeraAparicion = elementos.indexOf(elemento);

    if (primeraAparicion !== i) {
        if (elementosRepetidos.indexOf(elemento) === -1) {
            elementosRepetidos.push(elemento);
        }
    }
}
console.log("Elementos Repetidos:", elementosRepetidos); // [2, 1]

// Encontrar el número mayor en un arreglo de números
var numeros = [10, 25, 7, 34, 56, 3, 89, 12];
var numeroMayor = Math.max(...numeros);
console.log("Número mayor en el arreglo:", numeroMayor); // 89

// Encontrar el número menor en un arreglo de números
var numeroMenor = Math.min(...numeros);
console.log("Número menor en el arreglo:", numeroMenor); // 3

// --------------------------------------------------------------------
// 8. BUENAS PRÁCTICAS AL TRABAJAR CON ARREGLOS
// --------------------------------------------------------------------

/**
 * - Utilizar métodos de arreglos cuando sea posible para escribir código
 *   más declarativo y legible.
 * - Evitar mutar el arreglo original a menos que sea necesario.
 * - Usar constantes (const) para declarar arreglos si no se van a reasignar.
 * - Utilizar nombres descriptivos para los arreglos y variables relacionadas.
 * - Aprovechar los métodos avanzados para operaciones complejas.
 */

// Ejemplo de uso de métodos avanzados sin mutar el arreglo original
const frutasOriginal = ['manzana', 'pera', 'uva', 'kiwi', 'piña'];
const frutasFiltradas = frutasOriginal.filter(fruta => fruta.startsWith('p'));
console.log("Frutas que empiezan con 'p':", frutasFiltradas); // ['pera', 'piña']
console.log("Arreglo original:", frutasOriginal); // ['manzana', 'pera', 'uva', 'kiwi', 'piña']

/**
 * Los arreglos son herramientas poderosas en JavaScript para manejar
 * colecciones de datos. Conocer y dominar sus métodos y técnicas de
 * iteración permite escribir código más eficiente, legible y mantenible.
 *
 * Recuerda:
 * - Elegir el método adecuado para la tarea específica.
 * - Evitar mutaciones innecesarias del arreglo original.

 */
