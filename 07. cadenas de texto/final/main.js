
let mensaje = 'Hubo un error al procesar la solicitud';
console.log(mensaje);

mensaje = 'b';
console.log(mensaje);

mensaje = 'El usuario fue registrado con exito';
console.log(mensaje[5]);
console.log(mensaje.length);

let texto = "Bienvenidos al curso";
let texto02 = 'Bienvenidos al curso';
let texto03 = `Bientenidos al curso.
                Este es el temario`;
console.log(texto, texto02, texto03);

let nombre = 'Marcos';
let header = 'Tu resumen del dia, ' + nombre;
let header02 = `Tu resumen del dia, ${nombre}`;

console.log(header, header02);

const nombre01 = 'Oscar';
const nombre02 = 'oscar';
console.log(nombre01 == nombre02);

//--------------------------------------

mensaje = "Curso de Javascript para principiantes";

//indexof
console.log(mensaje.indexOf('javascript'));
console.log(mensaje.indexOf(' '));
console.log(mensaje.indexOf('php'));

//lastIndexOf
console.log(mensaje.lastIndexOf('a'));
console.log(mensaje.lastIndexOf('ip'));

//slice
let res = mensaje.slice(5, 10);
console.log(res);

//substr
res = mensaje.substr(5,5);
console.log(res);

//replace
res = mensaje.replace('Javascript', '.NET');
console.log(res, mensaje);

//toUpperCase
res = mensaje.toUpperCase();
console.log(res);

//lowercase
res = mensaje.toLowerCase();
console.log(res);

//concat
let primerNombre = 'Juan ';
let segundoNombre = 'Camilo ';
let apellido = 'Garcia ';

let nombreCompleto = primerNombre.concat(segundoNombre, apellido);
console.log(nombreCompleto);

//trim
 let respuestaHTTP = '         transaccion exitosa        ';
 console.log(respuestaHTTP);
 console.log(respuestaHTTP.trim());

//split
const mensajeError = 'Busqueda no devolvio respuestas';
console.log(mensajeError.split(' '));
console.log(mensajeError.split(''));