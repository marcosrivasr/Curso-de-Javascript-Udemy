
function Alumno(id, nombre){
    this.id = id;
    this.nombre = nombre;

    this.saludar = function(){
        console.log(`${this.id}: ${this.nombre}`);
    }
}
const alumno = new Alumno('A01', 'Marcos');
alumno.saludar();

Alumno.prototype.calificaciones = [9,9,10,7];
Alumno.prototype.mostrarCalificaciones = function(){
    console.log(this.calificaciones.join(','));
}

alumno.mostrarCalificaciones();

String.prototype.reversa = function(){
    return this.split('').reverse().join('');
}

console.log('Marcos'.reversa());


Array.prototype.promedio = function(){
    const count = this.length;
    const total = this.reduce((acc, item) => {
        if(isNaN(item) || typeof item != "number") throw new Error(`${item} is not a number`);
        return acc += item;
    }, 0);
    return total / count;
}

console.log([1,2,3,"3",5].promedio());