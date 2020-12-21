
function alumno(mensaje){
    console.log(`${mensaje}`);
    this.nombre;

    this.mensaje = function(mensaje){
        return mensaje;
    }

    this.setNombre = function(valor){
        this.nombre = valor;
    }

    this.getNombre = function(){
        return this.nombre;
    }
}

const funcion1 = new alumno('Este es un objeto nuevo');
const funcion2 = new alumno('Soy otro objeto');
console.log(alumno);

class Alumno{
    mensaje;

    constructor(mensaje){
        this.mensaje = mensaje;
        console.log(mensaje);
    }

    saludo(){

    }

    get mensaje(){
        return this.mensaje;
    }
}

const alumnoClase = new Alumno('Soy un objeto basado en clase');
console.log(alumnoClase.mensaje);
console.log(funcion1.mensaje('hola'));

funcion1.setNombre('Marcos');
console.log(funcion1.getNombre());

const estructuraAlumno = {
    nombre: 'Marcos',
    setNombre: function(valor){
        this.nombre = valor;
    },

    getNombre: function(){
        return this.nombre;
    }
};

const alumnoObjeto = {...estructuraAlumno};
alumnoObjeto.setNombre('Lena');
console.log(alumnoObjeto.getNombre());