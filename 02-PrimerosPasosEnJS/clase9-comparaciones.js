/**
 * CLASE 09: Comparaciones
 
 Existen varias maneras de comparar variables u objetos dentro de javascript. 
 En el primer ejemplo le asignamos a X un valor numérico y a Y un string. 
 Para poder compararlos debemos agregar dos signos de igual (==). 
 Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). 
Esto permite que JavasScript no iguale las variables que son de distinto tipo.
Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
Symbol() ES6

 */
var x = 4, y = '4';

console.log(x == y); // true
console.log(x === y); // false
// cuando se habla de referencia se refiere a la dirección en memoria de un objeto Es lo que se llama PUNTERO.
var sacha = {
    nombre: 'Sacha'
};

var otraPersona = {
    nombre: 'Sacha'
};
// lo que hace aca es distinto al ejemplo anterior en el cual estabamos comparando valores primitivos.
// aca estamos comparando objetos y cuando comparamos objetos en JS tanto con el "==" o "===" lo que hace JS
// es preguntar por la referencia a la variable que estamos utilizando.
console.log(sacha == otraPersona); // false
console.log(sacha === otraPersona); // false
// cuando la referencia es la misma a la variable? para que de true
// lo que estamos haciendo es que "otraPersonaDos" apunta a la misma referencia de variable que apunta "sacha",
// al mismo lugar de memoria de la computadora que apunta esta variable "sacha".
var otraPersonaDos = sacha;
console.log(sacha == otraPersonaDos); // true
console.log(sacha === otraPersonaDos); // true
// "otraPersonaTres" es un nuevo objetp
var otraPersonaTres = {
    ...sacha // ...sacha crea un nuevo objeto, por lo tanto es otro lugar en memoria RAM
};
console.log(sacha === otraPersonaTres);// false



