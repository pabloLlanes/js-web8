///////////////////////////////////////////////
// MÉTODO MODERNO (desactivado con comentarios)
///////////////////////////////////////////////
//
// const queryString = window.location.search; // '?id=2'
// const urlParams = new URLSearchParams(queryString);
// const idUsuario = parseInt(urlParams.get('id'), 10); 
//
// console.log('ID usando URLSearchParams:', idUsuario);

// scriptDetalle.js

///////////////////////////////////////////////
// MÉTODO CASERO CON BOM
///////////////////////////////////////////////
const actualURL = window.location.href;
console.log('URL completa:', actualURL);

// 1. Dividimos la URL en la parte antes de '?' y la parte después de '?'
const partes = actualURL.split('?');

// Obtenemos la referencia del <div> donde mostraremos los datos
const divDetalle = document.getElementById('detalleUsuario');

// Variable para guardar el ID que encontremos
let idUsuarioCasero = null;

// 2. Verificamos si existe "?" en la URL
if (partes.length > 1) {
    // Lo que va después del '?' -> 'id=2', por ejemplo
    const queryStringManual = partes[1];
    console.log('Query string manual:', queryStringManual);

    // 3. Dividimos la query string por '='
    const partesQuery = queryStringManual.split('=');

    // partesQuery[0] sería la clave ('id'), partesQuery[1] el valor ('2')
    const valor = partesQuery[1]; // '2'

    // 4. Convertimos el valor a número
    idUsuarioCasero = parseInt(valor, 10);
    console.log('ID obtenido manualmente:', idUsuarioCasero);
} else {
    console.log('No hay parámetros en la URL');
}

// 5. Si pudimos sacar un ID, buscamos ese usuario en el arreglo global
if (idUsuarioCasero) {
    const usuarioEncontrado = misUsuarios.find(u => u.id
        === idUsuarioCasero);

    if (usuarioEncontrado) {
        // 6. Creamos elementos para mostrar su información
        const pNombre = document.createElement('p');
        pNombre.textContent = `Nombre: ${usuarioEncontrado.nombre}`;

        const pEdad = document.createElement('p');
        pEdad.textContent = `Edad: ${usuarioEncontrado.edad}`;

        const pDesc = document.createElement('p');
        pDesc.textContent = `Descripción: ${usuarioEncontrado.descripcion}`;

        // Insertamos cada elemento en el div
        divDetalle.appendChild(pNombre);
        divDetalle.appendChild(pEdad);
        divDetalle.appendChild(pDesc);
    } else {
        divDetalle.textContent = 'No se encontró ningún usuario con ese ID.';
    }
} else {
    // Si no tenemos un ID válido, mostramos un mensaje
    divDetalle.textContent = 'Parámetro "id" ausente o inválido en la URL.';
}
