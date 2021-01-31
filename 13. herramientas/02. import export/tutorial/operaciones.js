
function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

let mensaje = 'Hola desde el archivo de operaciones';

class Log{

    constructor(){}

    v(mensaje){
        console.log(mensaje);
    }

    w(mensaje){
        console.warn(mensaje);
    }

    e(mensaje){
        console.error(mensaje);
    }
}
