
const post = new Post();

//post.reaction.newLike();

if(post.reaction){
    console.log(post.reaction.newLike());
}else{
    console.log('No existe el método reaction');
}

console.log(post.reaction?.newLike());
console.log(post.reaction?.newLike() ?? 'No existe el método reaction');

const alumno = {
    nombre: 'Juan',
    domicilio: {
        calle: 'Colon',
        numero: 45,
        cp: 30110,
        referencias: [
            {
                id: 0,
                nombre: 'Cibeles'
            },
            {
                id: 1,
                nombre: 'Nueva Italia'
            }
        ]
    }
}

console.log(alumno.domicilio.referencias[0].nombre);

if(alumno.domicilio && alumno.domicilio.referencias && alumno.domicilio.referencias[0]){
    console.log(alumno.domicilio?.referencias[0]?.nombre);
}
console.log(alumno.domicilio?.referencias[10]?.nombre);