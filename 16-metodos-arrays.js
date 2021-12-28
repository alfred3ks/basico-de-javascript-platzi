/*

Vamos a ver varios metodos que podemos usar para los arrays:

Veremos un arrays con diferentes objetos dentro del mismo:

let articulos = [
    {nombre: "Bici",coste: 3000},
    {nombre: "TV",coste: 2550},
    {nombre: "Libro",coste: 320},
    {nombre: "Movil",coste: 900},
    {nombre: "Portatil",coste: 999},
    {nombre: "Teclado",coste: 500},
    {nombre: "Audifonos",coste: 1500}
];

Veamos el primer metodo:

filter() -> valida si algo existe o no y genera un nuevo arrays sin modificar el original, recibe por parametro una funcion y a su ves esta funcion recibe como parametro el elemento que queremos filtrar del array:

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.coste <= 1000;
});

console.log(articulosFiltrados);

Como vemos no modifica el array original.

Veamos el segundo metodo:

map() -> ayuda a maperar ciertos articulos, este tambien genera un nuevo array y no modifica el original:

let articulosMapeados = articulos.map(function(articulo){
    return articulo.nombre;
})
console.log(articulosMapeados);

Veamos un tercer metodo:

find() -> nos ayuda a encontrar un elemento dentro del array, tampoco modifica el arrays original sino crear un nuevo array, si el elemento existe lo devuelve sino no devuelve nada.

let articuloEncontrado = articulos.find(function(articulo){
    return articulo.nombre === "Teclado";
});

console.log(articuloEncontrado);

Vemos un cuarto metodo: Funciona como un ciclo for:

forEach() -> este metodo se le aplica al array y no genera un nuevo array solo recorre el array y devuelve lo que le pidamos si existe:

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

Vemos el quinto metodo:

some() -> este metodo nos regresa true o false si el eleemnto existe ono dentro del arrays original, tambien genera un nuevo array:

let articulosBaratos = articulos.some(function(articulo){
    return articulo.coste <=700;
})

console.log(articulosBaratos);

let articulosBaratos1 = articulos.some(function(articulo){

    if(articulo.coste <=700) {
        console.log(articulo.nombre);
    }
})

*/

let articulos = [
    {nombre: "Bici",coste: 3000},
    {nombre: "TV",coste: 2550},
    {nombre: "Libro",coste: 320},
    {nombre: "Movil",coste: 900},
    {nombre: "Portatil",coste: 999},
    {nombre: "Teclado",coste: 500},
    {nombre: "Audifonos",coste: 1500}
];

let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.coste <= 1000;
});

console.log(articulosFiltrados);

let articulosMapeados = articulos.map(function(articulo){
    return articulo.nombre;
})
console.log(articulosMapeados);

let articuloEncontrado = articulos.find(function(articulo){
    return articulo.nombre === "Teclado";
});

console.log(articuloEncontrado);

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

let articulosBaratos = articulos.some(function(articulo){
    return articulo.coste <=700;
})

console.log(articulosBaratos);

let articulosBaratos1 = articulos.some(function(articulo){

    if(articulo.coste <=700) {
        console.log(articulo.nombre);
    }
})