/**
 * 30. Haciendo múltiples requests
 * ----------------------------------------------------------------------------------------------------
 * En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.
 */

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }; // => especificamos que haremos un request externo.
const onPeopleResponse = function(persona) {
  // "arguments" es una variable que tiene todas las funciones que nos va a dar un array con todos los parametros que recibe la función.
  console.log(arguments);
  console.log(`Hola, yo soy ${persona.name}`);
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, onPeopleResponse);
}  

// no sabemos el orden en que nos van a llegar los request. El asincronismo de JS en su maximo explendor. 
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);