/*
TRANSFORMAR UN ARRAY

En esta clase veremos cómo transformar un array. 
El método map() itera sobre los elementos de un array en el orden de inserción 
y devuelve un array nuevo con los elementos modificados.
*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [
    sacha, alan, martin, dario, vicky, paula
];

console.log(personas[0]);
console.log(personas[0].altura);
console.log(personas[0]['altura']);

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

const esAlta = persona => persona.altura > 1.8;

var personasAltas = personas.filter(esAlta);
console.log(personasAltas);

//

const pasarAlturaACms = persona => {
    return {
        ...persona,
        altura : persona.altura * 100
    };
};
const pasarAlturaACms = persona => ({
        ...persona,
        altura : persona.altura * 100
});
var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);
















