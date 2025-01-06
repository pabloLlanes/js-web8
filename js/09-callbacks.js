/**
 * CALLBACKS EN JAVASCRIPT
 *
 * 1. ¿Qué es un callback?
 * 2. ¿Por qué usar callbacks?
 * 3. Ejemplo básico de callback
 * 4. Callbacks con operaciones matemáticas
 * 5. Uso de setTimeout con callbacks (ejemplo asíncrono)
 * 6. Buenas prácticas con callbacks
 * 7. Ejemplos prácticos adicionales
 */

// --------------------------------------------------------------------
// 1. ¿Qué es un callback?
// --------------------------------------------------------------------

/**
 * Un callback es una función que se pasa como parámetro a otra función,
 * de manera que la función principal ejecuta la función callback en
 * un momento determinado (por ejemplo, cuando termina una operación).
 */

// --------------------------------------------------------------------
// 2. ¿Por qué usar callbacks?
// --------------------------------------------------------------------

/**
 * - Permiten manejar operaciones asíncronas (como peticiones HTTP) sin
 *   bloquear el flujo del programa.
 * - Separan la lógica en funciones más pequeñas y reutilizables.
 * - Hacen el código más modular.
 */

// --------------------------------------------------------------------
// 3. Ejemplo básico de callback
// --------------------------------------------------------------------

/**
 * En este ejemplo, la función 'operacion' simula algún proceso (por ejemplo,
 * una suma) y, al terminar, llama al callback con el resultado.
 */

// Función principal que realiza una operación y llama a un callback con el resultado
function operacion(callback) {
    // Simulamos una operación simple (en este caso, suma de dos números)
    let resultado = 5 + 3;
    // Llamamos al callback con el resultado
    callback(resultado);
}

// Función callback que maneja el resultado de la operación
function manejarResultado(resultado) {
    console.log("El resultado de la operación es: " + resultado);
}

// Llamada a la función 'operacion' con el callback 'manejarResultado'
operacion(manejarResultado);

/**
 * Flujo:
 * 1. 'operacion' realiza una suma.
 * 2. Cuando termina, llama a 'callback(resultado)'.
 * 3. 'manejarResultado' recibe ese 'resultado' y lo muestra en consola.
 */

// --------------------------------------------------------------------
// 4. Callbacks con operaciones matemáticas
// --------------------------------------------------------------------

/**
 * Podemos hacer nuestros callbacks más dinámicos si los definimos
 * como funciones que realicen operaciones específicas (suma, resta,
 * multiplicación, etc.) y luego se las pasamos a una función principal.
 */

// Función principal que ejecuta una operación entre x e y usando un callback
function realizarCalculo(x, y, operacion) {
    let resultado = operacion(x, y);
    console.log("El resultado del cálculo es: " + resultado);
}

// Ejemplo de funciones que podemos usar como callbacks
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

// Llamadas a la función 'realizarCalculo' con diferentes callbacks
realizarCalculo(5, 3, suma);            // 5 + 3 = 8
realizarCalculo(8, 4, resta);          // 8 - 4 = 4
realizarCalculo(2, 6, multiplicacion); // 2 * 6 = 12

// --------------------------------------------------------------------
// 5. Uso de setTimeout con callbacks (ejemplo asíncrono)
// --------------------------------------------------------------------

/**
 * 'setTimeout' ejecuta una función después de un número determinado de milisegundos.
 * Esto nos permite ver los callbacks en acción de forma asíncrona.
 */

// Función que usa setTimeout para simular una operación que demora 2 segundos
function operacionAsincrona(callback) {
    console.log("Iniciando operación asíncrona...");
    setTimeout(() => {
        let resultado = "Operación completada";
        // Se invoca el callback cuando se completa el proceso
        callback(resultado);
    }, 2000);
}

// Función callback que maneja el resultado de la operación asíncrona
function manejarOperacionAsincrona(mensaje) {
    console.log("Recibido en callback:", mensaje);
}

