/**
 * CONDICIONALES - ESTRUCTURAS DE CONTROL EN JAVASCRIPT
 *
 * JavaScript ofrece distintas estructuras de control para
 * la toma de decisiones en el flujo del programa. Las más
 * comunes son:
 * 
 * 1. if
 * 2. if-else
 * 3. if-else if
 * 4. switch 
 */

// --------------------------------------------------------------------
// 1. IF
// --------------------------------------------------------------------

/**
 * La declaración 'if' ejecuta un bloque de código
 * si una condición especificada es evaluada como true.
 */

let edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad. Puedes ingresar.");
}

/**
 * En este ejemplo, la consola solo imprime el mensaje
 * si la variable 'edad' es mayor o igual a 18.
 */

// --------------------------------------------------------------------
// 2. IF - ELSE
// --------------------------------------------------------------------

/**
 * La declaración 'if-else' permite ejecutar un bloque de código
 * si la condición es true y otro bloque diferente si es false.
 */

let hora = 14;

if (hora < 12) {
  console.log("Buenos días.");
} else {
  console.log("Buenas tardes o noches.");
}

/**
 * Aquí, si hora es menor a 12, se imprime "Buenos días",
 * de lo contrario, se imprime "Buenas tardes o noches."
 */

// --------------------------------------------------------------------
// 3. IF - ELSE IF
// --------------------------------------------------------------------

/**
 * 'if-else if' se utiliza para manejar múltiples condiciones
 * de manera secuencial.
 */

let puntuacion = 75;

if (puntuacion >= 90) {
  console.log("Excelente!");
} else if (puntuacion >= 70) {
  console.log("Bien hecho.");
} else {
  console.log("Es necesario mejorar.");
}

/**
 * El programa revisa la primera condición (puntuacion >= 90).
 * Si no se cumple, revisa la siguiente (puntuacion >= 70), y así sucesivamente.
 */

// --------------------------------------------------------------------
// EJEMPLOS BÁSICOS CON PROMPT Y OPERACIONES
// --------------------------------------------------------------------

// EJEMPLO 1: Solicitar dos valores al usuario y sumar
/**
 * Este programa:
 * - Pide al usuario dos números mediante prompt
 * - Convierte los valores a número con parseInt
 * - Muestra el resultado en una alerta
 */

// Descomenta el código en tu navegador para probar:
/*
let valorUno = prompt("Ingrese el primer valor:");
let valorDos = prompt("Ingrese el segundo valor:");

let valorUnoConvertido = parseInt(valorUno);
let valorDosConvertido = parseInt(valorDos);

let resultado = valorUnoConvertido + valorDosConvertido;
alert(`El resultado de la suma es: ${resultado}`);
*/

// EJEMPLO 2: Convertir Celsius a Fahrenheit
/**
 * Fórmula: Fahrenheit = (Celsius * 9/5) + 32
 */

/*
let tempCelsius = prompt("Ingrese la temperatura en Celsius:");

let tempCelsiusConvertido = parseInt(tempCelsius);
let resultadoF = (tempCelsiusConvertido * 9) / 5 + 32;

alert(`La temperatura en Fahrenheit es: ${resultadoF}`);
*/


// --------------------------------------------------------------------
// EJEMPLO: Cálculo de área y perímetro de un cuadrado
// --------------------------------------------------------------------

/*
const ladoCuadrado = 20;

// Área = lado^2
const area1 = ladoCuadrado * ladoCuadrado;
const area2 = Math.pow(ladoCuadrado, 2);

// Perímetro = 4 * lado
const perimetro1 = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
const perimetro2 = ladoCuadrado * 4;

console.log("Área (método 1):", area1);
console.log("Área (método 2):", area2);
console.log("Perímetro (método 1):", perimetro1);
console.log("Perímetro (método 2):", perimetro2);
*/

// --------------------------------------------------------------------
// EJEMPLOS AVANZADOS DE IF
// --------------------------------------------------------------------

/**
 * 1) Verificar si un número está entre 10 y 20:
 */
/*
let num = 10;
if (num >= 10 && num <= 20) {
  console.log("El número está entre 10 y 20.");
} else {
  console.log("El número está fuera del rango 10-20.");
}
*/

/**
 * 2) Verificar condiciones con operadores lógicos:
 */
/*
if (4 !== 3 && 2 === 2) {
  console.log("Entra al bloque solo si ambas expresiones son true.");
}
*/

/**
 * 3) Clasificar un triángulo según sus lados:
 *    - Equilátero: tres lados iguales
 *    - Isósceles: dos lados iguales
 *    - Escaleno: todos distintos
 */
/*
let ladoUno = 10;
let ladoDos = 10;
let ladoTres = 10;

if (ladoUno === ladoDos && ladoUno === ladoTres) {
  console.log("El triángulo es equilátero.");
} else if (ladoUno === ladoDos || ladoUno === ladoTres || ladoDos === ladoTres) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}
*/

// --------------------------------------------------------------------
// 4. SWITCH (Caso adicional)
// --------------------------------------------------------------------

/**
 * 'switch' permite evaluar múltiples casos para una variable.
 * Se suele usar cuando hay múltiples valores posibles y
 * queremos ejecutar bloques de código distintos según cada caso.
 */

// EJEMPLO: Días de la semana
/*
let dia = parseInt(prompt("Ingrese un número del 1 al 7:"));

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número no válido. Debe estar entre 1 y 7.");
    break;
}
*/

/**
 * En el switch, 'default' actúa como un 'else' final,
 * ejecutándose si ningún caso anterior coincide.
 */

// --------------------------------------------------------------------
// RESUMEN FINAL
// --------------------------------------------------------------------

/**
 * Las estructuras de control más comunes para la toma de decisiones en JavaScript son:
 * - if: ejecuta código si la condición es verdadera.
 * - if-else: se agregan rutas alternativas si la condición es falsa.
 * - if-else if: se manejan múltiples condiciones de forma secuencial.
 * - switch: se usa cuando hay varios casos (valores) concretos.
 *
 * Además, se suelen combinar con operadores lógicos (&&, ||, !)
 * para verificar múltiples condiciones a la vez.
 */
