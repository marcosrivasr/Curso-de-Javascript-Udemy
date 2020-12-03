const p1 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, "uno"); 
}); 
const p2 = new Promise((resolve, reject) => { 
    setTimeout(resolve, 2000, "dos"); 
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "tres");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "cuatro");
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "cinco");
    //reject("reject");
});

//async await
const operacion = new Promise(function(resolve, reject){
    setTimeout(resolve, 3000, "Operación completa**");
});

async function resolver(){
    console.log('inicia operación');
    const res = await operacion;
    console.log(res);
    console.log('termina operación');
}

resolver();

async function resolverTodas(){
    console.log('inicia operación con async/await');
    const res = await Promise.all([p1,p2,p3,p4,p5]);
    console.log('async/await',res);
    console.log('termina operación con async/await');
}

resolverTodas();


  
