/*
El scope en JS:
Es el alcance que tienen las variables, depende mucho de donde declares o inicialices una vriable de si vas a tener acceso a ella o no.

Tenemos dos tipos de scope, el global y el local.

Tenemos el scope global:

Son las variables declaradas en nuestro archivo JS que al ser inicializados en el navegador en ese mommento se genera el scope global. En el scope global tenemos todas las declaraciones de las variables, las funciones, las validaciones, ahi van a existir.

El scope local:

Es un pequeño universo que existe dentro del scope global. Una ves inicializada una funcion, dentro de ella, se va a generar algo que se llama scope local. Solo desde dentro de la funcion tendremos acceso a los datos declarados dentro de ella. Desde el scope local podemos acceder a las variables del scope global, pero al reves no.

*/

// Ejemplo:
// Scope global
let nombre = "Arnold";

function usuario(){
    // Scope local
    let apellido = "Facundo";
    return `${nombre} ${apellido}.`;
}

console.log(usuario());

console.log(nombre); // Juan

console.log(apellido); // Uncaught ReferenceError: apellido is not defined
