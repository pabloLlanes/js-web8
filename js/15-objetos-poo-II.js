/**
 * POO EN JAVASCRIPT: PRINCIPIOS FUNDAMENTALES
 *
 * 1. Abstracción
 * 2. Encapsulación
 * 3. Herencia
 * 4. Polimorfismo
 */

// --------------------------------------------------------------------
// 1. Abstracción
// --------------------------------------------------------------------

/**
 * La abstracción consiste en representar entidades del mundo real 
 * con las propiedades y comportamientos esenciales, omitiendo detalles 
 * innecesarios para nuestro contexto.
 * 
 * Ejemplo de abstracción en JavaScript:
 */

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
}

/**
 * 'Vehiculo' es la abstracción: define sólo los datos y métodos 
 * fundamentales (marca, modelo y encender()), sin entrar en 
 * detalles de implementación (tipo de motor, tamaño del tanque, etc.).
 */

// --------------------------------------------------------------------
// 2. Encapsulación
// --------------------------------------------------------------------

/**
 * La encapsulación consiste en agrupar datos (propiedades) y comportamientos 
 * (métodos) relacionados en un mismo objeto o clase, restringiendo el 
 * acceso directo a algunos de sus componentes para evitar modificaciones 
 * indebidas y exponer solo lo necesario.
 * 
 * Ejemplo de encapsulación en JavaScript:
 */

class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        let saldo = saldoInicial; // Variable local (simulando privada con closure)

        this.depositar = function (monto) {
            if (monto > 0) saldo += monto;
        };

        this.retirar = function (monto) {
            if (monto <= saldo) saldo -= monto;
        };

        this.consultarSaldo = function () {
            return saldo;
        };
    }
}

const miCuenta = new CuentaBancaria("Juan Pérez", 1000);
miCuenta.depositar(500);
miCuenta.retirar(200);
console.log("Saldo actual:", miCuenta.consultarSaldo());
// Salida: 1300

/**
 * Aquí, la variable 'saldo' no puede ser accedida directamente 
 * desde fuera de la clase. La única forma de modificar o leer 
 * el saldo es a través de los métodos depositar, retirar 
 * y consultarSaldo, protegiendo la integridad del dato.
 */

// --------------------------------------------------------------------
// 3. Herencia
// --------------------------------------------------------------------