// Llamada a la función asíncrona con el callback
operacionAsincrona(manejarOperacionAsincrona);

/**
 * Flujo:
 * 1. 'operacionAsincrona' imprime un mensaje inicial.
 * 2. Después de 2 segundos, se ejecuta el callback con el resultado.
 * 3. 'manejarOperacionAsincrona' recibe el mensaje y lo muestra.
 */

// --------------------------------------------------------------------
// 6. Buenas prácticas con callbacks
// --------------------------------------------------------------------

/**
 * - Nombrar tus funciones callback de forma descriptiva (ej: manejarResultado).
 * - Evitar callbacks demasiado anidados (Callback Hell). 
 *   Considerar alternativas como Promesas o Async/Await.
 * - Manejar los errores dentro de los callbacks, si es necesario.
 * - Mantener tu código modular y reutilizable.
 */

// --------------------------------------------------------------------
// 7. Ejemplos prácticos
// --------------------------------------------------------------------

// Función que busca un elemento en un array y llama al callback con el resultado
function buscarElemento(array, elemento, callback) {
    // Usamos el método includes() para verificar si el elemento está en el array
    const existe = array.includes(elemento);
    // Llamamos al callback, pasándole si existe o no, además del elemento que buscábamos
    callback(existe, elemento);
}

// Función callback que maneja el resultado de la búsqueda
function manejarResultadoBusqueda(existe, elemento) {
    if (existe) {
        console.log(`El elemento "${elemento}" existe en el array.`);
    } else {
        console.log(`El elemento "${elemento}" NO existe en el array.`);
    }
}

// Ejemplo de uso
const frutas = ["Manzana", "Banana", "Durazno", "Pera"];

// Llamamos a la función buscarElemento con el callback manejarResultadoBusqueda
buscarElemento(frutas, "Banana", manejarResultadoBusqueda);
buscarElemento(frutas, "Sandía", manejarResultadoBusqueda);


// Llamamos a la función esPar con el callback manejarParidad
esPar(10, manejarParidad);
esPar(7, manejarParidad);

// Ejemplo 2: Callback que procesa un array con forEach

function procesarArray(array, callback) {
    array.forEach((elemento, indice) => {
        callback(elemento, indice);
    });
}

// Función callback para imprimir cada elemento e índice
function imprimirElemento(elemento, indice) {
    console.log(`Índice: ${indice}, Elemento: ${elemento}`);
}

// Llamada a la función con un array y el callback
procesarArray(frutas, imprimirElemento);

// Ejemplo 3: Simulación de lectura de datos y envío de datos con callbacks
function leerDatos(callback) {
    console.log("Leyendo datos... (simulado)");
    setTimeout(() => {
        let datos = { usuario: "Juan", edad: 30 };
        // Finaliza la lectura y llama al callback
        callback(datos);
    }, 1500);
}

function enviarDatos(datos, callback) {
    console.log("Enviando datos... (simulado):", datos);
    setTimeout(() => {
        let respuesta = { exito: true, mensaje: "Datos recibidos con éxito" };
        // Llamamos al callback con la respuesta
        callback(respuesta);
    }, 1000);
}

// Función principal que coordina la lectura y luego el envío de datos
function manejarFlujoDatos() {
    leerDatos((datosLeidos) => {
        console.log("Datos leídos:", datosLeidos);
        enviarDatos(datosLeidos, (respuestaServidor) => {
            console.log("Respuesta del servidor:", respuestaServidor);
        });
    });
}

// Llamamos a la función para ver el flujo completo con callbacks
manejarFlujoDatos();

/**
 * Con estos ejemplos adicionales, se aprecia mejor la versatilidad de los
 * callbacks para realizar distintas acciones como validaciones, recorridos
 * de arrays o simulaciones de lectura y envío de datos de manera asíncrona.
 *
 * Observa cómo cada función "principal" invoca a otra función "callback"
 * una vez que termina su trabajo.
 */
