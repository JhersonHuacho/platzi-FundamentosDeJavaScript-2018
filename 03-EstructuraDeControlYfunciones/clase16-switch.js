var signo = prompt('¿Cual es tu signo?');

if (signo === 'acuario') {
    console.log(`${signo}: Intente aislarte del mundo`);
}

if (signo === 'piscis') {
    console.log(`${signo}: Intente aislarte del mundo`);
}

if (signo === 'cancer') {
    console.log(`${signo}: Intente aislarte del mundo`);
}

switch (signo) {
    case 'acuario':
        console.log(`${signo}: Intente aislarte del mundo`);
        break;
    case 'cancer':
        console.log(`${signo}: Intente aislarte del mundo`);
        break;
    case 'piscis':
        console.log(`${signo}: Intente aislarte del mundo`);
        break;
    case 'geminis':
    case 'géminis':
        console.log(`${signo}: Intente aislarte del mundo`);
        break;
    default:
        console.log('No es un signo zodiacal válido');
        break;
}

