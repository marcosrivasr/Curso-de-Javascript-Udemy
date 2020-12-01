const propiedades = new Set();

propiedades.add("color");
propiedades.add("tamano");
propiedades.add("peso");
propiedades.add("forma");

console.log(propiedades);

propiedades.add("color");

console.log(propiedades);

const iterador = propiedades.entries();

console.log(iterador.next().value);

for(let item of iterador){
    console.log(item);
}
