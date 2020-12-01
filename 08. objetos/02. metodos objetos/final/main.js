
const usuario = {
    id: 5,
    nombre: 'Sarah',
    edad: 38,
    saludo: function(){
        return `Hola! es un gusto que nos visites`;
    }
};

console.log(usuario.saludo());

const viaje = {
    tiempo: function(distancia, velocidad){
        return distancia / velocidad;
    }
};

console.log(viaje.tiempo(40, 60));

const viaje02 = {
    distancia: 40,
    velocidad: 60,
    tiempo: function(){
        return this.distancia / this.velocidad;
    }
};

console.log(viaje02.tiempo());

const t = viaje02.tiempo;
const tiempo = viaje.tiempo;
console.log(t());
console.log(tiempo(10, 40));