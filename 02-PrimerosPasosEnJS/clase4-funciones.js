/* 04 FUNCIONES:
 Las funciones son fracciones de código reutilizables. Para definir una funciónutilizaremos la palabra reservada "function".

 */
var nombre = 'Sacha', edad = 28;

function ImprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`);
}

ImprimirEdad(nombre, edad);
ImprimirEdad('Vicky', 28);

/** 05 EL ALCANCE DE LAS FUNCIONES
En esta clase hablaremos del alcance que tienen las funciones. 
Si una variable no está definida dentro del cuerpo de una función hablamos de una variable global. 
Por el contrario, una variable definida dentro de una función es una variable local.

Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.

Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.
*/

var nombreDos = 'Sacha';

function ImprimirNombreEnMayuscula(){
    nombreDos = nombreDos.toUpperCase();
    console.log(nombreDos);
}

ImprimirNombreEnMayuscula();
// esta variable "nombreDos" se le asigna al objeto global, y este objeto global depende de donde estemos ejecutando JS.
// tal vez le estemos ejecutando en un SERVIDOR, entoces seria en el entorno de NODE y si le estamos ejecutando en el
// browser el objeto global es "window".
