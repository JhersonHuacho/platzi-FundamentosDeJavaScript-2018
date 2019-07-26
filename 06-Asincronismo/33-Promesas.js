/**
 * 33. Promesas
 * ----------------------------------------------------------------------------------------------------
 * En esta clase veremos las promesas, que son valores que aun no conocemos. 
 * Las promesas tienen tres estados:
 *      - pending
 *      - fullfilled
 *      - rejected
 * 
 * las promesas se invocan de la siguiente manera:
 * 
  new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
      // -- se ejecutó el llamado exitosamente
      resolve()
    } else {
      // -- hubo un error en el llamado
      reject()
    }
  } )
 
*/

 /**
  * Si nos queremos asegurar de que nuestras promesas corran en todos los navegadores, podriamos usar lo que 
  * se llama un polyfill, que detecta que si el navegador donde esta corriendo nuestro código no tiene
  * el soporte para promesas va a crear las clases de las promesas por nosotros y asi podemos utilizarla.
  * 
  * Pensemos las promesas como valores que aun no conocemos. 
  * Es la promesa que ahi va ver un valor cuando una acción asincrona suceda y se resuelva.
  * - pending: una promesa inica en este estado
  * - fulfilled: cuando la promesa se resuelve exitosamente.
  * - rejected: si sucede algún error.
  * 
  * Las promesas funcionan de manera asincrona, pero no siempre es así.
  */
const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true }; // => especificamos que haremos un request externo.

function obtenerPersonaje(id) {
  return new Promise(function(resolve, reject) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, function(data) {
      resolve(data);
    }).fail(() => reject(id));  
  });    
}  

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}.`);
}

obtenerPersonaje(1)
  .then(function(personaje) {
    console.log(`El pesonaje 1 es ${personaje.name}`);  
  })
  .catch(onError);  