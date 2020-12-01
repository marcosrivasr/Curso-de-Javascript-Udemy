
const body = document.querySelector('body');
const container = document.createElement('div');
container.id = "mainContainer";
container.style.backgroundColor = "#003366";
container.style.color = "white";
container.style['padding'] = "50px";
container.textContent = "Bienvenidos al curso";

body.appendChild(container);

const texto = document.createTextNode(' de Javascript');
container.append(texto);

console.log(container.textContent);

const link = document.createElement('a');
link.setAttribute('href', 'http://www.google.com');
link.textContent = 'Ir a Google';

container.prepend(link, ' ');