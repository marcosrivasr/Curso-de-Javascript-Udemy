

const mapa = new Map();

mapa.set('juan', 10);
mapa.set('maria', 4);
mapa.set('sergio', 3);
mapa.set('luna', 8);
mapa.set('harry', 7);

console.log(mapa);

console.log(mapa.get("maria"));

mapa.set("sergio", 6);

console.log(mapa);
console.log(mapa.has("luna"));

for(let elemento of mapa){
    console.log(elemento[0]);
}
