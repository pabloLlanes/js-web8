/**
 * PROMESAS EN JAVASCRIPT
 * ------------------------------------------------------------
 * En JavaScript, las promesas son objetos que representan el resultado
 * eventual de una operación asíncrona. Permiten manejar código 
 * asíncrono de manera estructurada, evitando el "callback hell".
 *
 * 1. Introducción a las Promesas
 * 2. Métodos principales: then(), catch(), finally()
 * 3. Promesas con async/await
 * 4. Ejemplos prácticos
 * 
 * ------------------------------------------------------------
 */

// ------------------------------------------------------------------------
// 1. INTRODUCCIÓN A LAS PROMESAS
// ------------------------------------------------------------------------
/**
 * Una promesa tiene tres estados:
 * - Pending (pendiente): La operación aún no ha terminado.
 * - Fulfilled (cumplida): La operación se completó con éxito.
 * - Rejected (rechazada): Ocurrió un error durante la operación.
 */

// Ejemplo básico de una promesa
let miPromesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia a 'false' para ver el caso de error

    setTimeout(() => {
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("Hubo un error.");
        }
    }, 2000);
});

console.log("Promesa creada, esperando resultado...");

// Ejemplo adicional: Simulación de una promesa que siempre se resuelve
let promesaResuelta = new Promise((resolve) => {
    setTimeout(() => {
        resolve("¡Promesa resuelta con éxito!");
    }, 1000);
});

promesaResuelta.then((resultado) => {
    console.log("Resultado de la promesa resuelta:", resultado);
});

// ------------------------------------------------------------------------
// 2. MÉTODOS PRINCIPALES: THEN(), CATCH(), FINALLY()
// ------------------------------------------------------------------------
/**
 * then() -> Se ejecuta si la promesa se resuelve con éxito.
 * catch() -> Se ejecuta si la promesa es rechazada.
 * finally() -> Se ejecuta siempre, sin importar el resultado.
 */

miPromesa
    .then((resultado) => {
        console.log("Resultado:", resultado);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Proceso finalizado.");
    });

// Ejemplo adicional: Uso de finally() en una promesa rechazada
let promesaRechazada = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("¡Promesa rechazada!");
    }, 1000);
});

promesaRechazada
    .catch((error) => {
        console.error("Error en promesa rechazada:", error);
    })
    .finally(() => {
        console.log("Proceso de promesa rechazada finalizado.");
    });

// ------------------------------------------------------------------------
// 3. PROMESAS CON ASYNC/AWAIT
// ------------------------------------------------------------------------
/**
 * El uso de async/await permite escribir código asíncrono con
 * una sintaxis más clara y similar al código síncrono.
 */

// Ejemplo básico de async/await
async function ejecutarPromesa() {
    try {
        let resultado = await miPromesa;
        console.log("Resultado con async/await:", resultado);
    } catch (error) {
        console.error("Error con async/await:", error);
    } finally {
        console.log("Proceso finalizado con async/await.");
    }
}

// Llamamos a la función (descomentar para probar).
// ejecutarPromesa();

// Ejemplo adicional: Uso de async/await con una promesa que siempre se resuelve
async function ejecutarPromesaResuelta() {
    try {
        let resultado = await promesaResuelta;
        console.log("Resultado de promesa resuelta con async/await:", resultado);
    } catch (error) {
        console.error("Error en promesa resuelta:", error);
    } finally {
        console.log("Proceso de promesa resuelta finalizado.");
    }
}

// Descomentar para probar
// ejecutarPromesaResuelta();

// ------------------------------------------------------------------------
// 4. EJEMPLOS PRÁCTICOS
// ------------------------------------------------------------------------

// ------------------------------------------------------------------------
// 4.1 Simulación de carga de datos desde un servidor
// ------------------------------------------------------------------------

function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Producto 1", "Producto 2", "Producto 3"]);
        }, 3000);
    });
}

// Usando then()
obtenerDatos().then((datos) => console.log("Productos cargados:", datos));

// Usando async/await
async function cargarDatos() {
    let datos = await obtenerDatos();
    console.log("Productos con async/await:", datos);
}

// Descomentar para probar
// cargarDatos();

// Ejemplo adicional: Simulación de carga de datos con error
function obtenerDatosConError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true; // Cambia a 'false' para ver el caso de éxito
            if (error) {
                reject("Error al cargar los datos");
            } else {
                resolve(["Producto 1", "Producto 2", "Producto 3"]);
            }
        }, 3000);
    });
}

// Usando then() y catch()
obtenerDatosConError()
    .then((datos) => console.log("Productos cargados:", datos))
    .catch((error) => console.error("Error al cargar datos:", error));

// Usando async/await
async function cargarDatosConError() {
    try {
        let datos = await obtenerDatosConError();
        console.log("Productos con async/await:", datos);
    } catch (error) {
        console.error("Error al cargar datos con async/await:", error);
    }
}

// Descomentar para probar
// cargarDatosConError();

// ------------------------------------------------------------------------
// 4.2 Simulación de una validación de usuario
// ------------------------------------------------------------------------

function validarUsuario(usuario, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "admin" && password === "1234") {
                resolve("Acceso concedido");
            } else {
                reject("Acceso denegado");
            }
        }, 2000);
    });
}

// Usando then()
validarUsuario("admin", "1234")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));

// Usando async/await
async function verificarUsuario() {
    try {
        let mensaje = await validarUsuario("admin", "1234");
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}

// Descomentar para probar
// verificarUsuario();

// Ejemplo adicional: Validación de usuario con múltiples intentos
async function verificarUsuarioConIntentos(intentos) {
    for (let i = 1; i <= intentos; i++) {
        try {
            let mensaje = await validarUsuario("admin", "1234");
            console.log(`Intento ${i}: ${mensaje}`);
            break; // Salir del bucle si la promesa se resuelve
        } catch (error) {
            console.error(`Intento ${i}: ${error}`);
        }
    }
}

// Descomentar para probar
// verificarUsuarioConIntentos(3);

// ------------------------------------------------------------------------
// 4.3 Simulación de múltiples promesas en paralelo con Promise.all()
// ------------------------------------------------------------------------

let promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1 lista"), 1000));
let promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2 lista"), 2000));
let promesa3 = new Promise((resolve) => setTimeout(() => resolve("Promesa 3 lista"), 3000));

Promise.all([promesa1, promesa2, promesa3]).then((resultados) => {
    console.log("Todas las promesas resueltas:", resultados);
});

// Ejemplo adicional: Promise.all() con una promesa que se rechaza
let promesa4 = new Promise((resolve, reject) => setTimeout(() => reject("Promesa 4 fallida"), 1500));

Promise.all([promesa1, promesa2, promesa3, promesa4])
    .then((resultados) => {
        console.log("Todas las promesas resueltas:", resultados);
    })
    .catch((error) => {
        console.error("Error en Promise.all():", error);
    });

