/**
 * FUNCIONES EN JAVASCRIPT
 *
 * Las funciones son bloques de código reutilizables que realizan tareas específicas.
 * Permiten organizar y modularizar el código, facilitando su mantenimiento y
 * escalabilidad. JavaScript ofrece varias formas de definir y utilizar funciones,
 * cada una con sus propias características y usos.
 *
 * 1. Definición y llamada de funciones
 * 2. Funciones declarativas
 * 3. Funciones anónimas (Function Expressions)
 * 4. Funciones flecha (Arrow Functions)
 * 5. Parámetros y argumentos
 * 6. El `return` en las funciones
 * 7. Ámbito de una función (Scope)
 * 8. Funciones como callbacks
 * 9. Funciones que llaman a otras funciones
 * 10. Ejercicios prácticos
 * 11. Buenas prácticas al trabajar con funciones
 */

// --------------------------------------------------------------------
// 1. DEFINICIÓN Y LLAMADA DE FUNCIONES
// --------------------------------------------------------------------

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
    console.log(`¡Hola ${nombre}!`);
}
saludar("Juan");

// --------------------------------------------------------------------
// 2. FUNCIONES DECLARATIVAS
// --------------------------------------------------------------------

function sumar(a, b) {
    return a + b;
}

let resultadoSuma = sumar(3, 5);
console.log("La suma es:", resultadoSuma); // 8

// --------------------------------------------------------------------
// 3. FUNCIONES ANÓNIMAS (FUNCTION EXPRESSIONS)
// --------------------------------------------------------------------

let restar = function (a, b) {
    return a - b;
};

let resultadoResta = restar(10, 4);
console.log("La resta es:", resultadoResta); // 6

// --------------------------------------------------------------------
// 4. FUNCIONES FLECHA (ARROW FUNCTIONS)
// --------------------------------------------------------------------

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => a / b;

let resultadoMultiplicacion = multiplicar(2, 3);
console.log("La multiplicación es:", resultadoMultiplicacion); // 6

let resultadoDivision = dividir(10, 2);
console.log("La división es:", resultadoDivision); // 5

// --------------------------------------------------------------------
// 5. PARÁMETROS Y ARGUMENTOS
// --------------------------------------------------------------------

function areaCuadrado(lado) {
    const calculoArea = lado * lado;
    return calculoArea;
}

let area = areaCuadrado(5);
console.log("Área del cuadrado:", area); // 25

function saludarAlumno(apellido, edad) {
    if (edad < 18) {
        return `Hola jovencito ${apellido}`;
    }
    return `Todo correcto, ${apellido}`;
}

console.log(saludarAlumno('Llanes', 18)); // Todo correcto, Llanes
console.log(saludarAlumno('Gomez', 16)); // Hola jovencito Gomez

// --------------------------------------------------------------------
// 6. EL `RETURN` EN LAS FUNCIONES
// --------------------------------------------------------------------

function cuadrado(x) {
    return x * x;
}

var cuadradoAnonimo = function (x) {
    return x * x;
};

console.log("Cuadrado de 5:", cuadrado(5));                // 25
console.log("Cuadrado Anónimo de 5:", cuadradoAnonimo(5)); // 25

function sinReturn() {
    console.log("Esta función no devuelve nada.");
}

let resultadoSinReturn = sinReturn();
console.log("Resultado de sinReturn:", resultadoSinReturn); // undefined

// --------------------------------------------------------------------
// 7. ÁMBITO DE UNA FUNCIÓN (SCOPE)
// --------------------------------------------------------------------

let variableGlobal = "Estoy afuera";

function ejemploScope() {
    let variableLocal = "Estoy adentro";
    console.log(variableGlobal); // Estoy afuera
    console.log(variableLocal);  // Estoy adentro
}

ejemploScope();

console.log(variableGlobal); // Estoy afuera
// console.log(variableLocal); // Error

// --------------------------------------------------------------------
// 8. FUNCIONES COMO CALLBACKS
// --------------------------------------------------------------------

function operacion(callback, x, y) {
    var resultado = callback(x, y);
    console.log("Resultado de la operación:", resultado);
}

operacion(function (a, b) {
    return a * b;
}, 4, 6); // 24

// --------------------------------------------------------------------
// 9. FUNCIONES QUE LLAMAN A OTRAS FUNCIONES
// --------------------------------------------------------------------

function sumarDentro(a, b) {
    return a + b;
}

function calcularPromedio(n1, n2, n3) {
    let suma = sumarDentro(n1, n2) + n3;
    return suma / 3;
}

let promedio = calcularPromedio(5, 10, 15);
console.log("Promedio:", promedio); // 10

// --------------------------------------------------------------------
// 10. EJERCICIOS PRÁCTICOS
// --------------------------------------------------------------------

function sumarDosNumeros(a, b) {
    return a + b;
}
console.log("Suma de 10 y 5:", sumarDosNumeros(10, 5)); // 15

const esPar = function (numero) {
    return numero % 2 === 0;
};
console.log("¿4 es par?", esPar(4)); // true
console.log("¿7 es par?", esPar(7)); // false

