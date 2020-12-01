
const usuario = {
    id: 5,
    nombre: 'Sarah',
    edad: 38,
    habilidades: [
        {
            id: 0,
            nombreHabilidad: 'programacion'
        },
        {
            id: 1,
            nombreHabilidad: 'canto'
        }
    ]
};

const idUsuario = usuario.id;
const nombreUsuario = usuario.nombre;
const habilidad01 = usuario.habilidades[0].nombreHabilidad;

console.log(idUsuario, nombreUsuario, habilidad01);

const { id, nombre, habilidades} = usuario;
console.log(id, nombre, habilidades);

const {nombreHabilidad} = habilidades[0];
console.log(nombreHabilidad);

const elementos = [
    {id: 0, nombre: 'KK'},
    {id: 0, nombre: 'Canelita'},
    {id: 0, nombre: 'nook'}
];

const [ kk, canelita, nook] = elementos;
console.log(kk, canelita, nook);

