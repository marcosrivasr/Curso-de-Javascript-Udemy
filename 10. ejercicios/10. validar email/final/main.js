

const validacion = {
    longitud: false,
    arroba: false,
    puntos: false,
    estructura: false
};


const email = document.querySelector('#email');

email.addEventListener('input', e => {
    const texto = e.target.value;
    const arregloTexto = texto.split('');
    validacion.longitud = texto.length >= 6;
    validacion.arroba = contarCaracter(arregloTexto, '@') === 1;
    validacion.puntos = contarCaracter(arregloTexto, '.') === 1;
    validacion.estructura = validarEstructura(arregloTexto);
    console.log(validacion);
    mostrarResultados();
});

function contarCaracter(arreglo, caracter){
    console.log('sds');
    const res = arreglo.filter(c => c === caracter);
    return res.length;
}

function validarEstructura(arreglo){
    let res = 0;
    let index = arreglo.indexOf('@'); 

    if(index > 0 && index < (arreglo.length - 3)){
        res++;
    }
    index = arreglo.indexOf('.');
    if(index > 0 && index < (arreglo.length - 3)){
        if(arreglo[index - 1] != '.' || arreglo[index + 1] != '.'){
            res++;
        }
    }

    if(res == 2)return true;
    return false;
}


function mostrarResultados(){
    const resultados = document.querySelector('#resultados');
    resultados.textContent = '';
    for(prop in validacion){
        const criterio =  validacion[prop];
        resultados.innerHTML += `<div class="${criterio? 'success': 'error'}">${prop}</div>`;
        
    }
}