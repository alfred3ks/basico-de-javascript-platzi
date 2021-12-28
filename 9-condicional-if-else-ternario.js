/* Veamos el condicional if-else:

if se utiliza para ejecutar un código si la condición es verdadera.

else, por el contrario, es usado para ejecutar un código si la expresión es falsa.

No necesariamente hay que usar siempre if con else, if puede usarse sólo sin necesidad de evaluar cuando la condición es false.

Vemos como es:

    if(condicion){
        code...
    } else {
        code
    }

    Tambien podemos encadenar varios if o else if, veamos:

    if (condition) {
        code
    }
    if (condition) {
        code
    } else {
        code
    }

    if (condition) {
        code
    } else if(condicion) {
        code
    } else if(condicion){
        code
    } else {
        code
    }

OJO en js tenemos el operador ternario:

Es el único operador en Javascript que necesita tres operando

El funcionamiento es el mismo que un if...else, se evalúa una condición y si esta es true se retorna un valor o, si por el contrario es false, se retorna otro valor.

    condition ? true : false

Ejemplo:

let edad = 25;
let isAdult = (edad >= 18) ? "adulto" : "Joven"; // adulto

*/

// veamos un ejemplo:

let edad = 18;

if (edad === 18) {
    console.log("Eyy puedes ir a votar!! sera tu primera votación.");
} else if(edad > 18){
    console.log("Puedes votar de nuevo.");
} else {
    console.log("No puedes ir a votar, eres menor de edad.");
}

// Veamos el operador ternario:
let numero = 1;
let isAdult = (numero === 1) ? "Soy 1" : "No soy 1";
console.log(isAdult);
