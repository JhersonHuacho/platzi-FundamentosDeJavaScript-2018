/** Clase 01 : VARIABLES
 * Una cosa a tener a encuenta, y que es algo fundamental, es la debilidad a la hora de tipar variables.
 * JavaScript es un lenguaje debilmente tipado.
 * Significa que no hay nada que diga que la variable nombre tiene que ser texto y que solo acepte valores de tipo string.
 * 
 */

var nombre = 'Francisco';
var apellido = 'Huacho';
var edad = 28;

console.log('Hola ' + nombre + ' ' + apellido);
console.log('Tengo ' + edad + ' ' + ' años');

/** Clase 02: VARIABLES: Strings
 * Los strings son cadenas de textos.Para indicar que estamos usando un string debemos de colocar las comillas simples.
 * 
 * ALT + 96
 */

 var nombreEnMayusculas        = nombre.toUpperCase();
 var apellidoEnMinusculas      = apellido.toLowerCase();
 var primeraLetraDelNombre     = nombre.charAt(0); //charAt = caracter en la posición
 var cantidadDeLetrasDelNombre = nombre.length;
 var nombreCompleto            = `${nombre} ${apellido.toUpperCase()}`;//nombre + ' ' + apellido;// interpolación de string
 var str = nombre.charAt(1) + nombre.charAt(2);
 str = nombre.substr(1, 2);
 
/** Clase 03: VARIABLES: Números
En esta clase aprenderemos variables de tipo números y las operaciones más comunes en este tipo de variables.
En esta clase veremos operadores matemáticos como:

    suma ( + )
    resta ( - )
    multiplicación
    división

Recuerda que en operaciones con decimales debemos realizar operaciones adicionales
para conseguir un resultado preciso. Ej. var total = ( precioDeVino * 100 * 3) / 100

Para redondear una operación se utiliza la función: Math.round
 */

edad += 1; // edad = edad + 1;
var peso = 75;
peso = peso -2;
peso -= 2;
var sandwich = peso + sandwich;
var jugarAlFutbol = 3;
peso -= -jugarAlFutbol;

// En JS la manera de almacenar decimales no es tan precisa, de acuerdo a que destina cierta cantidad de Bytes en la memoria RAM
// de la computadora para asignar un decimal, entonces no termina de ser tan preciso.
var precioDeVino = 200.3;
var total = precioDeVino * 3; // 600.9000000000001
// para sobrepasar este problema de la variable "total"
var totalPrecisoUnDecimal = precioDeVino * 100 * 3 / 100;
// esto funciona porque justo tiene un decimal, pero si no estamos seguro de cuantos decimales hay,
// tenemos que hacer un cuenta mucho mas compleja.
// Vamos a acceder a un modulo de JS global que es el de matemáticas.
var totalPreciso = Math.round(precioDeVino * 100 * 3) / 100; // esto funciona sin importar la cantidad de decimal
var strTotalPreciso = strTotalPreciso.toFixed(2);// siempre ten encuenta dos decimales despues de la coma
// parse, significa transformar, leer de un string a un decimal en este caso.
var totalDos = parseFloat(strTotalPreciso);
var pizza = 8;
var persona = 2;
var cantidadDePorcionesPorPersona = pizza / persona;










