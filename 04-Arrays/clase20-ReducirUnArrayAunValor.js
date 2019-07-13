/*
REDUCIR UN ARRAY A UN VALOR
---------------------------

El método reduce() nos permite reducir, 
mediante una función que se aplica a cada uno de los elemento del array, 
todos los elementos de dicho array, a un valor único.
*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
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

// map()

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

// reduce()
var acum = 0;
for (let i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros;
}

console.log(`En total todos tienen ${acum} libros`);

const reducer = (acum, { cantidadDeLibros }) => {
    return acum + cantidadDeLibros;
};

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${acum} libros`);















