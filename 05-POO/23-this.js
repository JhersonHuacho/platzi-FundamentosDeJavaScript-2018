/*
23. El contexto de las funciones: quién es this
-----------------------------------------------
En esta clase explicamos por qué al introducir el arrow function salió un error. 
El error del contexto de this en javascrip es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
*/

/**
 * El prototipo es un objeto más de JS.
*/

function PersonaDos(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // implicitamente JS retorna this cuando llamamos a esta función con la palabra new "return this"
}

PersonaDos.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};
PersonaDos.prototype.soyAlto = () => {
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