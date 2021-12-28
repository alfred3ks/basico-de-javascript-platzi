/*

Los Arrays:

Es una estructura de datos, es un tipo objeto, es una valor que guardara muchos valores dentros, los cuales pueden ser numeros, string u otros objetos.

Su sintaxis es la siguientes: usaremos los corchetes []

    let numeros = [1,2,3,4,5,6];
    let frutas = ["peras", "manzanas", "uvas", "cerezas"];

Para acceder a cada elemento de ese arrays: Recordar que los indices del arrays comienzan en cero (0):

    frutas[2]; // uvas

Existe una atributo por el cual podemos ver si un array contiene elementos dentro: ese es el atributo .length

    frutas.length; // 4

Ahora vamos a ver unos metodos con los cuales podemos trabajar un arrays, osea podemos modificar ese arrays:

Para agregar variables al arrays: Usaremos el metodo .push, agrega elementos al final del arrays:

    frutas.push("fresas");

Para eliminar elementos al array tenemos el metodo .pop(), elimina el ultimo elemento el arrays:

    frutas.pop();

Ahora veremos otro metodo que agrega un elementos al array pero al inicio de este, el metodo es .unshift()

    frutas.unshift("fresas");

Ahora veremos otro metodo que elimina el primer valor del arrays, el metodo es shift()

    frutas.shift();

Ahora veremos otro metodo que nos muestra la ubicacion de un elemento dentro de un arrays:

    frutas.indexOf("cerezas");


*/

let frutas = ["peras", "manzanas", "uvas", "cerezas"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);
console.log(frutas[2]);

frutas.push("fresas");
console.log(frutas);

frutas.pop();

console.log(frutas);

frutas.unshift("fresas");
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(frutas.indexOf("cerezas"));


