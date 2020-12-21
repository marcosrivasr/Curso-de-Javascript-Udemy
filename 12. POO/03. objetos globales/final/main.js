

const calificaciones = [3,5,7,1,3,4];
const calificacionesObjeto = new Array(3,5,7,1,3,4);

console.log(calificaciones, calificacionesObjeto);

const alumno = {
    nombre: 'Marcos',
    edad: 28
};

const alumnoObjeto = new Object({
    nombre: 'Marcos',
    edad: 28
});

console.log(alumno, alumnoObjeto);

const numero = 15;
const numeroObjeto = new Number(15);

console.log(numero, numeroObjeto);
console.log(typeof numero === numeroObjeto);

const tieneCarro = false;
const tieneCarroObjeto = new Boolean(false);
console.log(tieneCarro, tieneCarroObjeto);

const p = new Promise( (resolve, reject) => {
    resolve('Hola');
});

p.then(res => console.log(res));