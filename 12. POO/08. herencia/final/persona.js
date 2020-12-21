class Persona{

    id;
    nombre;
    edad;

    constructor(id, nombre, edad){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return `${this.id}: ${this.nombre} tiene ${this.edad} años`;
    }
}