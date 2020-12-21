class Persona{

    #nombre;
    #edad;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    presentarse(){
        return `mi nombre es ${this.#nombre} y tengo ${this.#edad} años`;
    }

    set nombre(value){
        this.#nombre = value;
    }

    get nombre(){
        return this.#nombre;
    }
}