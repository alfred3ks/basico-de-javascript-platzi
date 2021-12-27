/*
_______________
VARIABLES EN JS
---------------
*/

// Son los contenedores dentro de la memoria que podemos reservar para guardar los valores, JS tiene una palabra reservada llamada let, para las varables y const para las constantes.

let nombre = "Juan";
console.log(nombre); // Juan

// Existen dos estados de las variables, una es la declaracion y otra es la inicializacion.

// declaramos una variable
let apellido;
console.log(apellido); // undefined

// inicializamos los valores a esa variable
apellido = "Gomez";
console.log(apellido); // Gomez

// Creamos un array con declaracion y iniciacion al mismo tiempo
let equipo = ["PC", "Movil", "Monitor", "Teclado"];
console.log(equipo); // [ 'PC', 'Movil', 'Monitor', 'Teclado' ]
console.log(equipo[1]); // Movil

// Ahora con un objeto
let persona = {
    nombre: "Laika",
    apellido: "De la Concepcion",
    edad: 5
}
console.log(persona); // { nombre: 'Laika', apellido: 'De la Concepcion', edad: 5 }

console.log(persona.nombre); // Laika

/*
Las constantes:
A diferencia de las variables que pueden cambiar a lo largo de nuestro programa, las constantes no. Su valor es inmutable una ves declaradas.
*/

const ciudad = "China";
ciudad = "EEUU"; // Nos da error

/*
Uncaught TypeError: Assignment to constant variable.
*/


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


