// 1. Crear <header>
const header = document.createElement('header');
header.style.backgroundColor = '#eee';
header.style.padding = '10px';

// 2. Crear <nav>
const nav = document.createElement('nav');

// 3. Crear <ul>
const ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.display = 'flex';
ul.style.gap = '10px';
ul.style.margin = '0';
ul.style.padding = '0';

// 4. Crear <li> y <a> para cada enlace
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

// a) enlace a index.html
const enlace1 = document.createElement('a');
enlace1.href = 'index.html';
enlace1.textContent = 'Inicio';

// b) enlace a pagina2.html
const enlace2 = document.createElement('a');
enlace2.href = 'page2.html';
enlace2.textContent = 'Página 2';

// c) enlace "Volver Atrás"
const enlace3 = document.createElement('a');
enlace3.href = '#'; // No importa, pues usaremos un evento
enlace3.textContent = 'Volver Atrás';

// Asignamos el evento con BOM: window.history.back()
enlace3.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});

// 5. Meter cada <a> dentro de su <li>
li1.appendChild(enlace1);
li2.appendChild(enlace2);
li3.appendChild(enlace3);

// 6. Agregar los <li> al <ul>
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// 7. Insertar el <ul> al <nav> y luego al <header>
nav.appendChild(ul);
header.appendChild(nav);

// 8. Insertar el header al inicio del <body>
document.body.prepend(header);
