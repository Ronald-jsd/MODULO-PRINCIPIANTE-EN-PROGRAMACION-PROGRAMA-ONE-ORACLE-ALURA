/**
 * Utilizamos el método **document.querySelector()** para seleccionar elementos HTML específicos, 
 * como el título (<h1>) y el párrafo (<p>).
 */

/**
 * Asignamos el elemento seleccionado a una variable y usamos la propiedad **innerHTML** 
 * para modificar su contenido.
 */
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()* 10 )+ 1;  
}

//declarar variables globales
let numeroSecreto = 0;
let nIntentos = 0;


function verificarIntento(){
    nIntentos++;
    let valueVeces = nIntentos > 1? 'veces': 'vez';
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

        if(numeroDeUsuario === numeroSecreto){
            //el usuario acertó
            asignarTextoElemento('p', `¡Felicidades, acertaste! Lo lograste en ${nIntentos} ${valueVeces} `);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            //el usuario no acertó
            if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
            } else{
            asignarTextoElemento('p', 'El numero es mayor');
            }
            limpiarInput();
        }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', '¡Indica un número del 1 al 10!');
     //generar de nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Reiniciar contador a 0
    nIntentos = 0;
}
condicionesIniciales();

function limpiarInput(){
    //limpiar input
    // let limpiar = document.querySelector('#valorUsuario').value ='' ;
    let limpiar = document.querySelector('#valorUsuario');
    limpiar.value = "";
    //enfoque de nuevo
    limpiar.focus();
}

function nuevoJuego(){
    limpiarInput();
    condicionesIniciales();
    //deshabilitar botón
    document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}





