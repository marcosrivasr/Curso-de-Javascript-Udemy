const data = {
    paises:['mexico', 'eu', 'italia'],

    estados:{
        mexico:['df', 'oaxaca'],
        eu:['ny', 'arizona'],
        italia:['florencia', 'roma']
    },
    distritos:{
        df:['alvaro obregon', 'polanco', 'cuajimalpa'],
        oaxaca:['tuxtepec', 'mixtle', 'ocotan'],
        ny:['bronx', 'brooklyn', 'manhattan'],
        arizona:['phoenix', 'tucson', 'chandler'],
        florencia:['fiesole', 'pelago', 'vinci'],
        roma:['poli', 'riano', 'nemi'],
    }
};
const paises = $('#paises');
const estados = $('#estados');
const distritos = $('#distritos');
paises.innerHTML = '';

llenarSelect(this.paises, data.paises);

paises.addEventListener('change', e => {
    const pais = e.target.value;
    if(pais == '') return false;
    const estados = data.estados[pais];

    llenarSelect(this.estados, estados);
});

estados.addEventListener('change', e => {
    const estado = e.target.value;
    if(estado == '') return false;
    const distritos = data.distritos[estado];

    llenarSelect(this.distritos, distritos);
});

function llenarSelect(elemento, data){
    elemento.innerHTML = '';
    const empty = document.createElement('option');
    elemento.add(empty);

    data.forEach(item => {
        const option = document.createElement('option');
        option.text = item;
        option.value = item;

        elemento.add(option);
    });
}


function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}