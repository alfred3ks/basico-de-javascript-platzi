/*

Los objetos en JS:

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

Veamos como generamos un objeto en JS:

    let objeto = {
        propiedades,
        metodos
    }

    let miAuto = {
        marca: "Toyota",
        modelo: "Corolla",
        annio: 2000
    }

Para acceder a las propiedades del objeto: Por medio de la nomenclatura del punto: Llamamos al objeto.propiedad

    miAuto.marca;
    miAuto.modelo;
    miAuto.annio;

Nuestro objeto a parte de propiedades puede llevar metodos que son funciones:

let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2000,
    detalle: function() {
        console.log(`Auto: ${this.marca} ${this.modelo}, del año: ${this.annio}.`);
    }
}

Para poder ejecutar los metodos, las funciones que estan dentro del objeto:

    miAuto.detalle();

Ahora el this.
el this es una variable que hace referencia a su padre, ose ale objeto, es como si dijeramos miAuto.modelo pero decimos this.modelo

Pruebalo y veras que funciona:

let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2000,
    detalle: function() {
        console.log(`Auto: ${miAuto.marca} ${this.modelo}, del año: ${this.annio}.`);
    }
}

Ahora que ya tenemos un objeto y queremos replicar 30 objeto de un tipo en este caso carro, lo veremos en el siguiente clase. Veremos la funcion constructora que nos ayudara a construir objetos de manera mas facil y rapida.


*/

let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2000,
    detalle: function() {
        console.log(`Auto: ${this.marca} ${this.modelo}, del año: ${this.annio}.`);
    }
}

let miAutomovil = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2000,
    detalle: function() {
        console.log(`Auto: ${miAutomovil.marca} ${miAutomovil.modelo}, del año: ${miAutomovil.annio}.`);
    }
}

console.log(miAuto.annio);
console.log(miAuto.detalle());
console.log(miAuto.detalle());

