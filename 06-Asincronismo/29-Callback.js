/**
 * 29. Callback
 * ----------------------------------------------------------------------------------------------------
 * En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.
 * 
 * Un callback es una función que se pasa a otra función como un argumento. 
 * Esta función se invoca, después, dentro de la función externa para completar alguna acción.
 */

 /**
  * Un Callback es una función que se va ejecutar en algun futuro.
  * 
  */

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }; // => especificamos que haremos un request externo.

$.get(lukeUrl, opts, function(data) {
    // "arguments" es una variable que tiene todas las funciones que nos va a dar un array con todos los parametros que recibe la función.
    console.log(arguments);
    console.log(`Hola yo soy, ${data.name}`);
});  