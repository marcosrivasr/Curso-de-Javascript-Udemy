var nombre = 'Julio';

function uno(){
    console.log('Inicio funcion 1');

    var nombre = 'Marcos';
    console.log(this.nombre);

    function dos(){
        console.log('Inicio funcion 2');
        var nombre = 'Lena';
        console.log(this.nombre);

        function tres(){
            console.log('Inicio funcion 3');
            let nombre = 'Juan';
            console.log(nombre);
        }

        tres();

    }

    dos();
}

uno();
