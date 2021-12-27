// VARIABLES:

// Declaracion de una variable:
let nombre;

// Asignamos valor a la variable:
nombre = "Pepe";

// Creamos un array con declaracion y iniciacion al mismo tiempo:
let equipo = ["PC", "Movil", "Monitor", "Teclado"];

console.log(equipo); 
// [ 'PC', 'Movil', 'Monitor', 'Teclado' ]

console.log(equipo[1]); 
// Movil

//Ahora con un objeto:
let persona = {
    nombre: "Laika",
    apellido: "De la Concepcion",
    edad: 5
}

console.log(persona); 
// { nombre: 'Laika', apellido: 'De la Concepcion', edad: 5 }

console.log(persona.nombre); 
// Laika

// CONSTANTES:
const ciudad = "China";

// A diferencia de las variables que pueden cambiar a lo largo de nuestro programa, las constantes no. Su valor es inmutable una ves declaradas.

ciudad = "España"; 
// Uncaught TypeError: Assignment to constant variable.


