
const logo = document.getElementById('logo');
const logov2 = document.querySelector('#logo');

console.log(logo);
console.log(logov2);

const item = document.getElementsByClassName('item');
const itemv2 = document.querySelectorAll('.item');

console.log(item, Array.isArray(item), Reflect.has(item, 'forEach'), Reflect.has(item, Symbol.iterator));
console.log(itemv2, Array.isArray(itemv2), Reflect.has(itemv2, 'forEach'), Reflect.has(itemv2, Symbol.iterator));

itemv2.forEach(element => {
    console.log(element);
});

for(elemento of item){
    console.log(item);
}

const arregloItem = Array.from(item);
const arregloItemv2 = Array.from(itemv2);

console.log(arregloItem, arregloItemv2);

const links = document.getElementsByTagName('a');
const linksv2 = document.querySelectorAll('a');

console.log(links, linksv2);


const header = document.querySelector('header');
//hijos
console.log(header.children, header.childNodes);
//padre
console.log(logov2.parentElement, logov2.parentNode);
// hermanos
console.log('Hermanos');
console.log(logov2.parentNode.children);
console.log(logov2.nextElementSibling);
