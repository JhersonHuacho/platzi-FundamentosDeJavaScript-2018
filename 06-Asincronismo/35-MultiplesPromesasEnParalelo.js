/**
 * 35. Multiples promesas en paralelo
 * ----------------------------------------------------------------------------------------------------
 *  Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos 
 * otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), 
 * con las promesas podemos encadenar llamadas en paralelo, 
 * algo que no es posible usando callbacks.
*/

 /**
  * Las promises se usan solo para cuando hacemos funciones asincronas?
  * Si, están diseñadas para eso, es la promesa que algo va a llegar, 
  * no se sabe cuando pero algo debe llegar, ya sea una respuesta exitosa o un error.
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

var ids = [1,2,3,4];
// var promesas = ids.map(function(id) {
//   return obtenerPersonaje(id);
// });
var promesas = ids.map(id => obtenerPersonaje(id) );

Promise.all(promesas)
  .then(personajes => console.log(personajes))
  .catch(onError);

// obtenerPersonaje(1)
//   .then(personaje => {
//     console.log(`El pesonaje 1 es ${personaje.name}`); 
//     return obtenerPersonaje(2); 
//   })
//   .then(personaje => {
//     console.log(`El pesonaje 2 es ${personaje.name}`); 
//     return obtenerPersonaje(3); 
//   })
//   .then(personaje => {
//     console.log(`El pesonaje 3 es ${personaje.name}`); 
//     return obtenerPersonaje(4); 
//   })
//   .then(personaje => {
//     console.log(`El pesonaje 4 es ${personaje.name}`);     
//   })
//   .catch(onError);  