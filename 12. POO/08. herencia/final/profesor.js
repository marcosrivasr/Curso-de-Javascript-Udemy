class Profesor extends Persona{

    sueldo;

    constructor(id, nombre, edad, sueldo){
        super(id, nombre, edad);
        this.sueldo = sueldo;
    }

    presentarse(){
        return `${this.id}: ${this.nombre} tiene ${this.edad} años y tiene un sueldo de $${this.sueldo}`;
    }
}