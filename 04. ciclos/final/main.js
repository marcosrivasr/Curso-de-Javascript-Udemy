let i = 0;

for(let i = 1; i <= 10; i++){
    console.log(i + ' Hola');
}

for(let i = 10; i >= 1; i--){
    console.log(i);
}

for(let i = 1, j = 2; i < 400; i *= j, j *= j){
    console.log(i, j);
}
console.log("Final del ciclo");


const archivo = "Bienvenidos al curso de Javascript/";

// do while
let contador = 0;
let letra = '';
let texto = '';

do{
    letra = archivo[contador];
    contador++;
    texto += letra;
}while(letra != '/');

console.log(texto);

contador = 0;
texto = '';
letra = '';
// while
while(letra != '/'){
    letra = archivo[contador];
    contador++;
    texto += letra;
}

console.log(texto);

