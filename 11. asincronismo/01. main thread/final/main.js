
setInterval(() => {
    document.querySelector('#resultado').textContent = new Date();
}, 1000);

for(let i = 0; i< 100; i++){
    console.log('hola');
}
console.log('Fin del ciclo');

console.log('Inicio de timer');
 setInterval(() => {
    console.log('timer activado');
}, 1000);
console.log('Fin de timer');

console.log('inicio ciclo');
for(var i = 0;i < 5; i++){
    setTimeout(function(){
        console.log('count ', i);
    }, 3000);
}
console.log('fin ciclo');

console.log('inicio ciclo 2');
for(let i = 0;i < 5; i++){
    setTimeout(function(){
        console.log('count ', i);
    }, 3000);
}
console.log('fin ciclo 2');