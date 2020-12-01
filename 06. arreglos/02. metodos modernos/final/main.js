
const calificaciones = [10, 7, 4, 6, 2, 8];
const mensajes = ['hola', 'al', 'curso', 'de', 'javascript'];

//foreach
calificaciones.forEach(function(item){
    console.log(item);
});

calificaciones.forEach((elemento, indice) => {
    console.log(elemento, indice);
});

function iteracion(elemento, indice){
    console.log(elemento * 5, indice);
}

calificaciones.forEach(iteracion);
console.log(calificaciones);


//map

const nuevoArreglo = calificaciones.map((elemento, indice) =>{
    return elemento * 5;
});

const nuevoArregloMensajes = mensajes.map(elemento =>{
    return `** ${elemento} **`;
});

console.log('calificaciones',calificaciones, 'nuevoArreglo',nuevoArreglo);
console.log(nuevoArregloMensajes);

//reduce

const arregloReduce = calificaciones.reduce(function(acc, item, indice){
    return acc + item;
}, 0);

console.log(arregloReduce);

const arregloReduceString = mensajes.reduce((acc, item) =>{
    return acc + item + ' ';
}, '');

console.log(arregloReduceString);

//---------------------------------------

//Filter
const arregloFilter = calificaciones.filter(item => item < 5);
console.log(arregloFilter);

const arregloFilterString = mensajes.filter(item => item != 'javascript');
console.log(arregloFilterString);

//Find

const arregloFind = calificaciones.find(item =>{
    //return item > 5;
    return item == 100;
});
console.log(calificaciones);
console.log(arregloFind);

//FindIndex
const index = calificaciones.findIndex(item =>{
    return item === 6;
});
console.log(index);


//Some
const existe = mensajes.some(item =>{
    return item === 'javascript';
});
console.log();


//----------------------------------------

//flat

const parciales = [[10, 8], [7,5], [10, 10]];
console.log(parciales.flat());

const output = [[[[10, 5]]],[2, 8]];

console.log(output.flat(1));

//sort

const arregloOrdenado = calificaciones.sort((a, b) =>{
    if(a < b) return -1;

    if(a > b) return 1;

    return 0;
});

const res02 = calificaciones.sort((a, b) =>{
    return b - a;
});

console.log(arregloOrdenado);
console.log(arregloOrdenado02);



