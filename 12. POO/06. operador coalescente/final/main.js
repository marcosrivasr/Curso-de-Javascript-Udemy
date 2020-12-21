
const post = new Post();

const json = post.getJSON();

if(json === null){
    console.log('No hay objeto');
}else{
    console.log(json);
}

console.log(json || 'No hay objeto');

const res = post.getJSON() ?? 'No hay objeto';

console.log(res);

const mensaje = '';
const numero = 0;
let edades;

console.log(mensaje ?? 'No hay mensaje');
console.log(numero ?? 'No hay numero');
console.log(edades ?? 'No hay arreglo de edades');
