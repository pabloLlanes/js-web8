/**
 * --------------------------------------------
 * DOCUMENTO FINAL: JSON Y LOCAL STORAGE
 * (Todo en un solo archivo .js con comentarios)
 * --------------------------------------------
 *
 * 1. Formato JSON
 *    - JSON (JavaScript Object Notation) es un formato de texto sencillo 
 *      para intercambiar datos.
 *    - La estructura es parecida a un objeto de JavaScript, pero en JSON 
 *      TODO va entre comillas dobles.
 *
 *    Ejemplo de un objeto en JSON:
 *    {
 *      "breed": "Turtle",
 *      "occupation": "Ninja"
 *    }
 *
 *    Ejemplo de un objeto en JavaScript:
 *    {
 *      breed: "Turtle",
 *      occupation: "Ninja"
 *    }
 *
 *    1.1. Funciones para convertir entre JSON y objetos JavaScript
 *        - JSON.stringify(objetoJS): Convierte un objeto JS a cadena JSON.
 *        - JSON.parse(cadenaJSON): Convierte una cadena JSON a objeto JS.
 *
 *        Ejemplo:
 *        const objetoJS = { nombre: "Juan", edad: 25 };
 *        const cadenaJSON = JSON.stringify(objetoJS);
 *        // cadenaJSON: '{"nombre":"Juan","edad":25}'
 *        
 *        const objetoNuevamente = JSON.parse(cadenaJSON);
 *        // objetoNuevamente: { nombre: "Juan", edad: 25 }
 *
 * --------------------------------------------
 *
 * 2. Local Storage
 *    - Local Storage es un espacio de almacenamiento del navegador,
 *      donde se pueden guardar datos de forma indefinida (hasta que
 *      se borre manualmente o se limpien datos de navegación).
 *    - Tiene un límite aproximado de 5 a 10 MB.
 *    - Es diferente de Session Storage, que se borra al cerrar el navegador.
 *
 *    2.1. Métodos básicos de Local Storage:
 *         localStorage.setItem('clave', 'valor') 
 *           // Guarda datos bajo la clave especificada.
 * 
 *         localStorage.getItem('clave')
 *           // Recupera el valor asociado a la clave.
 *           // Retorna una cadena, así que si guardaste un objeto/arreglo,
 *           // debes usar JSON.parse() para convertirlo a objeto/array.
 *
 * --------------------------------------------
 *
 * 3. EJERCICIO: Guardar y recuperar usuarios en Local Storage
 *
 *    Objetivo:
 *    - Pedir al usuario que ingrese "nombre" y "edad" de varias personas.
 *    - Guardar esos datos en un arreglo en Local Storage.
 *    - Recuperar y mostrar la lista de usuarios.
 *
 *    Pasos:
 *    1. Crear un arreglo de usuarios (vacío inicialmente o cargar el anterior).
 *    2. Solicitar datos al usuario (prompt, formularios, etc.).
 *    3. Guardar el nuevo usuario en el arreglo.
 *    4. Convertir el arreglo a JSON y usar localStorage.setItem().
 *    5. Recuperar el arreglo con localStorage.getItem() y JSON.parse().
 *    6. Mostrarlo en la consola o en pantalla.
 *
 *    Código de ejemplo:
 */

// ------------------------
// EJEMPLO COMPLETO EN JS
// ------------------------

// 1. Array para almacenar usuarios
let usuarios = [];

// Si ya existe algo guardado en localStorage, lo cargamos
const usuariosGuardados = localStorage.getItem("listaUsuarios");
if (usuariosGuardados) {
    usuarios = JSON.parse(usuariosGuardados);
}

/**
 * Función para guardar un nuevo usuario:
 *  - Pide datos (nombre, edad) al usuario.
 *  - Crea un objeto con esa información.
 *  - Lo agrega al array de usuarios.
 *  - Convierte a JSON y lo guarda en localStorage.
 */
function guardarUsuario() {
    const nombre = prompt("Ingresa el nombre del usuario:");
    const edad = prompt("Ingresa la edad del usuario:");

    // Validamos datos
    if (nombre && edad) {
        const nuevoUsuario = {
            nombre: nombre,
            edad: parseInt(edad) // Convertimos a número
        };

        // Agregamos al array
        usuarios.push(nuevoUsuario);

        // Guardamos en localStorage (convertimos a JSON)
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

        alert("Usuario guardado correctamente.");
    } else {
        alert("Datos inválidos. Por favor, intenta de nuevo.");
    }
}

/**
 * Función para mostrar usuarios:
 *  - Obtiene el array desde localStorage.
 *  - Si hay datos, los recorre y los muestra en consola/alert.
 *  - Si no hay datos, indica que no hay usuarios.
 */
function mostrarUsuarios() {
    // Recuperamos la lista desde localStorage
    const lista = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

    console.log("Usuarios en Local Storage:", lista);

    if (lista.length > 0) {
        let mensaje = "Usuarios registrados:\n";
        lista.forEach((usuario, index) => {
            mensaje += `${index + 1}. Nombre: ${usuario.nombre}, Edad: ${usuario.edad}\n`;
        });
        alert(mensaje);
    } else {
        alert("No hay usuarios guardados.");
    }
}

// ------------------------
// EJEMPLO DE USO:
// Llamar a las funciones con botones o directamente en la consola:
// guardarUsuario(); // Para guardar un nuevo usuario
// mostrarUsuarios(); // Para mostrar la lista de usuarios
// ------------------------

// Ejemplo directo (descomenta para probarlo en un entorno de navegador):
// guardarUsuario();
// mostrarUsuarios();


