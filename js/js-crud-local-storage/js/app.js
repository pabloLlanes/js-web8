console.log("loading...");
console.log("initialized...");

// Escuchamos el evento 'submit' del formulario para crear una nueva persona
document.getElementById('form').addEventListener("submit", createPerson);

// C-R-U-D

// READ - Obtener y mostrar la lista de personas
function renderList() {
    console.log("READ - Obtener y mostrar la lista de personas");
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiamos la lista antes de renderizar

    // Obtenemos las personas del localStorage o un array vacío si no hay datos
    const persons = JSON.parse(localStorage.getItem('persons')) || [];

    // Recorremos el array de personas y creamos una fila en la tabla por cada una
    persons.forEach((person, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${index + 1} </td>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td> 
                    <button onclick="editPerson('${person.id}')"> Modificar </button>   
                    <button onclick="deletePerson('${person.id}')" > Eliminar </button>
                </td>
        `;
        lista.appendChild(row); // Añadimos la fila a la tabla
    });
}

renderList(); // Llamamos a la función para renderizar la lista al cargar la página


//ALTERNATIVA A renderList() CREANDO NODOS DE MANERA "MAS ARTESANAL"

/* function renderList() {
    console.log("READ - Obtener y mostrar la lista de personas");
    const lista = document.getElementById('lista');
    lista.innerHTML = ''; // Limpiamos la lista antes de renderizar

    // Obtenemos las personas del localStorage o un array vacío si no hay datos
    const persons = JSON.parse(localStorage.getItem('persons')) || [];

    // Usamos map para crear un array de nodos <tr>
    const rows = persons.map((person, index) => {
        // Creamos la fila <tr>
        const row = document.createElement('tr');

        // Creamos las celdas <td>
        const cellIndex = document.createElement('td');
        cellIndex.textContent = index + 1;

        const cellId = document.createElement('td');
        cellId.textContent = person.id;

        const cellName = document.createElement('td');
        cellName.textContent = person.name;

        const cellAge = document.createElement('td');
        cellAge.textContent = person.age;

        const cellActions = document.createElement('td');

        // Creamos los botones de "Modificar" y "Eliminar"
        const editButton = document.createElement('button');
        editButton.textContent = "Modificar";
        editButton.addEventListener('click', () => editPerson(person.id)); // Asignamos la función editPerson

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener('click', () => deletePerson(person.id)); // Asignamos la función deletePerson

        // Añadimos los botones a la celda de acciones
        cellActions.appendChild(editButton);
        cellActions.appendChild(deleteButton);

        // Añadimos las celdas a la fila
        row.appendChild(cellIndex);
        row.appendChild(cellId);
        row.appendChild(cellName);
        row.appendChild(cellAge);
        row.appendChild(cellActions);

        return row; // Retornamos la fila creada
    });

    // Añadimos todas las filas a la tabla
    rows.forEach(row => lista.appendChild(row));
} */


// CREATE - Crear una nueva persona
function createPerson(e) {
    console.log("CREATE - Crear una nueva persona");
    e.preventDefault(); // Evitamos que el formulario se envíe y recargue la página

    // Obtenemos los valores del formulario
    const name = document.getElementById('nombre').value.trim();
    const age = document.getElementById('edad').value.trim();

    // Generamos un ID único para la nueva persona
    const id = `${Math.floor(Math.random() * 1000000).toString()}`;

    // Obtenemos las personas actuales del localStorage o un array vacío si no hay datos
    const persons = JSON.parse(localStorage.getItem('persons')) || [];

    // Añadimos la nueva persona al array
    persons.push({ id, name, age });

    // Guardamos el array actualizado en el localStorage
    localStorage.setItem("persons", JSON.stringify(persons));

    // Volvemos a renderizar la lista para mostrar los cambios

    // Limpiamos el formulario
    document.getElementById('form').reset();
    renderList();
}

// DELETE - Eliminar una persona por su ID
function deletePerson(personId) {
    console.log(`DELETE - Eliminar una persona por ID: ${personId}`);

    // Obtenemos las personas actuales del localStorage
    const arrayPersons = JSON.parse(localStorage.getItem('persons')) || [];

    // Filtramos el array para eliminar la persona con el ID proporcionado
    const newArrayPersons = arrayPersons.filter((person) => person.id !== personId);

    // Guardamos el array actualizado en el localStorage
    localStorage.setItem("persons", JSON.stringify(newArrayPersons));

    // Volvemos a renderizar la lista para mostrar los cambios
    renderList();
}

// UPDATE - (Actualizar una persona por su ID)
function updatePerson(personId) {
    console.log(`UPDATE - Modificar una persona por ID: ${personId}`);

    //TODO: TAREA

}