/*
24. La verdad oculta sobre las clases en JavaScript
-----------------------------------------------
Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. 
Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto 
sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre 
una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
*/

/**
 * No hay clases, hay prototipos que son objetos, que le vamos agregando metodos que reciben funciones, saben
 * quien es this y sabe como ejecutarlas.
 * Pero no existe un sistema como tal, donde yo diga este prototipo va heredar de otro. 
 * Lo que si existe es la herencia prototipal. 
*/

// todas las funciones tienen el atributo prototype
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function PersonaDos(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

PersonaDos.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
PersonaDos.prototype.soyAlto = function () {
    return this.altura > 1.8; 
};

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}



var sachaDos = new PersonaDos('sacha', 'lifszyc', 1.72);
var erika = new PersonaDos('Erika', 'Luna', 1.65);
var arturo = new PersonaDos('Arturo', 'Martinez', 1.89);