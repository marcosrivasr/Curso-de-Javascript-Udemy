
const promesa = new Promise((resolve, reject) => {
    const numero = 100;
    if(numero == 10) resolve('el valor es correcto');

    reject('el valor no es correcto');
});

const promesa2 = function(){
    return new Promise((resolve, reject) => {
        let res = 0;
        for(let i = 1; i< 1000000; i++){
            res += i * i;
        }
        if(res <= 0) reject('No se completó la operación');
        resolve(res);
    });
}

console.log(promesa);
promesa
.then(res => {
    console.log(res);
}, error => {
    console.error(error);
});

console.log('aquí empieza promesa 2');
promesa2()
.then(res => {
    console.log('resolví la promesa, res=', res);
})
.catch(error => {
    console.error(error);
});
console.log('aquí termina promesa 2');
//console.log('el valor de res =', res);

// segunda parte, encadenamiento

const convertir = texto => {
    return new Promise((resolve, reject) => {
        if(texto.length == 0){
            reject('No hay texto que transformar');
        }
        resolve(texto.toUpperCase());
    });
}

const obtenerCodigo = texto => {
    const p = new Promise((resolve, reject) => {
        if(texto.length == 0){
            reject('No hay texto que transformar');
        }
        const res = texto.split('').map(valor => {
            return valor.charCodeAt(0);
        });
        resolve(res);
    });
    
    return p;
}

function transformar(arreglo){
    return new Promise((resolve, reject) => {
        if(arreglo.length == 0){
            reject('arreglo vacio');
            return false;
        }
        const res = arreglo.map(valor => valor * 5).reduce((acc, valor) => acc += valor , 0);
    
        resolve(res);
    });
}

convertir('Marcos Rivas')
.then(res => obtenerCodigo(res))
.then(res => transformar(res))
.then(res =>{
    console.log('resultado: ', res);
})
.catch(error => {
    throw new Error(error);
});


