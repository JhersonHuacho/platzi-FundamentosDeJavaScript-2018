/**
 * 32. Manejando errores con Callbacks
 * ----------------------------------------------------------------------------------------------------
 */

 /**
  * lo que perdemos con los callbacks es el paralelismo de los request.
  */
const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }; // => especificamos que haremos un request externo.

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

  $.get(url, opts, callback).fail(function() {
    console.log(`Sucedio un error. No se puedo obtener el presonaje.`);
  });
}  

// no sabemos el orden en que nos van a llegar los request. El asincronismo de JS en su maximo explendor. 
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);

obtenerPersonaje(1, function(persona) {  
  console.log(`Hola, yo soy ${persona.name}`);  

  obtenerPersonaje(2, function(persona) {
    console.log(`Hola, yo soy ${persona.name}`);

    obtenerPersonaje(3, function(persona) {
      console.log(`Hola, yo soy ${persona.name}`);

      obtenerPersonaje(4, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`);  
      });
    });
  });
});