/**
 * La herencia permite que una clase (subclase) herede propiedades y métodos 
 * de otra clase (superclase), evitando duplicación de código. En JavaScript, 
 * usamos la sintaxis 'extends' para establecer la relación de herencia.
 * 
 * Ejemplo de herencia en JavaScript:
 */

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    comer() {
        console.log(`${this.nombre} está comiendo...`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de la superclase
        this.raza = raza;
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando... ¡Guau!`);
    }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.comer();   // "Firulais está comiendo..."
miPerro.ladrar();  // "Firulais está ladrando... ¡Guau!"

/**
 * - 'Animal' es la superclase.
 * - 'Perro' es la subclase y hereda de 'Animal'.
 * - Gracias a la herencia, 'Perro' puede usar métodos de 'Animal' 
 *   y agregar los propios.
 */

// --------------------------------------------------------------------
// 4. Polimorfismo
// --------------------------------------------------------------------

/**
 * El polimorfismo permite que distintas clases tengan 
 * la misma interfaz (o método) pero diferentes implementaciones. 
 * Esto significa que objetos distintos pueden responder de forma 
 * distinta al mismo método.
 * 
 * Ejemplo de polimorfismo en JavaScript:
 */

class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    // Sobrescribimos el método hacerSonido (si existiera en Animal)
    hacerSonido() {
        console.log(`${this.nombre} dice: "Miau"`);
    }
}

class Vaca extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hacerSonido() {
        console.log(`${this.nombre} dice: "Moo"`);
    }
}

const gato1 = new Gato("Mishu");
const vaca1 = new Vaca("Lola");

// Si tuviéramos un método genérico en Animal llamado hacerSonido, 
// cada clase podría sobrescribirlo de forma distinta:
gato1.hacerSonido(); // "Mishu dice: 'Miau'"
vaca1.hacerSonido(); // "Lola dice: 'Moo'"

/**
 * Aunque se llame igual (hacerSonido), la implementación 
 * de cada clase difiere. Eso es polimorfismo.
 */

// --------------------------------------------------------------------
// RESUMEN
// --------------------------------------------------------------------

/**
 * - Abstracción: Modelar solo lo esencial de una entidad. 
 * - Encapsulación: Proteger los datos internos, exponiendo solo métodos necesarios.
 * - Herencia: Reutilizar y extender funcionalidad de una superclase en subclases.
 * - Polimorfismo: Mismo método, distintas implementaciones.
 * 
 */

// --------------------------------------------------------------------
// EJERCICIOS PRÁCTICOS SOBRE POO (SOLUCIONES)
// --------------------------------------------------------------------

/**
 * EJERCICIO 1: Abstracción
 * Crea una clase "Persona" con las propiedades básicas: nombre y edad.
 * Agrega un método "presentarse()" que imprima:
 *   "Hola, soy [nombre] y tengo [edad] años."
 * - Crea 2 instancias de esta clase y llama a "presentarse()" en cada una.
 */

// SOLUCIÓN EJERCICIO 1
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear instancias y llamar a presentarse()
const persona1 = new Persona("Carlos", 25);
const persona2 = new Persona("María", 30);

persona1.presentarse(); // "Hola, soy Carlos y tengo 25 años."
persona2.presentarse(); // "Hola, soy María y tengo 30 años."

// --------------------------------------------------------------------

/**
 * EJERCICIO 2: Encapsulación
 * Crea una clase "CajaFuerte" que reciba en el constructor un "codigo" 
 * (número o string) y un "monto" inicial. 
 * - La propiedad "monto" debe ser privada (simulación con closure).
 * - Agrega métodos "depositar()", "retirar()" y "consultarSaldo()" que 
 *   operen sobre "monto", validando el "codigo" en cada operación:
 *   - Si el código ingresado es correcto, permite la operación.
 *   - Si el código es incorrecto, muestra un mensaje de error.
 * - Demuestra su uso en consola.
 */

// SOLUCIÓN EJERCICIO 2
class CajaFuerte {
    constructor(codigo, montoInicial) {
        let monto = montoInicial;
        this.codigoReal = codigo; // para comparar después

        this.depositar = (codigoIngresado, cantidad) => {
            if (codigoIngresado === this.codigoReal) {
                if (cantidad > 0) {
                    monto += cantidad;
                    console.log(`Depósito exitoso de $${cantidad}.`);
                } else {
                    console.log("La cantidad a depositar debe ser mayor a 0.");
                }
            } else {
                console.log("Código incorrecto. Operación cancelada.");
            }
        };

        this.retirar = (codigoIngresado, cantidad) => {
            if (codigoIngresado === this.codigoReal) {
                if (cantidad <= monto && cantidad > 0) {
                    monto -= cantidad;
                    console.log(`Retiro exitoso de $${cantidad}.`);
                } else {
                    console.log("Fondos insuficientes o monto inválido.");
                }
            } else {
                console.log("Código incorrecto. Operación cancelada.");
            }
        };

        this.consultarSaldo = (codigoIngresado) => {
            if (codigoIngresado === this.codigoReal) {
                return monto;
            } else {
                console.log("Código incorrecto. No se puede consultar saldo.");
                return null;
            }
        };
    }
}

// Demostración de uso
const miCajaFuerte = new CajaFuerte("abc123", 500);
miCajaFuerte.depositar("abc123", 200);     // Depósito exitoso
miCajaFuerte.retirar("abc123", 100);       // Retiro exitoso
console.log(miCajaFuerte.consultarSaldo("abc123")); // 600
miCajaFuerte.depositar("xyz000", 50);      // Código incorrecto

// --------------------------------------------------------------------

/**
 * EJERCICIO 3: Herencia
 * Crea una superclase "Instrumento" con una propiedad "nombre" y un método "tocar()".
 * Luego crea dos subclases: "Guitarra" y "Piano".
 * - Ambas heredan de "Instrumento".
 * - Sobrescribe el método "tocar()" en cada subclase para imprimir un mensaje 
 *   diferente (ej. "La guitarra suena con cuerdas", "El piano suena con teclas").
 * - Crea instancias de "Guitarra" y "Piano" y llama al método "tocar()".
 */

// SOLUCIÓN EJERCICIO 3
class Instrumento {
    constructor(nombre) {
        this.nombre = nombre;
    }

    tocar() {
        console.log(`${this.nombre} está sonando...`);
    }
}

class Guitarra extends Instrumento {
    constructor(nombre) {
        super(nombre);
    }

    tocar() {
        console.log(`La guitarra "${this.nombre}" suena con cuerdas.`);
    }
}

class Piano extends Instrumento {
    constructor(nombre) {
        super(nombre);
    }

    tocar() {
        console.log(`El piano "${this.nombre}" suena con teclas.`);
    }
}

// Crear instancias y llamar a tocar()
const miGuitarra = new Guitarra("Fender");
const miPiano = new Piano("Yamaha");

miGuitarra.tocar(); // "La guitarra "Fender" suena con cuerdas."
miPiano.tocar();    // "El piano "Yamaha" suena con teclas."

// --------------------------------------------------------------------

/**
 * EJERCICIO 4: Polimorfismo
 * Crea una clase base "FiguraGeometrica" con un método "calcularArea()".
 * Luego crea subclases "Rectangulo" y "Circulo":
 * - "Rectangulo" tiene propiedades "ancho" y "alto", y sobrescribe "calcularArea()"
 *   para devolver "ancho * alto".
 * - "Circulo" tiene propiedad "radio" y sobrescribe "calcularArea()" para devolver 
 *   "Math.PI * (radio**2)".
 * - Crea instancias de ambas figuras y muestra sus áreas.
 */

// SOLUCIÓN EJERCICIO 4
class FiguraGeometrica {
    calcularArea() {
        return 0;
        // Por defecto, no se sabe, 
        // cada subclase sobrescribirá este método
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

const miRectangulo = new Rectangulo(5, 3);
const miCirculo = new Circulo(4);

console.log("Área del rectángulo:", miRectangulo.calcularArea()); // 15
console.log("Área del círculo:", miCirculo.calcularArea().toFixed(2)); // 50.27...

// --------------------------------------------------------------------

/**
 * EJERCICIO 5: Integración de conceptos
 * Crea una clase "Empresa" con:
 *   - Propiedad "nombre"
 *   - Arreglo "empleados" (inicialmente vacío)
 *   - Método "contratarEmpleado(empleado)" que agrega un empleado al arreglo
 *   - Método "listarEmpleados()" que recorra el arreglo e imprima 
 *     "Empleado: [nombre], Cargo: [cargo]"
 *   - (Opcional) Simular un "salario" privado para cada empleado.
 * 
 * Crea una clase "Empleado" con propiedades "nombre" y "cargo".
 * - Instancia una empresa y contrata varios empleados, luego llama a "listarEmpleados()".
 */

// SOLUCIÓN EJERCICIO 5
class Empleado {
    constructor(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
        // (Opcional) salario privado
        let salario = 0;

        this.establecerSalario = function (monto) {
            salario = monto;
        };

        this.mostrarSalario = function () {
            return salario;
        };
    }
}

class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
    }

    contratarEmpleado(empleado) {
        this.empleados.push(empleado);
    }

    listarEmpleados() {
        console.log(`\nLista de empleados de la empresa: ${this.nombre}`);
        this.empleados.forEach((emp) => {
            console.log(`Empleado: ${emp.nombre}, Cargo: ${emp.cargo}`);
        });
    }
}

// Crear instancia de Empresa y Empleados
const miEmpresa = new Empresa("Tech Solutions");

const empleado1 = new Empleado("Carlos", "Desarrollador");
const empleado2 = new Empleado("María", "Diseñadora UX");
const empleado3 = new Empleado("Ana", "Project Manager");

// (Opcional) Asignar salarios
empleado1.establecerSalario(3000);
empleado2.establecerSalario(2800);
empleado3.establecerSalario(3500);

// Contratar empleados
miEmpresa.contratarEmpleado(empleado1);
miEmpresa.contratarEmpleado(empleado2);
miEmpresa.contratarEmpleado(empleado3);

// Listar empleados
miEmpresa.listarEmpleados();
// Muestra en consola:
// Lista de empleados de la empresa: Tech Solutions
// Empleado: Carlos, Cargo: Desarrollador
// Empleado: María, Cargo: Diseñadora UX
// Empleado: Ana, Cargo: Project Manager

// Podemos consultar salario privado (Opcional)
console.log(`Salario privado de ${empleado1.nombre}:`, empleado1.mostrarSalario());
console.log(`Salario privado de ${empleado2.nombre}:`, empleado2.mostrarSalario());
console.log(`Salario privado de ${empleado3.nombre}:`, empleado3.mostrarSalario());


// --------------------------------------------------------------------
// BREVE HISTORIA: POR QUÉ JAVASCRIPT ADOPTÓ POO
// --------------------------------------------------------------------
/**
 * JavaScript nació como un lenguaje basado en prototipos (prototype-based),
 * lo que ya ofrecía un enfoque orientado a objetos distinto al clásico 
 * (clases, herencia, etc.). Con el paso del tiempo y la popularización 
 * de patrones de diseño, muchos desarrolladores encontraron más natural 
 * trabajar con sintaxis de "clases" (similar a otros lenguajes como Java o C#).
 * 
 * A partir de ECMAScript 2015 (ES6), se introdujo la sintaxis de clases 
 * para simplificar y estandarizar la forma en que se maneja la herencia 
 * y el encapsulamiento. Bajo el capó, JavaScript sigue usando prototipos, 
 * pero la sintaxis "class" facilita su uso y comprensión a quienes 
 * provienen de lenguajes orientados a objetos tradicionales.
 */

// --------------------------------------------------------------------
// VENTAJAS Y DESVENTAJAS DE LA POO
// --------------------------------------------------------------------
/**
 * VENTAJAS:
 * 1. Organización del código: Separa responsabilidades en clases y objetos, 
 *    facilitando el mantenimiento y la lectura.
 * 2. Reutilización de código: La herencia y la composición permiten reutilizar 
 *    lógica, reduciendo la duplicación.
 * 3. Modularidad: Cada clase se encarga de su propia lógica, lo que suele 
 *    fomentar la desacoplación.
 * 4. Abstracción y encapsulación: Permite ocultar la complejidad interna 
 *    y exponer solo métodos esenciales.
 *
 * DESVENTAJAS:
 * 1. Complejidad adicional: Para proyectos muy simples, la POO puede ser 
 *    más compleja de lo necesario.
 * 2. Sobrecarga conceptual: Nuevos desarrolladores pueden encontrar complicado 
 *    entender herencia, polimorfismo y otros conceptos.
 * 3. Rigidez en ciertos diseños: Un enfoque demasiado estricto en clases 
 *    puede llevar a jerarquías rígidas o anidar demasiadas subclases.
 * 4. Puede requerir más planificación: Diseñar correctamente la estructura 
 *    de clases no siempre es trivial.
 */

// --------------------------------------------------------------------
// DETALLES DE 'this' EN ARROW FUNCTIONS VS FUNCIONES NORMALES
// --------------------------------------------------------------------
/**
 * En funciones normales (function), el valor de 'this' depende de cómo 
 * se invoque la función. Si se llama como método de un objeto, 'this' 
 * apunta a ese objeto. En modo estricto ("use strict"), si se llama 
 * como función global, 'this' es undefined.
 * 
 * En arrow functions (=>), 'this' se captura léxicamente del contexto 
 * externo, es decir, NO se vincula a la invocación, sino al ámbito 
 * donde se definió. Por ello, en métodos de clases, si se usa arrow 
 * function, 'this' puede apuntar al objeto de la clase si se define 
 * dentro del constructor, o puede heredar un valor distinto si se 
 * define fuera.
 * 
 * Ejemplo rápido:
 */

console.log("\n--- 'this' en Funciones Normales vs. Arrow Functions ---");

const objConFunciones = {
    valor: 10,
    funcionNormal: function () {
        console.log("'this' en funcionNormal:", this);
        // apunta a 'objConFunciones'
    },
    arrowFunc: () => {
        console.log("'this' en arrowFunc:", this);
        // apunta al 'this' léxico (generalmente global o undefined en modo estricto)
    }
};

objConFunciones.funcionNormal();
objConFunciones.arrowFunc();

/**
 * - funcionNormal() -> 'this' se refiere a objConFunciones
 * - arrowFunc() -> 'this' no se redefine según la llamada, 
 *   sino que hereda el contexto en el que se definió (por lo general, 
 *   el global o undefined en "use strict").
 */
