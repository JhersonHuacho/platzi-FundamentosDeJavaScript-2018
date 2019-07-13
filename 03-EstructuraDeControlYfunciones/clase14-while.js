/**
 * CLASE 13: ESTRUCTURA REPETITIVA - FOR
 * --------------------------------------
 En esta clase estudiaremos una de las estructuras básicas de control. 
 El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle, 
y dentro los paŕentesis irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.
 */

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
};
const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const META = sacha.peso - 3;
var dias = 0;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

while (sacha.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(sacha);
    }
    if (realizaDeporte){
        adelgazar(sacha);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazo`);

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarDePeso(sacha);
    } else if (random < 0.5) {
        adelgazar(sacha);
    }
}
console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}Kg`);
console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}Kg`);