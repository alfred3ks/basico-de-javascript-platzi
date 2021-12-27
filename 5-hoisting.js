/*
Hoisting en JavaScript:

Cuando las variables y las funciones se declaran antes de que se procese cualquier tipo de codigo, esto solo pasa con versiones pasadas de JS, ECMASCript 5 para atras. De ECMASCript 6 ya no sucede porque solo sucede con dos palabras claves, var y function. Las nuevas versiones presentaron nuevas formas de declarar variables que son let y const.

OJO--------
    Las variables y las funciones se procesan antes de ejecutar cualquier codigo y ahi se genera el hoisting, pero las funciones de declaran antes que las variables.
OJO--------
*/

// hoisting en variables:

var miNombre; // declaracion
miNombre = "Pepito"; // inicializacion
console.log(miNombre); // Pepito

console.log(miApellido); // undefined ¿Whatsss?
var miApellido = "Motta";
console.log(miApellido); // Motta

// Aqui se genera hoisting porque esta mandando a llamar una variable antes de declararla y inicializarla, loque hace JS es declarar esa variable asi: var miApellido = undefined; y asi una variable es undefined, por eso el console nos muestra undefined. Vamos a ver como lo hace:

var miApellido = undefined;
console.log(miApellido); // undefined
var miApellido = "Motta"; // aqui inicializamos
console.log(miApellido); // Motta

// hoisting en funciones:

saludo();
function saludo(){
    console.log(`Hola mi NOMBRE es ${nombre}....`); // Hola mi nombre es undefined
}

var nombre= "Abrines";
saludo();

/*
Aqui vemos lo mismo, se produce un hoistin, JS declara encima la variable var nombre = undefined; y luego cuando se produce el console tenemos esa salida.
*/

var nombre = undefined;
function hey(){
    console.log(`Hola mi nombre es ${nombre}`); // Hola mi nombre es undefined
}
hey();

var nombre= "Abrines";

/*

NOTA:
    Por buenas practicas se recomienda declarar todas las variables al inicio del codigo.

*/

