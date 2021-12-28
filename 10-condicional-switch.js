/*

Condicional switch:

Permite evaluar una expresión e intentar asociar si valor a diferentes etiquetas de caso(case).

Si encuentra alguna coincidencia ejecuta la sentencia correspondiente a ese case.

En caso de que no encuentre coincidencia, se declara una sentencia “default” que se ejecutará en este caso.

Veamos como es su sintaxis:

    switch (key) {
        case value:
            code
            break;

        default:
            code
            break;
    }

Hace lo mismo que un if pero para situaciones mas largas, por eso un problema donde tengamos que evaluar muchos casos.

Veamos un ejemplo:

let numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno");
        break;
    case 2:
        console.log("Soy dos");
        break;
    case 3:
        console.log("Soy tres");
        break;
    default:
        console.log("Yo no soy un numero");
        break;
}

*/

let numero = 3;

switch (numero) {
    case 1:
        console.log("Soy uno.");
        break;
    case 2:
        console.log("Soy dos.");
        break;
    case 3:
        console.log("Soy tres.");
        break;
    default:
        console.log("Yo no soy un numero de evaluacion.");
        break;
}

if (false === !true) {
    console.log(false == true)
} else {
    console.log(true === !false)
}