/**
 * Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'.
 *  Muestra cada número.
 */
let contador = 1;

while(contador<=10){
    console.log(`${contador}`);
    contador++;
    
}

/**
 * Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
 *  Muestra cada número.
 */
let contadorb = 10;

while(contadorb > 0){
    console.log(`${contadorb}`);
    contadorb--;
}

/**
 * Crea un programa de cuenta progresiva. 
 * Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
 * en la consola del navegador.
 */

let numeroUsuario = prompt('Escriba un numero:');
let contadorc = 0;

while(contadorc <= numeroUsuario){
    console.log(`${contadorc}`);
    contadorc++;    
}

