

function *nombres(){
    yield 'Juan';
    yield 'Maria';
    yield 'Sergio';
    yield 'Ari';

    return 'Marcos';
}

const iterator = nombres();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());


for (const itItem of iterator) {
    console.log(itItem);
}

function* numero(){
    let contador= 0;
    while(true){
        yield contador;
        contador++;
    }
}

const it2 = numero();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

