/*
* CLASES EN JAVASCRIPT
-------------------------------
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia 
basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
*/

/*
ECMASCRIPT es el estandar en la cual se basa JavaScript para conformarse como lenguaje.

 */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}

var sacha = new Persona('Sacha','Lifszyc',1.72);
sacha.saludar();
sacha.soyAlto();


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}

var arturo = new Desarrollador('Arturo', 'Martinez', 1.89);
arturo.saludar();