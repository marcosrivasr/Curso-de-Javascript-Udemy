
const persona = new Persona('Marcos', 28);

console.log(persona.nombre);

const persona2 = persona;
persona2.nombre = 'Jaimito';
console.log(persona2.nombre);
console.log(persona.nombre, persona2.nombre);

persona.nombre = 'Lucia';
persona2.nombre = 'Sam';

const persona3 = new Persona(persona.nombre, persona.edad);
persona3.nombre = 'Erick';
console.log(persona.nombre, persona2.nombre, persona3.nombre);

const alumno = {
    nombre: 'Juan'
};

const alumno2 = alumno;
alumno2.nombre = 'Brenda';

console.log(alumno, alumno2);

const alumno3 = {...alumno};
alumno.nombre = 'Jime';
alumno2.nombre = 'Pepe';
alumno3.nombre = 'Caro';

console.log(alumno, alumno2, alumno3);

const calificaciones = [1,2,3];
const calificaciones2 = calificaciones;

calificaciones2[0] = 99;
console.log(calificaciones2, calificaciones);

const calificaciones3 = [...calificaciones];
calificaciones3[0] = 100;

console.log(calificaciones, calificaciones2, calificaciones3);

function suma(arreglo){
    arreglo[0]= 1000;
    return arreglo.reduce((acc, item) => acc += item, 0);
}

const numeros = [1,2,3,4,5];
console.log(suma(numeros));
console.log(numeros.reduce((acc, item) => acc += item, 0));