/**
 * CLASE 08: PARAMETROS POR REFERENCIA O COMO VALOR
 
 Javascript se comporta de manera distinta cuando le pasamos un objeto como parámetro.

Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. 
Para solucionar esto se puede crear un objeto diferente. 
Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

 */

 
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
};
// cuando se pasa un objeto se pasa por referencia

function cumpleanos(persona){
    persona.edad += 1;
}
cumpleanos(sacha);

function cumpleanosDos(edad){
    edad += 1;
}
cumpleanosDos(sacha.edad);

// 
function cumpleanosTres(persona){
    return {
        ...persona,
        edad : persona.edad + 1
    };
}
cumpleanosTres(sacha);