/**
 *  LA ESTRUCTURA SWITCH EN JAVASCRIPT
 *
 * La estructura `switch` permite evaluar una expresión y ejecutar diferentes
 * bloques de código según el caso que coincida con el valor de dicha expresión.
 * Es una alternativa más legible y organizada que múltiples declaraciones
 * `if-else if-else` cuando se manejan múltiples condiciones basadas en el mismo
 * valor o expresión.
 *
 * 1. Sintaxis básica de switch
 * 2. Explicación detallada de cada parte
 * 3. Ejemplos prácticos
 * 4. Conceptos avanzados: fallthrough, break, default
 * 5. Buenas prácticas al usar switch
 * 6. Ejercicios prácticos
 */

// --------------------------------------------------------------------
// 1. SINTAXIS BÁSICA DE SWITCH
// --------------------------------------------------------------------

/**
 * La estructura básica de un switch es la siguiente:
 *
 * switch(expresión) {
 *   case valor1:
 *     // Bloque de código a ejecutar si expresión === valor1
 *     break;
 *   case valor2:
 *     // Bloque de código a ejecutar si expresión === valor2
 *     break;
 *   ...
 *   default:
 *     // Bloque de código a ejecutar si ningún caso coincide
 * }
 *
 * - `expresión`: Es la expresión que se evalúa una vez y se compara con cada `case`.
 * - `case valor`: Define un valor contra el cual se compara la expresión.
 * - `break`: Termina la ejecución del switch. Si se omite, se ejecutarán los siguientes casos (fallthrough).
 * - `default`: Opcional. Se ejecuta si ningún `case` coincide con la expresión.
 */

// --------------------------------------------------------------------
// 2. EXPLICACIÓN DETALLADA DE CADA PARTE
// --------------------------------------------------------------------

/**
 * - **Expresión:** Puede ser una variable, una función, una operación, etc.
 *   Se evalúa una sola vez al inicio del switch.
 * 
 * - **Case:** Cada `case` compara el valor de la expresión con el valor especificado.
 *   La comparación es estricta (===), por lo que también considera el tipo de dato.
 *
 * - **Break:** Es crucial para evitar la ejecución de casos posteriores una vez que se ha encontrado una coincidencia.
 *   Sin `break`, JavaScript continuará ejecutando los siguientes bloques de código hasta encontrar un `break` o terminar el switch.
 *
 * - **Default:** Funciona como un `else` en una estructura `if-else`. Se ejecuta si ningún `case` coincide.
 *   Es una buena práctica incluir siempre un `default` para manejar valores inesperados.
 */

// --------------------------------------------------------------------
// 3. EJEMPLOS PRÁCTICOS
// --------------------------------------------------------------------

// Ejemplo 01: Uso de switch con cadenas
console.log("Ejemplo 01: Evaluación de estaciones del año");

let estacion = "primavera";
let precioVenta = 100;

switch (estacion) {
    case 'primavera':
        console.log('Estamos en la primavera:', estacion);
        precioVenta += 200;
        break;
    case 'verano':
        console.log('Estamos en el verano:', estacion);
        precioVenta += 300;
        break;
    case 'otoño':
        console.log('Estamos en el otoño:', estacion);
        precioVenta += 100;
        break;
    case 'invierno':
        console.log('Estamos en el invierno:', estacion);
        precioVenta += 50;
        break;
    default:
        console.log(estacion + ' no es una estación del año válida.');
}

console.log("Precio final de venta:", precioVenta); // Precio final de venta: 300

/**
 * En este ejemplo, la variable `estacion` se evalúa en el switch.
 * Como `estacion` es 'primavera', se ejecuta el primer caso, incrementando `precioVenta` en 200.
 * El `break` evita que se ejecuten los siguientes casos.
 */

// Ejemplo 02: Uso de switch con números
console.log("\nEjemplo 02: Determinación del día de la semana");

const diaDeLaSemana = 3;

switch (parseInt(diaDeLaSemana)) {
    case 1:
        console.log('Hoy es Lunes');
        break;
    case 2:
        console.log('Hoy es Martes');
        break;
    case 3:
        console.log('Hoy es Miércoles');
        break;
    case 4:
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes');
        break;
    case 6:
        console.log('Hoy es Sábado');
        break;
    case 7:
        console.log('Hoy es Domingo');
        break;
    default:
        console.log('Número de la semana no correcto (debe ser 1-7).');
        break;
}

/**
 * Aquí, `diaDeLaSemana` es 3, por lo que se imprime "Hoy es Miércoles".
 * El uso de `parseInt` asegura que la comparación sea numérica.
 */

