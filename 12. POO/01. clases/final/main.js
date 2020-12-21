
class Alumno{
    #matricula = "1193391";
    #nombre = "Marcos";
    #edad = 28;

    constructor(){
        console.log('Acabo de crearme');
    }

    saludar(){
        console.log(`Hola, ${this.#sobssnombre}!`);
    }

    get mat(){
        return this.#matricula;
    }
    set mat(value){
        this.#matricula = value;
    }

    get nom(){
        return this.#nombre;
    }
    set nom(value){
        this.nombre = value;
    }
}

class Profesor{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola! me llamo ${this.nombre}, tengo ${this.edad}`);
    }
}

const alumno = new Alumno();
const profesor = new Profesor('Juan', 45);

alumno.saludar();
alumno.mat = '9934811';
console.log(alumno.mat);
console.log(alumno.nombre);

profesor.saludar();
