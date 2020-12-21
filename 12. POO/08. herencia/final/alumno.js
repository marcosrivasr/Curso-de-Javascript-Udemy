class Alumno extends Persona{
    
    calificaciones;

    constructor(id, nombre, edad, calificaciones){
        super(id, nombre, edad);
        this.calificaciones = calificaciones;
    }

}