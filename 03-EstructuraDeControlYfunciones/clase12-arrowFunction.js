/**
 * CLASE 12: ARROW FUNCTIONS
 * -----------------------------
 En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura 
 más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.
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

// var esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

function PermitirAcceso(){
    if (!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO');
    }
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
