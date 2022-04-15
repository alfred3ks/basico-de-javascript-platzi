/*

Objetos, funcion constructora: Generaremos un template del objeto y luego vamos a construir los objetos.

Construimos nuestro template: Recibe las propiedades por parametro:
Tambien por convension llamaremos en mayuscula la funcion:

    function Auto(marca, modelo, annio){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;

    }

Ahora para construir un objeto necesitariamos la palabra reservada new:

    let miAuto = new Auto("Toyota", "Corolla", 2000);
    miAuto.marca;
    miAuto.modelo;
    miAuto.annio;

*/

function Auto(marca, modelo, annio){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }


let auto1= new Auto("Toyota", "Corolla",2000);
console.log(auto1.marca);
console.log(auto1.modelo);
console.log(auto1.annio);

let auto2 = new Auto("Tesla", "Model 3", 2010);
console.log(auto2.marca);
console.log(auto2.modelo);
console.log(auto2.annio);


