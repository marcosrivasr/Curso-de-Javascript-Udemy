const boton = document.querySelector('#boton');
const input = document.querySelector('#input');

let dato = 50;
/* boton.addEventListener('click', e  => {
    dato = 100;
    console.log('evento click', 'dato = ', dato);
}); */
console.log('Dato = ', dato);

function calcularSuma(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback();
    console.log('ya se mandó a llamar el callback');
    return res;
}

console.log(calcularSuma([1,2,3,4,5], function(){
    console.log('Aquí termina la función');
}));



function calcularSuma2(valores, callback){
    const res = valores.reduce((acc, value) => acc += value, 0);
    callback(res);
    console.log('ya se mandó a llamar el callback');
}

calcularSuma2([2,4,6,8], res => {
    console.log('el resultado es: ', res);
});

function calcularSuma3(valores, callback, errorCallback){
    const res = valores.reduce((acc, value) => {
        if(isNaN(value)){
            errorCallback(`El valor ${value} no es numérico`);
            return false;
        }else{
            return acc+= value;
        }
    });
    callback(res);
}

calcularSuma3([1,1,1,'d'], res => {
    if(res) console.log('resultado de calcularSuma3 =', res);
}, error => {
    console.error(error);
});



// segunda parte

const convertir = (texto, callback, errorCallback) => {
    if(texto.length == 0){
        errorCallback('No hay texto que transformar');
        return false;
    }
    callback(texto.toUpperCase());
}

const obtenerCodigo = (texto, callback, errorCallback) => {
    if(texto.length == 0){
        errorCallback('No hay texto que transformar');
        return false;
    }
    const res = texto.split('').map(valor => {
        return valor.charCodeAt(0);
    });
    callback(res);
}

const transformar = (arreglo, callback, errorCallback) => {
    if(arreglo.length == 0){
        errorCallback('arreglo vacio');
        return false;
    }
    const res = arreglo.map(valor => valor * 5).reduce((acc, valor) => acc += valor , 0);

    callback(res);
}


boton.addEventListener('click', e => {
    convertir(input.value, res => {
        obtenerCodigo(res, arreglo => {
            console.log(arreglo);
            transformar(arreglo, suma => {
                console.log('suma final', suma);
            }, error => {
                throw new Error(error);    
            });
        }, error =>{
            throw new Error(error);
        });
    }, error => {
        throw new Error(error);
    });
});
