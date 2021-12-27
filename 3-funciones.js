// Funcion declarativa: ------------------------------------------------------
console.log(`Funciones Declarativas:`);

function saludarEstudiantes(estudiante){
    console.log( `Hola ${estudiante}.` );
}
saludarEstudiantes("Diego");
saludarEstudiantes("Laika");


function sumar(a,b){
    let resultado = a + b;
    console.log(resultado);
    return resultado;
}
sumar(6,8);

console.log(sumar("Luis",6));  // El return dentro de la funcion nos devuelve el resultado

// Funciones anonimas: --------------------------------------------------------
console.log(`Funciones Anonimas:`);

let saludo = function(){
    console.log(`Hola esto es un saludo desde una funcion anonima.`);
}
saludo();

// Funcion flecha: -------------------------------------------------------------
let saludar = ()=>{
    console.log(`Saludos desde una funcion flecha.`);
}
saludar();

// Funcion que retorna o no valores:
let dato1 = (a,b)=>{
    let resultado = a + b;
    return resultado;
}

let dato2 = (a,b)=>{
    let resultado = a + b;
    console.log(resultado);
}

console.log(dato1(7,9));
dato2(8,9);


