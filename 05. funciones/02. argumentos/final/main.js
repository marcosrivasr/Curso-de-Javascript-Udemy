

function area(figura, base = 0, altura = 0){
    
    switch(figura){
        case "cuadrado":
            return base * base;
        case "rectangulo":
            return base * altura;
        case "triangulo":
            return (base * altura) / 2;
        default:
            throw new Error("Figura no encontrada");
    }
}

console.log(area("cuadrado", 5));
console.log(area("rectangulo",10, 15));
console.log(area("triangulo",5, 8));

function perimetro(...lados){
    let suma = 0;
    for(let i = 0; i< lados.length; i++){
        suma += lados[i];
    }

    return suma;
}

const suma = function(...numeros){
    let suma = 0;
    let contador = 0;

    while(contador < numeros.length){
        suma = numeros[contador];
        contador++;
    }

    return suma;
}


console.log(`El perimetro es ${perimetro(2,4,5,6)}`);
console.log(`la suma es ${suma(2,4,5,6)}`);