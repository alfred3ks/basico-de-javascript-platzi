/*

Ciclos en JS, ciclo For:

El bucle for en javascript es similar al de Java.

Repite la expresión deseada hasta que la condición se evalúa como false.

La expresión inicial puede ser la declaración de una variable o el uso de una expresión con cualquier grado de complejidad.

Mientras la condición sea true el bucle seguirá ejecutándose.

Después de evaluar la condición y que su valor siga siendo true, se ejecuta el código del bucle.

Después de la ejecución del código, se ejecuta la expresión de incremento y el bucle regresa a evaluar la condición.

Veamos su sintaxis:

    for(expresionInicial; condicion; expresionIncremento){
        code....
    }

Veamos un ejemplo:

    let estudiantes = ["Antonio", "Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante) {
        console.log(`Hola ${estudiante}.`);
    }

    for(let i = 0; i < estudiantes.length; i++){
        saludarEstudiantes(estudiantes[i]);
    }

Tenemos una variante al for otra sintaxis: el for of:

    for(let estudiante of estudiantes){
        saludarEstudiante(estudiante)
    }

    for(let elemento of estudiantes){
        saludarEstudiantes(elemento);
    }








*/

let estudiantes = ["Antonio", "Maria", "Sergio", "Rosa", "Daniel"];

    function saludarEstudiantes(estudiante) {
        console.log(`Hola ${estudiante}.`);
    }

    for(let i = 0; i < estudiantes.length; i++){
        //console.log(estudiantes[i]);
        saludarEstudiantes(estudiantes[i]);
    }

    for(let elemento of estudiantes){
        saludarEstudiantes(elemento);
    }