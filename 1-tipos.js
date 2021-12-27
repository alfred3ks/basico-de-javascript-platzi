/*
Todos los lenguajes de programación contienen estructuras de datos, pero estas pueden diferir de un lenguaje a otro.

En Javascript salvo los tipos primitivos, todo lo demás son objetos.

En Javascript existen 6 estructuras de datos primitivas:

    Primitivos:
    - String
    - Number
    - Boolean
    - Symbol (ECMAScript 6)
    - Null
    - Undefined

    - Existen otras estructuras de datos como:
    - Objetos
        - Array
        - Diccionarios
    - Tipos predefinidos por el lenguaje
        - Dates
        - RegExp
    - Tipos definidos por el desarrollador
        - Funciones

*/
/*
-------------------
VALORES PRIMITIVOS:
-------------------
*/
// numberos (Number)
let numero = 40;

// cadenas de textos (String)
let nombre = "Alfredo"; // Podemos usar comillas dobles
let ciudad = 'Madrid'; // Podemos usar simples

// Booleanos (Boolean)
let cierto = true;
let falso = false;

// Valores vacios null y undefined: Para ocupar el espacio en memoria para luego asignarle el valor.
let admin = null;
let edad = undefined;

/*
--------------------
VALORES TIPO OBJETOS:
--------------------
*/

// arrays
let frutas = ["manzanas", "peras", "uvas"];
let array = [1,"Madrid",false,23];

// objetos
let usuario = {
    nombre: "Alfredo",
    apellido: "Sánchez",
    edad: 25,
    isDev:true
}

/*
--------------------
// Para ver los tipos de los valores podemos usar la palabra reservada-> typeof
--------------------
*/

console.log(typeof nombre);// string
console.log(typeof cierto);// boolean
console.log(typeof admin);// object, cosas del lenguaje
console.log(typeof edad);// undefined
console.log(typeof frutas);// object
console.log(typeof usuario);// object