// --------------------------------------------------------------------
// 4. CONCEPTOS AVANZADOS: FALLTHROUGH, BREAK, DEFAULT
// --------------------------------------------------------------------

/**
 * - **Fallthrough:**
 *   Si se omite el `break` en un `case`, la ejecución continuará en el siguiente `case`,
 *   independientemente de si coincide o no. Esto puede ser útil en situaciones específicas
 *   donde varios casos deben compartir el mismo bloque de código.
 *
 *   ```javascript
 *   switch (valor) {
 *     case 1:
 *     case 2:
 *         console.log("El valor es 1 o 2");
 *         break;
 *     // ...
 *   }
 *   ```
 *
 * - **Default:**
 *   Siempre debe ser el último caso y se ejecuta si ningún otro `case` coincide.
 *   Es útil para manejar errores o valores inesperados.
 */

// Ejemplo de Fallthrough
console.log("\nEjemplo 03: Fallthrough en switch");

let numero = 2;

switch (numero) {
    case 1:
        console.log("Número es 1");
    // No hay break, continúa al siguiente caso
    case 2:
        console.log("Número es 2 o no tiene un break anterior.");
        break;
    default:
        console.log("Número no es ni 1 ni 2");
}

/**
 * En este ejemplo, como `numero` es 2, se ejecuta el caso 2.
 * Si `numero` fuera 1, se imprimirían ambos mensajes debido al fallthrough.
 */

// --------------------------------------------------------------------
// 5. BUENAS PRÁCTICAS AL USAR SWITCH
// --------------------------------------------------------------------

/**
 * - **Siempre usar `break` o `return`:** Para evitar el fallthrough no intencionado.
 * - **Incluir un `default`:** Para manejar casos no previstos y evitar errores silenciosos.
 * - **Evitar casos duplicados innecesarios:** A menos que se necesite explícitamente.
 * - **Mantener casos simples:** Para mejorar la legibilidad y mantenimiento del código.
 * - **Usar tipos consistentes:** Asegurarse de que la expresión y los casos sean del mismo tipo.
 */

// Ejemplo de función con switch y buenas prácticas
console.log("\nEjemplo 04: Función con switch y buenas prácticas");

function obtenerPrecioVenta(estacion) {
    let precioBase = 100;
    let precioFinal;

    switch (estacion) {
        case 'primavera':
            precioFinal = precioBase + 200;
            break;
        case 'verano':
            precioFinal = precioBase + 300;
            break;
        case 'otoño':
            precioFinal = precioBase + 100;
            break;
        case 'invierno':
            precioFinal = precioBase + 50;
            break;
        default:
            console.log(estacion + ' no es una estación válida.');
            precioFinal = precioBase; // Precio sin incremento
            break;
    }

    return precioFinal;
}

console.log("Precio en verano:", obtenerPrecioVenta('verano')); // 400
console.log("Precio en otoño:", obtenerPrecioVenta('otoño'));   // 200
console.log("Precio en invierno:", obtenerPrecioVenta('invierno')); // 150
console.log("Precio en estación desconocida:", obtenerPrecioVenta('huracán')); // 100 y mensaje de error

// --------------------------------------------------------------------
// 6. EJERCICIOS PRÁCTICOS
// --------------------------------------------------------------------

/**
 * A continuación, se presentan algunos ejercicios para practicar el uso de switch.
 */

// --------------------------------------------------------------------
// Ejercicio 1: Clasificación de Triángulos
// --------------------------------------------------------------------

/**
 * Escribe un programa que clasifique un triángulo según sus lados.
 * - Equilátero: tres lados iguales
 * - Isósceles: dos lados iguales
 * - Escaleno: todos los lados diferentes
 */

console.log("\nEjercicio 1: Clasificación de Triángulos");

function clasificarTriangulo(lado1, lado2, lado3) {
    switch (true) {
        case (lado1 === lado2 && lado1 === lado3):
            return "El triángulo es Equilátero.";
        case (lado1 === lado2 || lado1 === lado3 || lado2 === lado3):
            return "El triángulo es Isósceles.";
        default:
            return "El triángulo es Escaleno.";
    }
}

console.log(clasificarTriangulo(5, 5, 5)); // Equilátero
console.log(clasificarTriangulo(5, 5, 3)); // Isósceles
console.log(clasificarTriangulo(5, 4, 3)); // Escaleno

// --------------------------------------------------------------------
// Ejercicio 2: Día de la Semana con switch
// --------------------------------------------------------------------

/**
 * Escribe un programa que tome un número del 1 al 7 e imprima el día correspondiente
 * de la semana utilizando switch. Si el número no está en el rango, muestra un mensaje de error.
 */

console.log("\nEjercicio 2: Día de la Semana con switch");

