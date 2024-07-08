//doble comillas para variables
//alert('Hola mundo');
//let declaración de variable
//prompt para mostrar un cuadro de entrada // va con doble comillas



//Variables
let numeroUsuario  = 0;
let contadorIntento = 0;
let maximosIntentos = 3;

let minNumero = parseInt(prompt('Escoja el primer número del rango:'));
let maxNumero = parseInt(prompt('Escoja el último número del rango:'));
let numeroSecreto = Math.floor(Math.random()* maxNumero) + minNumero;
console.log(numeroSecreto);

while(numeroUsuario!=numeroSecreto){
   
    let numeroUsuario = parseInt(prompt(`Ingresa un numero entre ${minNumero} y ${maxNumero} por favor`));
    contadorIntento++;
    //Este código realiza la comparación de números
    if(numeroSecreto == numeroUsuario){
        //Acertamos, fue verdadera la condición
        alert(`¡Genial! El número es: ${numeroUsuario}. Lo lograste en ${contadorIntento} ${contadorIntento == 1? 'vez': 'veces'}`);
        break;
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero es mayor');
        }
        palabraVeces = 'Veces';  
        }  
        if(contadorIntento == maximosIntentos){
            alert(`Llegaste al máximo de ${maximosIntentos} intentos`);
            break;
        }          
}



/*
function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinaElNumero(min, max, intentos) {
    const numeroSecreto = obtenerNumeroAleatorio(min, max);
    let contadorIntento = 0;

    while (contadorIntento < intentos) {
        const numeroUsuario = parseInt(prompt(`Ingresa un número entre ${min} y ${max}:`));
        contadorIntento++;

        if (numeroSecreto === numeroUsuario) {
            alert(`¡Acertaste! El número es ${numeroUsuario}. Lo lograste en ${contadorIntento} ${contadorIntento === 1 ? 'intento' : 'intentos'}.`);
            break;
        } else {
            const pista = numeroUsuario > numeroSecreto ? 'menor' : 'mayor';
            alert(`El número secreto es ${pista}.`);
        }
    }

    if (contadorIntento === intentos) {
        alert(`Llegaste al máximo de ${intentos} intentos. El número secreto era ${numeroSecreto}.`);
    }
}

const minimo = parseInt(prompt('Ingresa el primer número del rango:'));
const maximo = parseInt(prompt('Ingresa el último número del rango:'));
const maxIntentos = 3;

adivinaElNumero(minimo, maximo, maxIntentos);

*/



/**
 * hola
 */

//hola