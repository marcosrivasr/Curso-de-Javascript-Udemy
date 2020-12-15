const contenedor = document.querySelector('#resultado');
/* const xhr = new XMLHttpRequest();

xhr.addEventListener('load', e => {
    if(xhr.status == 200){
        contenedor.innerHTML = xhr.response;
    }
});

xhr.addEventListener('progress', e => {
    console.log('cargando...');
    contenedor.textContent = 'Cargando...';
});

xhr.open('GET', 'http://localhost:3000');
xhr.send(); */

function get(url, method, successCallback, progressCallback, errorCallback){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', e => {
        /* if(xhr.status == 200){
            contenedor.innerHTML = xhr.response;
        } */
        successCallback(e.target.response);
    });

    xhr.addEventListener('progress', e => {
        /* console.log('cargando...');
        contenedor.textContent = 'Cargando...'; */
        progressCallback(e);
    });

    xhr.addEventListener('error', e => {
        errorCallback(e);
    });

    xhr.open(method, url);
    xhr.send();
}

get('http://localhost:3000', 'GET', res => {
    console.log(res);
}, progress => {

}, error =>{

});


const xhr = new XMLHttpRequest();



xhr.addEventListener('load', e => {
    if(xhr.status == 200){
        console.log(JSON.parse(xhr.response));
        contenedor.innerHTML = xhr.response;
    }
});

xhr.addEventListener('progress', e => {
    console.log('cargando...');
    contenedor.textContent = 'Cargando...';
});

xhr.open('POST', 'http://localhost:3000/');
//xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Content-Type', 'application/json');
const data = {"nombre": "Marcos", "edad": 28};
xhr.send(JSON.stringify(data)); 

function post(url, options, successCallback, progressCallback, errorCallback){
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', e => {
        /* if(xhr.status == 200){
            contenedor.innerHTML = xhr.response;
        } */
        successCallback(e.target.response);
    });

    xhr.addEventListener('progress', e => {
        /* console.log('cargando...');
        contenedor.textContent = 'Cargando...'; */
        progressCallback(e);
    });

    xhr.addEventListener('error', e => {
        errorCallback(e);
    });

    xhr.open(options.method, url);
    xhr.setRequestHeader('Content-Type', options.headers['content-type']);
    xhr.send(JSON.stringify(options.body))
}

post('http://localhost:3000', {
    method: 'POST', 
    headers: {
        'content-type': 'application/json'
    },
    body: {nombre: 'Lena', edad: 29}
}, res => {
    console.log(JSON.parse(res));
}, progress => {

}, error => {

});