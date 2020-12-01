const itPersonas = $('#personas');
const itTotal     = $('#total');
const itPropina = $('#propina');
const bGenerar = $('#bgenerar');
const resultados = $('#resultados');
const summary = $('#summary');

let propinas = [];

let personas;
let total;
let totalPorPersona;
let porcentajePropina;
let propinaPorPersona;
let totalConPropina;

function render(){
    
    summary.innerHTML = `<h2>Total a pagar: $${totalConPropina.toFixed(2)}</h2>`;
    summary.innerHTML += `<h2>Propina total: $${propinaPorPersona * personas}</h2>`;
    let html = '';
    propinas.forEach(persona => {
        const { id, consumo, propina, total, pagado } = persona;
        html += `
            <div class="persona ${pagado? 'pagado':''}" data-id="${id}">
                <h3>Persona ${id}</h3>
                <div class="consumo">Consumo: $${consumo}</div>
                <div class="propina">Propina: $${propina}</div>
                <div class="total">Total: $${total.toFixed(2)}</div>
                <div class="check"><input type="checkbox" ${pagado? 'checked': ''} /> Pagado</div>
            </div>`;
        
    });
    resultados.innerHTML = html;
    $$('input[type=checkbox]').forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            const id = e.target.parentElement.parentElement.getAttribute('data-id');
            const index = propinas.findIndex(item => item.id == id);
            const persona = propinas[index];
            console.log(persona);
            persona.pagado = e.target.checked;
            console.log(propinas);
            pagar();
        });
    });
}

bGenerar.addEventListener('click', e => {
    
    calcular();

    propinas = [];
    for(let i = 1; i<= personas; i++){
        const subtotal = parseFloat(totalPorPersona) + parseFloat(propinaPorPersona);
        const persona = {
            id: i,
            consumo: totalPorPersona,
            propina: propinaPorPersona,
            total: subtotal,
            pagado: false
        };

        propinas.push(persona);
    }
    render();
});

function calcular(){
    personas  = parseInt(itPersonas.value);
    total     = parseInt(itTotal.value);
    totalPorPersona = parseFloat(total / personas).toFixed(2);
    porcentajePropina   = parseFloat(itPropina.value / 100).toFixed(2);
    propinaPorPersona = parseFloat(totalPorPersona * porcentajePropina).toFixed(2);
    totalConPropina = parseFloat(total) + (total * porcentajePropina);
}

function pagar(){
    const noPagados = propinas.filter(x => x.pagado == false);
    const nuevoTotal = noPagados.reduce((acc, item, i) =>{
        return acc+= parseFloat(item.total);
    }, 0);
    totalConPropina = nuevoTotal;
    personas = noPagados.length;
    render();
}


function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}