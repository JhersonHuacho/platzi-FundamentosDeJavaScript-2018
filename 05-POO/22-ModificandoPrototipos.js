/* MODIFICANDO UN PROTOTIPO
-----------------------------------
En esta clase veremos cómo se modifican las clases de herencias. 
JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada 
que mantiene un enlace a otro objeto llamado prototipo.
*/

/**
 * El prototipo es un objeto más de JS.
 * Es muy importante donde colocamos las funciones que va tener el prototipo.
 * Es importante que le coloquemos todas juntas.
*/

function PersonaDos(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // implicitamente JS retorna this cuando llamamos a esta función con la palabra new "return this"
}

PersonaDos.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
PersonaDos.prototype.soyAlto = function() {
    return this.altura > 1.8;
};

var sachaDos = new PersonaDos('sacha', 'lifszyc', 1.72);
sachaDos.saludar();
console.log(sachaDos.soyAlto());
var erika = new PersonaDos('Erika', 'Luna', 1.65);
erika.saludar();
console.log(erika.soyAlto());
var arturo = new PersonaDos('Arturo', 'Martinez', 1.89);
arturo.saludar();
console.log(arturo.soyAlto());