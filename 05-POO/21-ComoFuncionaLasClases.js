/*
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.
*/
/**
 * Cuando hablamos de objetos en JS, estamos hablando de prototipos y
 * no tanto de clases.
 * 
 * Las clases a las finales terminan siendo prototipos.
*/

// para definir un prototipo, lo unico que tenemos que hacer es una función
function Persona() {
    console.log('Me ejecutaron');
}

var sacha = new Persona();

function PersonaDos(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    // implicitamente JS retorna this cuando llamamos a esta función con la palabra new "return this"
}

PersonaDos.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

var sachaDos = new PersonaDos('sacha', 'lifszyc');
sachaDos.saludar();
var erika = new PersonaDos('Erika', 'Luna');
erika.saludar();
var arturo = new PersonaDos('Arturo', 'Martinez');
arturo.saludar();