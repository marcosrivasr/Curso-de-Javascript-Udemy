

const validacion = {
    longitud:{
        limite: 8,
        pass: false
    },
    minusculas:{
        limite: 2,
        pass: false
    },
    mayusculas:{
        limite: 2,
        pass: false
    },
    numeros:{
        limite: 1,
        pass: false
    },
    caracteres:{
        limite: 1,
        pass: false
    }
};


const password = document.querySelector('#password');

password.addEventListener('input', e => {
    const texto = e.target.value;
    
    validacion.longitud.pass = texto.length >= validacion.longitud.limite;
    // minusculas: 97 - 122

    const arregloTexto = texto.split('');
//    console.log(contarMinusculas(arregloTexto));
    validacion.minusculas.pass = contarMinusculas(arregloTexto) >= validacion.minusculas.limite;

    validacion.mayusculas.pass = contarMayusculas(arregloTexto) >= validacion.mayusculas.limite;

    validacion.numeros.pass = contarNumeros(arregloTexto) >= validacion.numeros.limite;

    validacion.caracteres.pass = contarCaracteres(arregloTexto) >= validacion.caracteres.limite;

    mostrarResultados();
});

function contarMinusculas(arreglo){
    const res = arreglo.filter(c => parseInt(c.charCodeAt(0)) >= 97 && parseInt(c.charCodeAt(0)) <=122);
    return res.length;
}

function contarMayusculas(arreglo){
    const res = arreglo.filter(c => parseInt(c.charCodeAt(0)) >= 65 && parseInt(c.charCodeAt(0)) <=90);
    return res.length;
}

function contarNumeros(arreglo){
    const res = arreglo.filter(c => parseInt(c.charCodeAt(0)) >= 48 && parseInt(c.charCodeAt(0)) <=57);
    return res.length;
}

function contarCaracteres(arreglo){
    const res = arreglo.filter(c => (parseInt(c.charCodeAt(0)) >= 33 && parseInt(c.charCodeAt(0)) <= 47) || (parseInt(c.charCodeAt(0)) >= 58 && parseInt(c.charCodeAt(0)) <=64));
    return res.length;
}



function mostrarResultados(){
    const resultados = document.querySelector('#resultados');
    resultados.textContent = '';
    for(prop in validacion){
        const criterio =  validacion[prop];
        const { limite, pass } = criterio
        resultados.innerHTML += `<div class="${pass? 'success': 'error'}">${prop}: al menos ${limite}</div>`;
        
    }
}