/*
Vamos a ver que son los operadores en JS:

Operadores de operacion, nos permiten realizar operaciones matematicas:

Operaciones matematicas: Tambien conocidos como operadores binarios:

    Suma: +
    Resta -
    Producto *
    Division /

Operadores ! -> significa que es un NO, una negacion, son conocidos como operadores unitarios:

    !false // true

Operador asignacion: = a la variable le asignamos ese valor.

    let nombre = "Alfredo";

Operador de comparacion: Tenemos el doble igual (==) y triple igual (===), el < <= > >= tambien tenemos los comparadores logicos && que es el y, y el || or que es el o:

Con el doble igual solo comparamos el valor no el tipo:

    let num = 3;
    let num1 = "3";

    num == num1; // true

Con el triple igual compara el valor y el tipo:

    num === num1; // false
    num<num1 // false
    num<=num1 // true
    num>num1 // false
    num>=num1 // true

En el manual de Javascript anexo vemos los diferentes tipos que tenemos.


*/

// Ejemplos:

let a = 4;
let b = 5;

let nombre = "Alfredo";
let apellido = "Sánchez";

// Suma:
let suma = a + b; // 9
let nombreCompleto = nombre + " " +  apellido; // Alfredo Sánchez

// Resta:
let resta = a - b; // -1

// Producto:
let producto = a * b; // 20

// Division:
let division = a / b; // 0.8

// Operadores unitarios:
let bool = true;
let boolNegado = !bool; // false

// Operadores de comparacion:
let num = 3;
let num1 = "3";

console.log(num == num1); // true
console.log(num === num1); // false

console.log(num<num1); // false
console.log(num<=num1); // true
console.log(num>num1); // false
console.log(num>=num1); // true

