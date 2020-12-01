
function suma(){
    console.log("inicia función");
    let numero01 = 4;
    let numero02 = 6;
    let respuesta = numero01 + numero02;
    console.log(`Respuesta: ${respuesta}`);
    console.log("termina función");
}

suma();

const resta = function(){
    console.log("inicia función");
    let numero01 = 10;
    let numero02 = 5;
    let respuesta = numero01 - numero02;
    console.log(`Respuesta: ${respuesta}`);
    console.log("termina función");
}

resta();

function multiplicacion(numero01, numero02){
    console.log("inicia función");
    if(isNaN(numero01) || isNaN(numero02)) throw new Error("No son numeros");
    let respuesta = numero01 * numero02;
    console.log(`Respuesta: ${respuesta}`);
    console.log("termina función");
}

multiplicacion('5', '9');