/*
Coerción: es el cambio de tipo de las variables.

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:

Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

*/

// Ejemplos: aqui vemos una coerción implicita donde JS hace una concatenación, hay dos valores de diferentes tipos, y cambia el tipo del resultado a string.

let a = 4;
let b = "7"
let suma = a + b;
console.log(suma); // "47"
console.log( typeof suma); // string what????

let producto = a * b;
console.log(producto); // 28
console.log( typeof producto); // number pero whatsss???

// Ahora veremos unos ejemplos de coerción explicita:
let c = 20;
let d = c + " ";
console.log(d); // "20"
console.log( typeof d ); // string

// Nosotros obligamos el cambio de tipo, osea hacer una coercion explicita
let f = 30;
let g = String(f);
console.log(g); // "30"
console.log(typeof g); // string

let h = Number(g);
console.log(h); // 30
console.log( typeof h); // number

