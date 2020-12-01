
const foto = document.querySelector('#foto');

console.log(foto.width, foto.getAttribute('width'));
console.table([
    {
        medida: foto.width,
        tipo: typeof foto.width
    },
    {
        medida: foto.getAttribute('width'),
        tipo: typeof foto.getAttribute('width')
    }
]);

foto.width = 500;
foto.setAttribute('width', '100%');

const boton = document.querySelector('#boton');

boton.textContent = 'El texto va a cambiar';