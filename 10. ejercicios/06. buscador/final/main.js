const db = [
    'luis', 
    'maria', 
    'sergio', 
    'josue', 
    'lena',
    'marcos', 
    'omar', 
    'enrique'
];

const buscador = $('#buscador');
const sugerencias = $('#sugerencias');

buscador.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();

    if(q == '') mostrarSugerencias([], q);

    const res = db.filter(item => {
        if(item.indexOf(q) > -1) return item;
    });

    mostrarSugerencias(res, q);
});

function mostrarSugerencias(valores, q){
    sugerencias.innerHTML = '';
    if(q == ''){
        console.log('sd');
        sugerencias.style.display = 'none';
        return false;
    }else{
        sugerencias.style.display = 'block';
    }
    
    valores.forEach( item => {
        const elemento = document.createElement('a');
        let texto = item.replace(q, `<strong>${q}</strong>`);
        elemento.innerHTML = texto;
        elemento.href = '#';
        sugerencias.appendChild(elemento);

        elemento.addEventListener('click', e => {
            buscador.value = e.target.textContent;
            sugerencias.innerHTML = '';
            sugerencias.style.display = 'none';
        });
    });
}



function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}