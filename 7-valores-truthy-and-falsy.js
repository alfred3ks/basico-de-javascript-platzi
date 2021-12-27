/*

Vamos a ver los valores de los datos, en JS tenemos valores que son verdaderos y otros que son falsos: Es lo que llamamos los valores truthy y otros falsy, y es muy importante sobre todo cuando vamos a aplicar condicionales, en JS los valores tiene un valor por default. O son true o false.

Vamos a utilizar una funcion que nos da el lenguaje Boolean() con la cual vamos a saber si un valor es falso o verdadero:

*/

// Aqui vemos que tipo de valor es algo.
// Valores false
let valor1 = Boolean(0);
console.log( valor1 ); // false

let valor2 = Boolean(null);
console.log( valor2 ); // false

let valor3 = Boolean(NaN);
console.log( valor3 ); // false

let valor4 = Boolean(undefined);
console.log( valor4 ); // false

let valor5 = Boolean(false);
console.log( valor5 ); // false

let valor7 = Boolean("");
console.log( valor7 ); // false

const valor14 = Boolean();
console.log(valor14); // false

// Valore true
let valor8= Boolean(" ");
console.log( valor8 ); // true

let valor9 = Boolean(1);
console.log( valor9 ); // true

let valor10 = Boolean([]);
console.log( valor10 ); // true

let valor11 = Boolean({});
console.log( valor11 ); // true

let valor12 = Boolean(function(){});
console.log( valor12 ); // true

let valor13 = Boolean(true);
console.log( valor13 ); // true