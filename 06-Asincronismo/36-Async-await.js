/**
 * 36. Async-await
 * ----------------------------------------------------------------------------------------------------
 *  Async-await es la manera más simple y clara de realizar tareas asíncronas. 
 * Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. 
 * Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, 
 * y encerrar el llamado a Promises.all() dentro de un bloque try … catch..
*/

 /**
  * 
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

async function obtenerPersonajes() {
  var ids = [1,2,3,4];
  var promesas = ids.map(id => obtenerPersonaje(id) );

  try {
    console.log('entro');
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }

}
function prueba() {
  for (let index = 0; index < 1000; index++) {    
    console.log('prueba' + index);    
  }  
}

obtenerPersonajes();
prueba();
