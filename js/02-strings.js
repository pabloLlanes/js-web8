/**
 * STRINGS EN JAVASCRIPT
 * 1. Definición de variables
 * 2. Concatenación e interpolación
 * 3. Métodos de transformación (toUpperCase, toLowerCase, trim)
 * 4. Métodos de búsqueda (indexOf, lastIndexOf, includes)
 * 5. Métodos de extracción (substring, slice, charAt)
 * 6. Métodos de reemplazo y división (replace, split, repeat)
 * 7. Métodos de relleno (padStart, padEnd)
 * 8. Comparación y validación (startsWith, endsWith)
 * 9. Ejercicios de ejemplo
 */

// --------------------------------------------------------------------
// 1. Definición de variables
// --------------------------------------------------------------------

let nombre = "Pablo";
let apellido = "Llanes";
let bienvenida = "    Bienvenidos a la clase ";

// --------------------------------------------------------------------
// 2. Concatenación e interpolación de strings
// --------------------------------------------------------------------

// Concatenación tradicional
console.log(nombre + " " + apellido);

// Interpolación de strings (template literals)
console.log(`${nombre} ${apellido}`);

// --------------------------------------------------------------------
// 3. Métodos de transformación
// --------------------------------------------------------------------

// Convertir a mayúsculas y minúsculas
console.log(nombre.toUpperCase());     // "PABLO"
console.log(apellido.toLowerCase());   // "llanes"

// Eliminar espacios en blanco al inicio y al final (trim)
console.log(bienvenida.trim());        // "Bienvenidos a la clase"

// --------------------------------------------------------------------
// 4. Métodos de búsqueda
// --------------------------------------------------------------------

let frase = "Bienvenidos a la clase de programación";

// indexOf() - retorna la posición de la primera ocurrencia
console.log(frase.indexOf("clase"));   // 15

// lastIndexOf() - retorna la posición de la última ocurrencia
console.log(frase.lastIndexOf("a"));   // 27

// includes() - verifica si la cadena contiene un texto
console.log(frase.includes("clase"));  // true

// --------------------------------------------------------------------
// 5. Métodos/Props de extracción
// --------------------------------------------------------------------

// Obtener la longitud de una cadena
console.log(nombre.length);            // 5

// Obtener el carácter en una posición específica
console.log(nombre.charAt(4));         // "o"

// Obtener una subcadena a partir de una posición específica
console.log(apellido.substring(0, 3)); // "Lla"

// slice() (muy similar a substring, pero admite valores negativos)
let mensaje = "Hola, bienvenidos";
console.log(mensaje.slice(6, -5));     // "bienvenidos"

// --------------------------------------------------------------------
// 6. Métodos de reemplazo y división
// --------------------------------------------------------------------

// replace() - reemplaza parte de la cadena
let saludo = "Hola, mundo";
console.log(saludo.replace("mundo", "amigos")); // "Hola, amigos"

// split() - divide la cadena en un arreglo según un delimitador
let lista = "manzana,pera,banana";
console.log(lista.split(","));         // ["manzana", "pera", "banana"]

// repeat() - repite una cadena
let risa = "ja";
console.log(risa.repeat(3));           // "jajaja"

// --------------------------------------------------------------------
// 7. Métodos de relleno
// --------------------------------------------------------------------

let numero = "5";
console.log(numero.padStart(3, "0")); // "005"
console.log(numero.padEnd(3, "0"));   // "500"

// --------------------------------------------------------------------
// 8. Comparación y validación
// --------------------------------------------------------------------

let frase2 = "Hola, mundo";
console.log(frase2.startsWith("Hola"));    // true
console.log(frase2.endsWith("mundo"));     // true

// --------------------------------------------------------------------
// 9. Ejemplos prácticos
// --------------------------------------------------------------------

// Obtener la última letra de un apellido
let apellido2 = "Gonzalez";
let cantidadCaracteres = apellido2.length;
let ultimaLetra = apellido2.charAt(cantidadCaracteres - 1);
console.log(`La última letra del apellido es ${ultimaLetra}`); // "z"

// Capitalizar el nombre
let nombre2 = "horacio";
let primeraLetra = nombre2.charAt(0).toUpperCase();
let resto = nombre2.substring(1);
console.log(`${primeraLetra}${resto}`);

// Ejercicio 1: Formateo de nombres
let nombre3 = "MARCELO";
let apellido3 = "gonzalez";
let nombreFormateado = `${nombre3.charAt(0).toUpperCase()}${nombre3.slice(1).toLowerCase()}`;
let apellidoFormateado = `${apellido3.charAt(0).toUpperCase()}${apellido3.slice(1).toLowerCase()}`;
console.log(`${nombreFormateado} ${apellidoFormateado}`);

// Ejercicio 2: Verificar si una cadena contiene una palabra
// (por ejemplo, la palabra "programación" en la variable frase)
const palabraABuscar = "programación";
console.log(frase.includes(palabraABuscar));

// Ejercicio 3: Reemplazar una palabra por otra en una cadena
let saludo2 = "Buenos días a todos";
let saludoModificado = saludo2.replace("días", "tardes");
console.log(`Saludo modificado: "${saludoModificado}"`);

// Ejercicio 4: Obtener la primera y última letra de una palabra
let auto = "Chevrolet";
let primeraLetraAuto = nombre.charAt(0);
let ultimaLetraAuto = nombre.charAt(nombre.length - 1);
console.log(`Primera letra: "${primeraLetraAuto}", Última letra: "${ultimaLetraAuto}"`);