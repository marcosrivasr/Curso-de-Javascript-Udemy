
function mostrarMensaje(){
    console.log('Este es un evento en línea');
}

const boton = document.querySelector('#boton');
let contador = 0;
boton.addEventListener('click', function(e){
    console.log(e);

    //document.querySelector('#respuesta').textContent = 'Texto dinamico desde un boton';
    contador++;
    e.target.textContent = `${contador} clicks`;

    document.querySelector('#capa').classList.toggle('ocultar');
});

document.querySelector('body').addEventListener('mousemove', e =>{
    document.querySelector('#respuesta').textContent = `${e.pageX} - ${e.pageY}`;
})

const edificio = document.querySelector('#edificio');
let pegado = false;
window.addEventListener('mousemove', e =>{
    if(pegado){
        const x = e.pageX - (edificio.width / 2);
        const y = e.pageY - (edificio.height / 2);
        edificio.style.position = "absolute";
        edificio.style['left'] = x + 'px';
        edificio.style['top'] = y + 'px';
    }
});

edificio.addEventListener('click', e =>{
    pegado = !pegado;
});