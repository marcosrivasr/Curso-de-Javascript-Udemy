let edad = 10;
let nombre = 'John';

this.nombre = 'Jessica';
this.edad = 40;

const usuario = {
    id: 5,
    nombre: 'Sarah',
    edad: 38,
    saludo: function(){
        return `Hola ${this.nombre}!`;
    },

    getEdad: () =>{
        return this.edad;
    }
};

console.log(usuario.saludo());
console.log(usuario.getEdad());
console.log(this);