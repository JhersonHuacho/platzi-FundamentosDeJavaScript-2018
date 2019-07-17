/* COMO FUNCIONAN LAS CLASES EN JAVASCRIPT
--------------------------------------------
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.
*/

/**
 * Cuando hablamos de objetos en JS, estamos hablando de prototipos y no tanto de clases.
 * Si bien en las nuevas versiones de JS existen lo que son clases, no son clases como tales, como lo podiamos
 * conocer de otros lenguajes de programación. No existe la herencia como tal.
 * 
 * Pero si existen prototipos y vamos a ver que esas "clases" de JS terminan siendo prototipos.
 * 
 * Las clases a las finales terminan siendo prototipos.
*/

// para definir un prototipo, lo unico que tenemos que hacer es definir una función
function Persona() {
    // Esta función Persona() se ejecutara cuando creemos una nueva persona (es como en otros lenguajes se conoce como constructor).
    console.log('Me ejecutaron');
}
// Con new se crea un nuevo objeto y a ese objeto se le va asignar como prototipo el prototipo que le indiquemos.
// Luego se va a ejecutar la función e implicitamente retorna ese objeto que se acaba de construir.
var sacha = new Persona(); 

// Podemos pasarle parametro
function PersonaDos(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // return this;
    // implicitamente JS retorna this cuando llamamos a esta función con la palabra new "return this"
}

PersonaDos.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
PersonaDos.prototype.soyAlto = function() {
    if (this.altura >= 1.8)
        console.log(`Soy alto`);
    else
        console.log("Soy chato");
}

var sachaDos = new PersonaDos('sacha', 'lifszyc');
sachaDos.saludar();

var erika = new PersonaDos('Erika', 'Luna');
erika.saludar();

var arturo = new PersonaDos('Arturo', 'Martinez');
arturo.saludar();