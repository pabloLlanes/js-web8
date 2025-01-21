/**
OBJETOS EN JAVASCRIPT
 * 
 * 1. Qué es un objeto en JavaScript
 * 2. Formas de crear objetos (objeto literal, new Object, Object.create, etc.)
 * 3. Principales características y métodos comunes
 * 4. Ejemplos de uso y ejercicios prácticos
 */

// --------------------------------------------------------------------
// 1. ¿Qué es un objeto en JavaScript?
// --------------------------------------------------------------------
/**
 * Un objeto es una colección de propiedades (clave-valor).
 * Ejemplo de un objeto literal:
 */
const personaLiteral = {
    nombre: "Ana",
    edad: 28
};
console.log("Objeto literal:", personaLiteral);

// --------------------------------------------------------------------
// 2. Formas de crear objetos en JavaScript
// --------------------------------------------------------------------
/**
 * A) Usando un objeto literal (la más común):
 */
const objLiteral = { clave: "valor", otroDato: 123 };

/**
 * B) Usando la sintaxis 'new Object()'
 *    (Menos frecuente, pero válido):
 */
const objConNew = new Object();
objConNew.clave = "valor";
objConNew.otroDato = 123;

/**
 * C) Con Object.create(prototipo)
 *    (Crea un nuevo objeto con el prototipo especificado):
 */
const objBase = { x: 1, y: 2 };
const objConCreate = Object.create(objBase);
objConCreate.z = 3;
// objConCreate heredará las propiedades de objBase, como x e y.

/**
 * D) Usar funciones para generar objetos
 *    (Sin tratar conceptos de POO ni 'class', sólo la idea básica):
 */
function crearObjetoSimple(a, b) {
    const nuevo = {};
    nuevo.propA = a;
    nuevo.propB = b;
    return nuevo;
}
const objFunc = crearObjetoSimple("valorA", "valorB");

/**
 * NOTA: Existen más variantes, pero éstas son las más conocidas
 * cuando no se habla de clases ni herencia.
 */

// --------------------------------------------------------------------
// Ejemplo: Demostración de las diferentes formas de creación
// --------------------------------------------------------------------
console.log("\n--- Diferentes formas de crear objetos ---");
console.log("A) Objeto literal:", objLiteral);
console.log("B) new Object():", objConNew);
console.log("C) Object.create:", objConCreate, "| Hereda de:", Object.getPrototypeOf(objConCreate));
console.log("D) Función que retorna objeto:", objFunc);

// --------------------------------------------------------------------
// 3. Principales características de los objetos
// --------------------------------------------------------------------
/**
 * - Estructura clave-valor: las propiedades se definen como pares (clave: valor).
 * - Acceso a propiedades: notación de punto (obj.prop) o corchetes (obj["prop"]).
 * - Dinamismo: se pueden agregar, modificar y eliminar propiedades en cualquier momento.
 * - Métodos: una propiedad puede ser una función, a la que normalmente se llama "método".
 * - Paso por referencia: asignar un objeto a otra variable copia la referencia, 
 *   no se crea un objeto nuevo.
 */

// Ejemplo de manipulación de propiedades
const persona = {
    nombre: "Juan",
    edad: 30
};

persona.pais = "Argentina";    // Agregar propiedad
persona["edad"] = 31;         // Modificar propiedad
delete persona.edad;          // Eliminar propiedad
console.log("\nManipulación de propiedades en 'persona':", persona);

// --------------------------------------------------------------------
// 4. Métodos útiles de objetos y arrays de objetos
// --------------------------------------------------------------------
/**
 * - Object.keys(obj): retorna un array con las claves
 * - Object.values(obj): retorna un array con los valores
 * - Object.entries(obj): retorna un array de pares [clave, valor]
 * - for...in: permite iterar sobre las propiedades enumerables
 * - Métodos de array (forEach, map, filter, find, reduce) para manejar arrays de objetos
 */

// Ejemplo: Object.keys, Object.values, Object.entries
console.log("\nObject.keys:", Object.keys(persona));         // ["nombre", "pais"]
console.log("Object.values:", Object.values(persona));       // ["Juan", "Argentina"]
console.log("Object.entries:", Object.entries(persona));     // [["nombre","Juan"],["pais","Argentina"]]

// --------------------------------------------------------------------
// 5. Ejercicios prácticos (SIN mencionar POO)
// --------------------------------------------------------------------

// EJERCICIO 1: Crear un objeto 'auto' y manipular sus propiedades
console.log("\n--- EJERCICIO 1: Objeto 'auto' ---");
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2021,
    color: "Gris"
};
console.log("Objeto 'auto' inicial:", auto);

// Agregar propiedad
auto.esNuevo = true;
// Modificar propiedad
auto.color = "Blanco";
// Eliminar propiedad
delete auto.esNuevo;

// Recorrer el objeto con for...in
for (let prop in auto) {
    console.log(prop, ":", auto[prop]);
}

// EJERCICIO 2: Arreglo de objetos (productos)
console.log("\n--- EJERCICIO 2: Arreglo 'productos' ---");
const productos = [
    { nombre: "Laptop", precio: 1500, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: true },
    { nombre: "Monitor", precio: 300, enStock: false },
];

// forEach para recorrer y mostrar cada producto
productos.forEach((prod, i) => {
    console.log(`#${i} - ${prod.nombre} ($${prod.precio}) - Disponible: ${prod.enStock}`);
});

// EJERCICIO 3: Filtrar y mapear objetos
console.log("\n--- EJERCICIO 3: Filtrar y mapear ---");
const enStock = productos.filter((prod) => prod.enStock);
console.log("Productos en stock:", enStock);

const descripciones = productos.map((prod) => {
    const estado = prod.enStock ? "Disponible" : "Agotado";
    return `${prod.nombre} - $${prod.precio} (${estado})`;
});
console.log("Descripciones de productos:", descripciones);

// EJERCICIO 4: Object.create y herencia de propiedades
console.log("\n--- EJERCICIO 4: Object.create ---");
const baseObj = { tipo: "base", valor: 100 };
const hijoObj = Object.create(baseObj);
hijoObj.tipo = "hijo"; // Sombreado (shadowing) a la propiedad "tipo"
hijoObj.extra = "info";

console.log("baseObj:", baseObj);
console.log("hijoObj:", hijoObj);
console.log("hijoObj.tipo:", hijoObj.tipo);
console.log("hijoObj.valor (heredado):", hijoObj.valor);

// --------------------------------------------------------------------
// 6. Ejemplos adicionales con this, getters y setters
// --------------------------------------------------------------------

// Ejemplo con this
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    mostrarInfo() {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}`);
    }
};
libro.mostrarInfo(); // Libro: El Principito, Autor: Antoine de Saint-Exupéry

// Getters y setters
const personaAvanzada = {
    _nombre: "",
    _edad: 0,

    get nombre() {
        return this._nombre;
    },

    set nombre(nuevoNombre) {
        if (nuevoNombre.trim() === "") {
            console.log("El nombre no puede estar vacío.");
        } else {
            this._nombre = nuevoNombre;
        }
    },

    get edad() {
        return this._edad;
    },

    set edad(nuevaEdad) {
        if (nuevaEdad < 0) {
            console.log("La edad no puede ser negativa.");
        } else {
            this._edad = nuevaEdad;
        }
    }
};

personaAvanzada.nombre = "María";
personaAvanzada.edad = 25;
console.log(`Nombre: ${personaAvanzada.nombre}, Edad: ${personaAvanzada.edad}`);