function areaRectangulo(ancho, alto) {
    return ancho * alto;
}

function areaCubo(a) {
    let areaCara = areaRectangulo(a, a);
    return areaCara * 6;
}
console.log("Área de un cubo con arista 3:", areaCubo(3)); // 54

let variableGlobalEjercicio = "Estoy fuera";

function ejemploScopeEjercicio() {
    let variableLocalEjercicio = "Estoy dentro";
    console.log("Dentro de la función:");
    console.log(variableGlobalEjercicio); // Estoy fuera
    console.log(variableLocalEjercicio);  // Estoy dentro
}

ejemploScopeEjercicio();

console.log("Fuera de la función:");
console.log(variableGlobalEjercicio); // Estoy fuera
// console.log(variableLocalEjercicio); // Error

function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje) / 100;
}

let precioOriginal = 100;
let descuento = 15;
let precioConDescuento = calcularDescuento(precioOriginal, descuento);
console.log(`Precio con ${descuento}% de descuento: ${precioConDescuento}`); // 85

// --------------------------------------------------------------------
// 11. BUENAS PRÁCTICAS AL TRABAJAR CON FUNCIONES
// --------------------------------------------------------------------

/**
 * - **Nombres descriptivos:** Utiliza nombres claros y descriptivos para las funciones
 *   que reflejen su propósito.
 * - **Funciones pequeñas y específicas:** Cada función debe realizar una única
 *   tarea o responsabilidad.
 * - **Evitar efectos secundarios:** Las funciones deben minimizar la modificación
 *   de variables externas o el estado global.
 * - **Uso de parámetros y argumentos claros:** Define claramente qué parámetros
 *   espera una función y qué argumentos se le deben pasar.
 * - **Documentación:** Comenta y documenta las funciones para facilitar su
 *   comprensión y mantenimiento.
 * - **Reutilización:** Diseña funciones que puedan ser reutilizadas en diferentes
 *   contextos sin necesidad de modificaciones.
 * - **Consistencia en el estilo:** Mantén un estilo consistente en la
 *   definición y uso de funciones en todo tu código.
 */

// --------------------------------------------------------------------
// 12. EJEMPLOS PRÁCTICOS ADICIONALES
// --------------------------------------------------------------------

/**
 * En esta sección, mostramos ejemplos más específicos y útiles en la vida real:
 * manejo de arrays, funciones de orden superior y uso de closures.
 */

// Ejemplo 1: Encontrar el número máximo en un array
function encontrarMaximo(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

const listaNumeros = [10, 5, 8, 22, 17, 1];
console.log("Número máximo en la lista:", encontrarMaximo(listaNumeros));
// Muestra: Número máximo en la lista: 22

// Ejemplo 2: Filtrar un array con una función flecha
function filtrarMayoresQue(numeros, limite) {
    return numeros.filter((numero) => numero > limite);
}

const numerosEjemplo2 = [1, 5, 10, 15, 20];
let resultadoFiltro = filtrarMayoresQue(numerosEjemplo2, 10);
console.log("Números mayores que 10:", resultadoFiltro);
// Muestra: Números mayores que 10: [15, 20]

// Ejemplo 3: Función que retorna otra función (Closure)
function crearSaludoPersonalizado(saludoInicial) {
    // Retorna una función interna, que recuerda (mediante closure)
    // el valor de saludoInicial
    return function (nombre) {
        return `${saludoInicial}, ${nombre}!`;
    };
}

const saludarEnIngles = crearSaludoPersonalizado("Hello");
console.log(saludarEnIngles("Maria"));  // Hello, Maria!
console.log(saludarEnIngles("Carlos")); // Hello, Carlos!

// Ejemplo 4: Composición de funciones (usar una como entrada de otra)
function agregarIVA(precio) {
    return precio * 1.21; // 21% de IVA
}

function formatearMoneda(valor) {
    return `$ ${valor.toFixed(2)}`; // Devuelve algo como: $ 121.00
}

function precioFinal(producto, precio, funcionImpuesto, funcionFormato) {
    const precioConImpuesto = funcionImpuesto(precio);
    const precioFormateado = funcionFormato(precioConImpuesto);
    console.log(`Precio final de ${producto}: ${precioFormateado}`);
}

precioFinal("Camiseta", 100, agregarIVA, formatearMoneda);
// Muestra: Precio final de Camiseta: $ 121.00

/**
 * RESUMEN:
 * - "encontrarMaximo" ilustra un patrón sencillo para escanear un array.
 * - "filtrarMayoresQue" aplica el método Array.prototype.filter() y pasa
 *   una función flecha como criterio de filtrado.
 * - "crearSaludoPersonalizado" devuelve una función interna (Closure) 
 *   que mantiene acceso a las variables de la función padre.
 * - "precioFinal" demuestra la composición de funciones: 
 *   recibe dos funciones (funcionImpuesto, funcionFormato) que utiliza 
 *   internamente para calcular y mostrar el resultado final de forma modular.
 *
 * Con estos ejemplos adicionales, el tema de las funciones en JavaScript 
 * debería quedar aún más claro y completo.
 */
