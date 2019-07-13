/** CLASE 10: CONDICONALES

En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código.

Empezaremos con los condiconales. Los condicionales nos permiten decidir si un código se ejecuta o no. 
También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. 
Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

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

function ImprimirSiEsMayorDeEdad(perona){
    if (persona.edad >= 18){
        console.log('Sacha es mayor de edad');
    } else {
        console.log('Sacha es menor de edad');
    }
}
ImprimirProfesiones(sacha);
ImprimirSiEsMayorDeEdad(sacha);