function obtenerDiaSemana(numeroDia) {
    switch (numeroDia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día no válido. Debe ser entre 1 y 7.";
    }
}

console.log(obtenerDiaSemana(3)); // Miércoles
console.log(obtenerDiaSemana(6)); // Sábado
console.log(obtenerDiaSemana(8)); // Número de día no válido. Debe ser entre 1 y 7.

// --------------------------------------------------------------------
// Ejercicio 3: Operación Matemática con Callback
// --------------------------------------------------------------------

/**
 * Crea una función `operacionMatematica` que reciba dos números y una operación
 * (`'suma'`, `'resta'`, `'multiplicacion'`, `'division'`) y devuelva el resultado
 * de dicha operación utilizando switch.
 */

console.log("\nEjercicio 3: Operación Matemática con switch");

function operacionMatematica(a, b, operacion) {
    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = a + b;
            break;
        case 'resta':
            resultado = a - b;
            break;
        case 'multiplicacion':
            resultado = a * b;
            break;
        case 'division':
            if (b !== 0) {
                resultado = a / b;
            } else {
                return "Error: División por cero.";
            }
            break;
        default:
            return "Operación no válida. Usa 'suma', 'resta', 'multiplicacion' o 'division'.";
    }
    return `El resultado de la ${operacion} es: ${resultado}`;
}

console.log(operacionMatematica(10, 5, 'suma')); // El resultado de la suma es: 15
console.log(operacionMatematica(10, 5, 'division')); // El resultado de la division es: 2
console.log(operacionMatematica(10, 0, 'division')); // Error: División por cero.
console.log(operacionMatematica(10, 5, 'potencia')); // Operación no válida...

// --------------------------------------------------------------------
// 7. BUENAS PRÁCTICAS AL USAR SWITCH
// --------------------------------------------------------------------

/**
 * - **Usar `break` o `return` en cada caso:** Para evitar el fallthrough no deseado.
 * - **Incluir un caso `default`:** Para manejar valores inesperados.
 * - **Mantener la consistencia de tipos:** Asegurarse de que la expresión y los casos
 *   sean del mismo tipo para evitar comparaciones fallidas.
 * - **Evitar lógica compleja dentro de los casos:** Mantener los casos simples y delegar
 *   lógica compleja a funciones externas si es necesario.
 * - **Documentar casos especiales:** Si se usa fallthrough intencionadamente, documentarlo.
 */

// Ejemplo de buena práctica: delegar lógica a funciones externas
console.log("\nEjemplo 05: Delegar lógica a funciones externas");

function incrementarPrecio(precio, incremento) {
    return precio + incremento;
}

function determinarIncremento(estacion, precioBase) {
    switch (estacion) {
        case 'primavera':
            return incrementarPrecio(precioBase, 200);
        case 'verano':
            return incrementarPrecio(precioBase, 300);
        case 'otoño':
            return incrementarPrecio(precioBase, 100);
        case 'invierno':
            return incrementarPrecio(precioBase, 50);
        default:
            console.log(estacion + ' no es una estación válida.');
            return precioBase;
    }
}

let precioBase = 100;
let estacionActual = 'verano';
let precioFinal = determinarIncremento(estacionActual, precioBase);
console.log(`Precio final en ${estacionActual}:`, precioFinal); // 400

// --------------------------------------------------------------------
// 8. RESUMEN FINAL
// --------------------------------------------------------------------

/**
 * La estructura `switch` es una herramienta poderosa para manejar múltiples
 * condiciones basadas en el mismo valor o expresión. Al usar `switch`, se puede
 * mejorar la legibilidad y organización del código en comparación con múltiples
 * declaraciones `if-else if-else`.
 *
 * **Puntos Clave:**
 * - **Sintaxis clara:** Facilita la comprensión de múltiples casos.
 * - **Uso de `break`:** Evita la ejecución no deseada de casos posteriores.
 * - **Caso `default`:** Maneja valores no previstos y previene errores silenciosos.
 * - **Fallthrough:** Útil en casos específicos, pero debe usarse con precaución.
 * - **Consistencia de tipos:** Asegura comparaciones exitosas.
 *
 * **Consejos:**
 * - Siempre incluir un `default` para manejar casos inesperados.
 * - Utilizar `break` o `return` en cada caso para evitar fallthrough.
 * - Mantener los casos simples y delegar lógica compleja a funciones externas.
 *
 * **Comparación con `if-else`:**
 * - `switch` es más adecuado cuando se comparan múltiples valores contra la misma expresión.
 * - `if-else` es más flexible para condiciones complejas que no son simples comparaciones de igualdad.
 *
 */
