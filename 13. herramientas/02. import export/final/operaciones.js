
export default function suma(a, b){
    return a + b;
}

export function resta(a, b){
    return a - b;
}

export function multiplicacion(a, b){
    return a * b;
}

export class Log{

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