
let nombres = new Array(5);
nombres[0] = 'Juan';
nombres[1] = 'Maria';
nombres[2] = 'Sergio';
nombres[3] = 'Lena';
nombres[4] = 'Ramiro';

console.log(nombres);

nombres[10] = 'Marcos';
console.log(nombres, nombres[5]);

let calificaciones = [56, 77, 94, 79, 99, 100];

console.log(calificaciones);

nombres[1] = 23;
calificaciones[2] = 'Juan';

console.log(nombres, calificaciones);
console.log(nombres.length, calificaciones.length);

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(calificacion of calificaciones){
    console.log(calificacion);
}

//--------------------------------------------------

let coordenadas = [10.236, 14.334, 11.325, 15.234];

console.log('coordenadas', coordenadas);

coordenadas.push(20.389);

console.log('coordenadas', coordenadas);

const posicion = coordenadas.indexOf(14.134);

if(posicion == -1){
    console.error('No se encuentra el elemento ');
}else{
    console.log('indexof', posicion, coordenadas[posicion]);
}

coordenadas.unshift(11.11);

console.log('unshift',coordenadas.unshift(9.99));

coordenadas.unshift(12.12);

console.log(coordenadas);

const bienvenida = ['bienvenido', 'al', 'curso'];

console.log(bienvenida.join('&'));

const cuenta = '2356-2321-9874-9900';

console.log(cuenta.split('-'));