/**
 * OPERADORES LÓGICOS EN JAVASCRIPT
 * Los operadores lógicos permiten combinar expresiones booleanas
 * para tomar decisiones más complejas en tu programa. En JavaScript,
 * contamos principalmente con:
 *
 * 1. Operador AND (&&)
 * 2. Operador OR (||)
 * 3. Operador NOT (!)
 *
 * A continuación, se presentan ejemplos y explicaciones
 * de cómo utilizar los operadores AND y OR. Además, se incluyen
 * sus tablas de verdad y el concepto de "evaluación de corto circuito".
 */

// --------------------------------------------------------------------
// TABLAS DE VERDAD BÁSICAS
// --------------------------------------------------------------------

/**
 * 1) AND (&&) - "Y"
 *
 *  Expresión "p && q" -> el resultado será true solamente
 *  cuando p y q sean true al mismo tiempo.
 *
 *   p     q     p && q
 *  -------------------
 *  true  true   true
 *  true  false  false
 *  false true   false
 *  false false  false
 *
 *
 * 2) OR (||) - "O"
 *
 *  Expresión "p || q" -> el resultado será true cuando
 *  al menos una de las dos condiciones sea true.
 *
 *   p     q     p || q
 *  -------------------
 *  true  true   true
 *  true  false  true
 *  false true   true
 *  false false  false
 *
 *
 * 3) NOT (!) - "Negación"
 *
 *  Expresión "!p" -> el resultado invierte el valor de p.
 *
 *   p     !p
 *  -----------
 *  true  false
 *  false true
 *
 * NOTA: El operador NOT no se usa en los ejemplos, ¡pero
 * puedes probarlo fácilmente en tu código!
 */

// --------------------------------------------------------------------
// EVALUACIÓN DE CORTO CIRCUITO ("SHORT-CIRCUIT EVALUATION")
// --------------------------------------------------------------------

/**
 * - Con AND (&&): Si la primera expresión es false, JavaScript
 *   no evalúa la segunda, porque ya sabe que el resultado total
 *   será false.
 *
 * - Con OR (||): Si la primera expresión es true, JavaScript
 *   no evalúa la segunda, porque ya sabe que el resultado
 *   será true.
 *
 * Esto puede ser útil para evitar cálculos innecesarios
 * o errores cuando un primer chequeo falla.
 */

// --------------------------------------------------------------------
// 1. Operador AND (&&)
// --------------------------------------------------------------------

/**
 * El operador AND (&&) evalúa a true si todas las expresiones
 * que se combinan son verdaderas. Si al menos una es false,
 * el resultado es false.
 */

let expresion1 = true;
let expresion2 = false;

let resultadoAnd = expresion1 && expresion2;
// Expresion: true && false -> false
console.log("Resultado AND básico:", resultadoAnd); // false

// Ejemplo práctico con AND (&&)
let edad = 25;
let tienePermiso = true;

if (edad >= 18 && tienePermiso) {
    console.log("Puede ingresar al lugar.");
} else {
    console.log("No cumple con los requisitos de edad o permiso.");
}

/**
 * En este ejemplo, para que la persona pueda ingresar,
 * es necesario que tanto `edad >= 18` sea true como `tienePermiso` sea true.
 * Si cualquiera de esas condiciones es false, no se cumple el requisito.
 */

// Otro ejemplo con variables booleanas
const tvEncendida = false;
const radioEncendida = true;

const resultadoAND = tvEncendida && radioEncendida;
// false && true -> false
console.log("RESULTADO-AND (tvEncendida && radioEncendida):", resultadoAND); // false

// --------------------------------------------------------------------
// 2. Operador OR (||)
// --------------------------------------------------------------------

/**
 * El operador OR (||) evalúa a true si al menos una de las expresiones
 * que se combinan es verdadera. Solo será false cuando todas
 * las expresiones sean falsas.
 */

let expresion3 = true;
let expresion4 = false;

let resultadoOr = expresion3 || expresion4;
// true || false -> true
console.log("Resultado OR básico:", resultadoOr); // true

// Ejemplo práctico con OR (||)
let esEstudiante = false;
let esEmpleado = true;

if (esEstudiante || esEmpleado) {
    console.log("La persona es estudiante o empleado.");
} else {
    console.log("La persona no es estudiante ni empleado.");
}

/**
 * En este ejemplo, basta con que al menos una de las condiciones
 * (esEstudiante o esEmpleado) sea verdadera para indicar
 * que la persona es estudiante o empleado.
 */

// Otro ejemplo con variables booleanas
const resultadoOR = tvEncendida || radioEncendida;
// false || true -> true
console.log("RESULTADO-OR (tvEncendida || radioEncendida):", resultadoOR); // true

// --------------------------------------------------------------------
// EJEMPLOS ADICIONALES DE USO PRÁCTICO
// --------------------------------------------------------------------

/**
 * 1) Verificar si un usuario está autenticado (isLoggedIn) Y tiene rol de administrador (isAdmin):
 *    if (isLoggedIn && isAdmin) {
 *      // acceso a funcionalidades de administrador
 *    }
 *
 * 2) Mostrar mensaje de bienvenida si el usuario tiene cuenta (hasAccount)
 *    o si está en modo de invitado (isGuest):
 *    if (hasAccount || isGuest) {
 *      // mensaje de bienvenida
 *    }
 */

// --------------------------------------------------------------------
// RESUMEN
// --------------------------------------------------------------------

/**
 * - AND (&&): todas las condiciones deben ser true para que el resultado sea true.
 * - OR (||): al menos una condición debe ser true para que el resultado sea true.
 * - NOT (!): invierte el valor de una expresión booleana.
 */
