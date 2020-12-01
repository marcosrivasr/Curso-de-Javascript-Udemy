
let objeto = {
    nombre: 'Marcos',
    edad: 28,
    habilidades: ['programacion', 'dibujo', 'baile'],
    frances: false
};

console.log(objeto);
console.table(objeto);

let post = {
    fecha: '2020/12/12',
    titulo: '5 trucos VS Code',
    author: {
        nombre: 'Juanito',
        photo: 'img/photo.jpg',
    },
    comentarios: [
        {
            id: 1,
            texto: 'Buen contenido'
        },
        {
            id: 2,
            texto: 'No conocia el truco #2'
        }
    ]
};

console.log(post);
console.log(post.comentarios);
post.author.nombre = 'Laura';
console.log(post);
console.log(post.comentarios[0], post['comentarios'][0]);
console.log(post.comentarios[0].texto, post['comentarios'][0]['texto']);

post['likes'] = 56;

console.table(post);
console.log(post.shares);


for(propiedad in post){
    console.log(propiedad);
}