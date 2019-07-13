/**
 * clase 07: DESESTRUCTURAR OBJETOS
 
En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. 
Ej var{nombre} = persona

Reto: resolver la función que está comentada al final del ejercicio.
 */

var nombre = 'Sacha';
var nombre = 'Dario';

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

function ImprimirNombreEnMayuscula(persona){
    //var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}
ImprimirNombreEnMayuscula(sacha);
ImprimirNombreEnMayuscula(dario);

var obj1 = {
    obj2 : {
        nombre: 'Francisco',
        edad : 30
    }
};

function Saludar(obj1){
    var { nombre, edad } = obj1.obj2;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

function SaludarDos({ obj2: { nombre, edad } }){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

Saludar(obj1);
SaludarDos(obj1);















