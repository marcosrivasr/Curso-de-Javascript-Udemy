const edad = 13;

if(edad >= 18){
    console.log("Eres mayor de edad, puedes obtener tu licencia");
}else{
    console.error("Aún eres menor para conducir");
}

const velocidad = 50;

if(velocidad > 30 && velocidad <=80){
    console.log("Vas a una velocidad permitida");
}else if(velocidad <= 30){
    console.warn("Vas a una velocidad baja, cuidado");
}else{
    console.error("Peligro! vas muy rápido");
}

const fruta = "limon";

if(fruta == "limon"){
    console.log("Puedes hacer agua de ", fruta);
}else if(fruta == "manzana" || fruta == "naranja"){
    console.log("Puedes hacer un jugo de ", fruta);
}else if(fruta == "fresa" || fruta == "platano"){
    console.log("Puedes preparar un licuado de " + fruta);
}else{
    console.log(`La fruta ${fruta} no aparece en mi menú`);
}

switch(fruta){
    case "limon":
        console.log("Puedes hacer agua de ", fruta);
    case "manzana","naranja":
        console.log("Puedes hacer un jugo de ", fruta);
    break;

    case "fresa", "platano":
        console.log("Puedes hacer un licuado de " + fruta);
    break;

    default:
        console.log(`La fruta ${fruta} no aparece en mi menú`);
}

