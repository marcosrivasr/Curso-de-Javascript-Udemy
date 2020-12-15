const contenedor = document.querySelector('#resultado');

fetch('http://localhost:3000')
.then(respuesta => {
    console.log(respuesta);
    return respuesta.text()
})
.then(resultado => {
    contenedor.innerHTML = resultado;
});

fetch('http://localhost:3000',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'curso': 'Javascript'})
    
})
.then(respuesta => {
    console.log(respuesta);
    return respuesta.json()
})
.then(resultado => {
    contenedor.innerHTML = resultado.datos.curso;
})
.catch(error => {
    console.error(error);
});

//-------------------------------------------

( async () => {
    try {
        const res = await fetch('http://localhost:3000',);
        console.log(res);
        console.log('Termina la solicitud HTTP');    
    } catch (error) {
        console.error(error);
    }
    
})();