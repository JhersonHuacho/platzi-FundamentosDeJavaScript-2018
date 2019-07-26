/**
 * 30. Manejando el Orden y el Asincronismo en JavaScript
 * ----------------------------------------------------------------------------------------------------
 * Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, 
 * con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. 
 * Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.
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

  $.get(url, opts, function(persona) {    
    console.log(`Hola, yo soy ${persona.name}`);

    if (callback) {
      callback();
    }
  });
}  

// no sabemos el orden en que nos van a llegar los request. El asincronismo de JS en su maximo explendor. 
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);

obtenerPersonaje(1, function() {
  obtenerPersonaje(2, function() {
    obtenerPersonaje(3, function() {
      obtenerPersonaje(4);
    });
  });
});