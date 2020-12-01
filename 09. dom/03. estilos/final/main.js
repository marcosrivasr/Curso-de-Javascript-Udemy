
const boton = document.querySelector('#boton');

boton.style.backgroundColor = 'blue';
boton.style.color = '#fff';
boton.style.paddingLeft = '50px';
boton.style.paddingTop = '50px';
boton.style.background = 'linear-gradient(270deg, rgba(45,90,83,1) 0%, rgba(98,193,178,1) 100%)';

const boton02 = document.querySelector('#boton02');

console.log(boton02.classList);

boton02.classList.add('boton');
console.log(boton02.classList);

boton02.classList.add('boton-estilo01');
console.log(boton02.classList);

boton02.classList.remove('boton');
console.log(boton02.classList);

boton02.classList.toggle('boton-estilo02');
console.log(boton02.classList);

console.log(boton02.classList.contains('boton'));