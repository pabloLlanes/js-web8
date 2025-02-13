// scriptIndex.js

// 1. Obtenemos la referencia del <ul> donde mostraremos la lista
const ulLista = document.getElementById('listaUsuarios');

// 2. Recorremos el arreglo global "misUsuarios" para crear un <li> por cada objeto
misUsuarios.forEach(usuario => {
    // Creamos un <li>
    const li = document.createElement('li');

    // Creamos un enlace (anchor) que redirija a detalle.html con la query ?id=...
    const enlace = document.createElement('a');
    enlace.textContent = `${usuario.nombre} (edad: ${usuario.edad})`;
    enlace.href = `detalle.html?id=${usuario.id}`;
    // Podrías usar window.location.href al hacer click, 
    // pero con un <a href="..."> es más sencillo.

    // Insertamos el enlace dentro del <li>, y el <li> al <ul>
    li.appendChild(enlace);
    ulLista.appendChild(li);
});
