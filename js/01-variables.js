/**
 * VARIABLES, TIPOS DE DATOS, CONSOLE.LOG Y OPERADORES EN JAVASCRIPT
 *
 * 1. Declaración e Inicialización de Variables
 * 2. Tipos de Datos
 * 3. Ámbito de Variables (let, var, const)
 * 4. Constantes
 * 5. Buenas Prácticas
 * 6. console.log (para depuración)
 * 7. Operadores (Aritméticos, Unitarios, Relacionales)
 * 8. Ejemplos de uso de prompt y template strings
 */

// --------------------------------------------------------------------
// 1. Declaración e Inicialización de Variables
// --------------------------------------------------------------------

/**
 * Las variables son espacios de memoria para almacenar datos.
 * Podemos declararlas con let, var o const.
 */

// 'let' declara una variable con alcance de bloque.
let nombre = "Pablo";

// 'var' declara una variable global o local a una función (no al bloque).
var apellido = "Llanes";

// 'const' define una constante que no puede ser reasignada.
const valorFijo = 10;

// --------------------------------------------------------------------
// 2. Tipos de Datos
// --------------------------------------------------------------------

/**
 * JavaScript cuenta con diferentes tipos de datos:
 * - String (cadenas de texto)
 * - Number (enteros y decimales)
 * - Boolean (true o false)
 * - Null (ausencia intencional de valor)
 * - Undefined (variable declarada pero sin inicializar)
 * - Array (lista ordenada de valores)
 * - Object (colección de propiedades clave-valor)
 */

// String
let cliente = "John";
const otroString = "Hoy es un día lluvioso";
let stringVacio = "";

// Number
let numero1 = 34;
let numero2 = 12.24;

// Boolean
let estaDisponible = true;
const esAdmin = false;

// Null
let deposito = null;

// Undefined
let caja;

// Array
let arreglo = [1, "Sandwich", true, "Cubos Mágicos"];

// Object
let persona = {
    nombre: "José",
    apellido: "Perez",
    edad: 23,
};

const car = {
    year: 1995,
    model: "Renault",
};

// --------------------------------------------------------------------
// 3. Ámbito de Variables
// --------------------------------------------------------------------

/**
 * - 'let' y 'const' tienen alcance de bloque (es decir, entre llaves {}). 
 * - 'var' tiene alcance global o de función.
 */

// --------------------------------------------------------------------
// 4. Constantes
// --------------------------------------------------------------------

/**
 * - Las variables declaradas con 'const' no pueden ser reasignadas.
 * - Si una constante es un objeto o un array, sus propiedades o elementos
 *   sí pueden cambiar, pero no su referencia.
 */

// --------------------------------------------------------------------
// 5. Buenas Prácticas
// --------------------------------------------------------------------

/**
 * - Utilizar 'let' para variables que cambian de valor.
 * - Utilizar 'const' para valores que no deben cambiar.
 * - Evitar el uso de 'var' para prevenir problemas de alcance.
 */

// --------------------------------------------------------------------
// 6. console.log (para depuración)
// --------------------------------------------------------------------

/**
 * 'console.log' se utiliza para imprimir mensajes y valores en la consola.
 * Es muy útil para depurar y verificar valores a lo largo del código.
 */

// Ejemplos con console.log
console.log("Hola, mundo!");
console.log(nombre);
console.log("El cliente es:", cliente, "y su número es:", numero1);
console.log("Datos de la persona:", persona);
console.log("Elementos del arreglo:", arreglo);

// Uso de template literals
console.log(`El nombre completo es: ${nombre} ${apellido}`);

/**
 * Puntos Clave sobre console.log:
 * - Imprime cualquier tipo de dato (strings, números, booleanos, objetos, arrays).
 * - En la consola del navegador, se pueden explorar objetos de forma interactiva.
 * - Se recomienda eliminar console.log innecesarios en producción.
 */

// --------------------------------------------------------------------
// 7. Operadores (Aritméticos, Unitarios, Relacionales)
// --------------------------------------------------------------------

// Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

// Operadores unitarios (++ y --)
// (Incremento y decremento, aunque aquí no se ve un ejemplo directo)

// Operadores relacionales
console.log(numero1 == numero2);   // false
console.log(numero1 >= numero2);   // true/false
console.log(numero1 <= numero2);   // true/false
console.log(numero1 != numero2);   // true

let numero3 = 23;
let numero4 = "23";

console.log("¿Los valores son iguales? (sin considerar tipo)");
console.log(numero3 == numero4);   // true

console.log("¿Los valores son iguales? (considerando tipo)");
console.log(numero3 === numero4);  // false

console.log("¿Los valores no son iguales? (sin considerar tipo)");
console.log(numero3 != numero4);   // false

console.log("¿Los valores no son iguales? (considerando tipo)");
console.log(numero3 !== numero4);  // true

// Negación lógica
let verdadero = true;
console.log(!verdadero);           // false

// Uso del operador typeof
console.log(typeof nombre);     // "string"
console.log(typeof numero1);    // "number"
console.log(typeof estaDisponible); // "boolean"
console.log(typeof persona);    // "object"
console.log(typeof caja);       // "undefined"


// --------------------------------------------------------------------
// 8. Ejemplos de uso de prompt y template strings
// --------------------------------------------------------------------

/**
 * 'prompt' se utiliza para solicitar datos al usuario (funciona en el navegador).
 * El valor que retorna siempre es un string. Si se desea convertirlo a número,
 * se puede usar parseInt(), parseFloat(), etc.
 */

// Solicitar nombre y apellido al usuario
let firstName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");

// Imprimir mensaje usando template strings
console.log(`Hola, me llamo ${firstName} ${lastName}`);

/**
 * Con este archivo, tienes un panorama general de cómo declarar
 * variables, sus tipos de datos, el uso de console.log y los 
 * operadores en JavaScript. ¡Pruébalo y haz tus propios experimentos!
 */

