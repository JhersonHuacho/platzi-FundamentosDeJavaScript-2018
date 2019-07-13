/**
 * clase 06 : OBJETOS
 * ---------------------
 Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, 
 cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.

Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". 
Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. 
Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, 
nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. 
Esto se consigue encerrando el nombre del atributo entre llaves { }.

JS es dinamicamente tipado
c++ es estaticamente tipado

*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
};

function ImprimirNombreEnMayusculaPorNombre(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}
ImprimirNombreEnMayusculaPorNombre(sacha.nombre);
ImprimirNombreEnMayusculaPorNombre(dario.nombre);

function ImprimirNombreEnMayusculaPorObjeto(persona){
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}
ImprimirNombreEnMayusculaPorObjeto(dario);
ImprimirNombreEnMayusculaPorObjeto(sacha);

function ImprimirNombreEnMayusculaDesglosandoElObjeto({ nombre }){
    console.log(nombre.toUpperCase());
}
ImprimirNombreEnMayusculaDesglosandoElObjeto(dario);
ImprimirNombreEnMayusculaDesglosandoElObjeto(sacha);

ImprimirNombreEnMayusculaDesglosandoElObjeto({ nombre : 'pepito' });
//ImprimirNombreEnMayusculaDesglosandoElObjeto();//error
//ImprimirNombreEnMayusculaDesglosandoElObjeto({ apellido : 'pepito' });//error

