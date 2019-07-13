/**
 * CLASE 11: FUNCIONES QUE RETORNAN VALORES
 
 En esta clase seguiremos trabajando con condicionales para desglosar las funciones en funciones más pequeñas 
 que retornen un valor.

Debemos de tener en cuenta que el número 18 esta incluido dentro del rango de edad. 
Para ello utilizamos los símbolos >=.

Return detiene la ejecución de una función y devuelve el valor de esa función.

Las variables definidas con const se comportan como las variables, excepto que no pueden ser reasignadas. 
Las constantes pueden ser declaradas en mayúsculas o minúsculas. 
Pero por convención, para distinguirlas del resto de variables, se escribe todo en mayusculas.
 */

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
};

function ImprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero){
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }
    if (persona.cocinero){
        console.log('Cocinero');
    }
    if (persona.cantante){
        console.log('Cantante');
    }
    if (persona.dj){
        console.log('DJ');
    }
    if (persona.guitarrista){
        console.log('Guitarrista');
    }
}
var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 13
};
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
function ImprimirSiEsMayorDeEdad(perona){
    if (esMayorDeEdad(persona)){
        console.log('Sacha es mayor de edad');
    } else {
        console.log('Sacha es menor de edad');
    }
}
ImprimirProfesiones(sacha);
ImprimirSiEsMayorDeEdad(sacha);
ImprimirSiEsMayorDeEdad(juan);
