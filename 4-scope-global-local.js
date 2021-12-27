// Ejemplo:
// Scope global

let nombre = "Arnold";

// Creamos una funcion:

function usuario(){
    // Scope local
    let apellido = "Facundo";
    return `${nombre} ${apellido}.`;
}

console.log(usuario());

console.log(nombre); // Juan

console.log(apellido); // Uncaught ReferenceError: apellido is not defined
