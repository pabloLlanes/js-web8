/* ENUNCIADO
Van a programar un mini-juego de batalla por turnos en el que dos personajes (jugadores) se enfrenten hasta que alguno quede sin puntos de vida (HP). El enfoque debe ser sencillo y didáctico, pero demostrará el uso de objetos, funciones, callbacks y un bucle para manejar los turnos.


Representar cada jugador como un objeto con propiedades básicas (por ejemplo: nombre, hp, ataque).
Manejar y acceder a esas propiedades.
Funciones y callbacks

Usar funciones para realizar la lógica de ataque, mostrar estado, etc.
Permitir (al menos en teoría) usar callbacks para definir cómo se calcula el daño.
Bucle por turnos

Utilizar un bucle (while, por ejemplo) que se repita mientras ambos jugadores tengan vida.
Alternar los ataques: primero un jugador y luego el otro.
Salida en consola

Mostrar mensajes de lo que sucede en cada turno (quién ataca, cuánto daño hace, etc.).
Al final, indicar quién gana o si hay un empate.
REQUISITOS MÍNIMOS
Objetos “jugador1” y “jugador2”

Cada uno con propiedades:
name (string),
hp (número) para los puntos de vida,
attack (número) para determinar el daño básico que causan.
(Puedes agregar más propiedades si quieres, como defensa, pero no es obligatorio).
Funciones básicas

Una función para mostrar el estado de un jugador, por ejemplo, showStatus(player), que imprima en consola "Nombre tiene X puntos de vida.".
Una función para calcular o aplicar el daño.
Esta función puede ser un callback, p. ej.:
js
Copy code
function simpleDamage(attacker, defender) {
  return attacker.attack;
}
Otra función (ej. doAttack(attacker, defender, damageCallback)) que use ese callback, reste puntos de vida al defensor y muestre mensajes en consola.
Una función que orqueste la batalla (startBattle(p1, p2, damageCallback)), con un bucle que se repite mientras ambos jugadores tengan hp > 0.
En cada ronda:
Ataca primero el p1,
Si el otro (p2) sigue con vida, ataca p2.
Cuando uno (o ambos) lleguen a 0 de vida o menos, termina el bucle.
Se muestra quién ganó o si hubo empate (caso extremo: ambos llegan a 0 en el mismo turno).
Mensajes en consola

En cada ataque, debe imprimirse algo como:
"Guerrero ataca a Hechicero y causa 3 de daño."
Al terminar, debe imprimirse:
"¡Guerrero gana con 2 puntos de vida restantes!"
(o el equivalente para un empate).
PASOS PROPUESTOS
(Puedes seguir estos pasos de manera orientativa)

Declarar los objetos de los jugadores

js
Copy code
const player1 = { name: "Guerrero", hp: 10, attack: 3 };
const player2 = { name: "Hechicero", hp: 8, attack: 4 };
Crear la función showStatus(player)

js
Copy code
function showStatus(player) {
  console.log(`${player.name} tiene ${player.hp} puntos de vida.`);
}
Crear el callback de daño (opcional)

Por ejemplo, que devuelva directamente attacker.attack.
Crear la función doAttack(attacker, defender, damageCallback)

Calcular el daño con la callback.
Restar ese daño al hp del defensor.
Imprimir un mensaje de ataque y luego llamar a showStatus(defender).
Crear la función startBattle(p1, p2, damageCallback)

Usar un while (p1.hp > 0 && p2.hp > 0) {...}
Dentro, un turno para cada jugador en orden.
Cuando alguno llegue a hp <= 0, salir del bucle y mostrar el ganador.
Probarlo

Mostrar al inicio el estado de cada jugador.
Llamar a startBattle(player1, player2, simpleDamage);
Observar la salida en consola.
AYUDAS Y SUGERENCIAS
Uso de callbacks

Si lo ves complicado, puedes directamente calcular el daño en la misma función doAttack y no usar callback. Pero si te animas, un callback te permitirá en el futuro cambiar la lógica de daño con facilidad (por ejemplo, uno que incluya defensa, ataques críticos, etc.).
Desglosa el problema

Primero comprueba que se muestre bien el HP de cada jugador antes de la batalla.
Luego, agrega el bucle while y verifica que se salga cuando corresponde.
Finalmente, imprime el resultado.
Empates

 */
