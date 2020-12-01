const buttons = [
                    ['C', '^', '%', '/'],
                    ['7', '8', '9', '*'],
                    ['4', '5', '6', '-'],
                    ['1', '2', '3', '+'],
                    ['+/-', '0', '.', '='],
                ];
let calculo = {
    operacion: '',
    memoria: undefined,
    numero: 0,
    resuelto: false,
    agregarDigito: function(n){
        if(this.resuelto){
            this.resuelto = false;
            this.numero = parseFloat(''.concat(n));
        }else{
            this.numero = parseFloat(''.concat(this.numero, n));
        }
        
    },
    agregarOperacion: function(op){
        const {memoria, numero, operacion } = this;

        if(numero == 0 && memoria == undefined) return false;
        if(operacion == ''){
            this.operacion = op;
            this.memoria = this.numero;
            this.numero = 0;
        }else{
            this.numero = this.resolver();
            this.resuelto = true;
        }
        console.log(this);
    },
    agregarFuncion: function(op){
        switch(op){
            case '=':
                const res = this.resolver();
                this.agregarFuncion('C');
                this.numero = res;
            break;
            case 'C':
                this.numero = 0;
                this.operacion = '';
                this.memoria = undefined;
                this.resuelto = true;
            break;
            case '.':
                if(!esFlotante(this.numero)){
                    console.log('no es flotante');
                    this.numero = this.numero + '.';
                }else{
                    this.numero = this.numero.toString().replace('.','');
                }
            break;
        }
        console.log(this);
    },
    resolver: function(){
        
        switch(this.operacion){
            case '+': return this.suma();
            case '-': return this.resta();
            case '*': return this.multiplicacion();
            case '/': return this.division();
            case '%': return this.porcentaje();
            case '^': return this.exponente();
            default:
                console.log('no identificado');
        }
    },
    render: function(elemento){
        elemento.textContent = this.numero;
    },
    suma: function(){
        return this.numero += this.memoria;
    },
    resta: function(){
        return this.memoria -= this.numero;
    },
    multiplicacion: function(){
        return this.numero *= this.memoria;
    },
    division: function(){
        return this.numero /= this.memoria;
    },
    porcentaje: function(){
        return this.numero %= this.memoria;
    },
    exponente: function(){
        return this.numero **= this.memoria;
    }
};


const display = $('#display');
const botonesContainer = $('#botones-container');

for(fila of buttons){
    for(celda of fila){
        const boton = document.createElement('button');
        boton.textContent = celda;
        boton.addEventListener('click', e => {
            const caracter = e.target.textContent;
            
            if(esNumero(caracter)){
                calculo.agregarDigito(caracter);
            }else if(esFuncion(caracter)){
                calculo.agregarFuncion(caracter);
            }else{
                calculo.agregarOperacion(caracter);
            }
            calculo.render(display);
        });
        botonesContainer.appendChild(boton);
    }
}


function esNumero(n){
    return !isNaN(n);
}

function esFlotante(n){
    if(n.toString().indexOf('.') > -1){
        return true;
    }else{
        return false;
    }
}

function esFuncion(valor){
    const funciones = ['C', '=', '.', '+/-'];

    return funciones.some( (funcion, index) => funcion == valor);
}


function $(selector){
    return document.querySelector(selector);
}

function $$(selector){
    return document.querySelectorAll(selector);
}