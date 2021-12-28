/*

Ciclo while:

Crea un bucle que ejecuta una sentencia mientras cierta condición sea true.
Este ciclo se llama un tipo de ciclo indeterminado solo parara cuando la condicion no se cumpla, ojo con este tipo de ciclo que podemos hacer un ciclo infinito.

¿Es posible crear un bucle infinito?
Si es así, ¿qué pasaría si ejecutamos un bucle infinito en nuestro código? que nuestra app podria bloquearse.

Veamos su sintaxis:

while (condition) {
    code
}

Veamos un ejemplo:

    let estudiantes = ["Antonio", "Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante) {
        console.log(`Hola ${estudiante}.`);
    }

    while ( estudiantes.length > 0) {
        let estudiante = estudiantes.shift();
        console.log(estudiantes);
        saludarEstudiantes(estudiante);
    }

*/

let estudiantes = ["Antonio", "Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante) {
        console.log(`Hola ${estudiante}.`);
    }


    while ( estudiantes.length > 0) {
        let estudiante = estudiantes.shift();
        console.log(estudiantes);
        saludarEstudiantes(estudiante);
    }