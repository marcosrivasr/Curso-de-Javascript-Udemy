let respuestas = {
    nombre: '',
    lenguajes: [],
    nivel: '',
    pais: ''
};

const boton = document.querySelector('#boton');

boton.addEventListener('click', e =>{
    e.preventDefault();
    console.log(respuestas);
    const respuesta = document.querySelector('#respuesta');
    respuesta.innerHTML = '';
    for(prop in respuestas){
        respuesta.innerHTML += `${prop}: ${respuestas[prop]}<br/>`;
    }
});

const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', e =>{
    respuestas.nombre = nombre.value;
});

//const lenguajes = document.querySelectorAll('input[type=checkbox]:checked');
const lenguajes = document.querySelectorAll('input[type=checkbox]');
lenguajes.forEach(lenguaje =>{
    lenguaje.addEventListener('click', e =>{
        getLenguajes();
    });
});

function getLenguajes(){
    respuestas.lenguajes = [];
    const items = document.querySelectorAll('input[type=checkbox]:checked');
    items.forEach(item =>{
        respuestas.lenguajes.push(item.value);
    }); 
}




const niveles = document.querySelectorAll('input[type=radio]');
niveles.forEach(nivel =>{
    nivel.addEventListener('click', e =>{
        respuestas.nivel = e.target.value;
    });
});

const pais = document.querySelector('#pais');
pais.addEventListener('change', e =>{
    respuestas.pais = e.target.value;
});

const bPais = document.querySelector('#bPais');
bPais.addEventListener('click', e => {
    const texto = document.querySelector('#itPais').value;
    const option = document.createElement('option');
    option.value = texto;
    option.text = texto;
    pais.add(option);
});

