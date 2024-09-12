/**
 * Utilizamos el método **document.querySelector()** para seleccionar elementos HTML específicos,
 * como el título (<h1>) y el párrafo (<p>).
 */

/**
 * Asignamos el elemento seleccionado a una variable y usamos la propiedad **innerHTML**
 * para modificar su contenido.
 */

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function obtenerID(idElement) {
    return document.getElementById(idElement);
}
function limpiarInput() {
    //limpiar input
    let limpiar = document.querySelector("#valorUsuario");
    limpiar.value = "";
    //enfoque de nuevo
    limpiar.focus();
}
function focusIntentosMax() {
    let limpiar = obtenerID("aciertoMaximo");
    limpiar.focus();
    limpiar.value = "";
    let limpiarnu = document.querySelector("#valorUsuario");
    limpiarnu.value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros, mostrar mensaje y terminar juego
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
        return null;
    } else {
        //si numero generado esta incluido en la lista, vuelve a genera numero random:
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //si el numero no esta incluido en mi lista, guardo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    asignarTextoElemento("p", `¡Indica un número del 1 al ${numeroMaximo}!`);
    obtenerID("inputIntentos").innerHTML = `Ingresar la cantidad maxima de intentos`;
    //generar de nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Reiniciar contador a 0
    nIntentos = 0;
    listaNumerosSorteados = [];
    nMaxIntento = 0;
    // Limpiar el valor del input de intentos máximos
    obtenerID("aciertoMaximo").value = 0;
    // Limpiar mensajes de error
    obtenerID("inputIntentosError").innerHTML = "";
}
function nuevoJuego() {
    condicionesIniciales();
    //deshabilitar botón
    obtenerID("reiniciar").setAttribute("disabled", "disabled");
    focusIntentosMax();
}
function asignarIntento() {
    nMaxIntento = parseInt(obtenerID("aciertoMaximo").value);
    obtenerID("inputIntentos").innerHTML = `Guardado con éxito(N° intentos: ${nMaxIntento})`;
    obtenerID("inputIntentosError").innerHTML = "";
}

//declarar variables globales
let numeroSecreto = 0;
let nIntentos = 0;
//lista de numeros que ya fueron sorteados y no se vuelvan a repetir
let listaNumerosSorteados = [];
let numeroMaximo = 10;
var nMaxIntento = 0;

function intentoPrincipal() {
    if (nMaxIntento >= 1) {
        verificarIntento();
    } else {
        obtenerID("inputIntentosError").innerHTML ='<p style="color:red">Debe ingresar una cantidad</p>';
    }
}
function verificarIntento() {
    nIntentos++;
    if (nIntentos <= nMaxIntento) {
        let valueVeces = nIntentos > 1 ? "intentos" : " intento ";
        let numeroDeUsuario = parseInt(obtenerID("valorUsuario").value);

        if (numeroDeUsuario === numeroSecreto) {
            //el usuario acertó
            asignarTextoElemento("p",`¡Felicidades, acertaste! <br>  Lo lograste en ${nIntentos} ${valueVeces} `
            );
            obtenerID("reiniciar").removeAttribute("disabled");
            //  intentoPrincipal();
        } else {
                numeroDeUsuario > numeroSecreto ? asignarTextoElemento("p",`El numero es menor <br> (N° Intentos: ${nIntentos})`)  
                : asignarTextoElemento("p",`El numero es mayor <br>  (N° Intentos: ${nIntentos})`);
            //el usuario no acertó
            /*if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("p",`El numero es menor (N° Intentos: ${nIntentos})`
                );
            } else {
                asignarTextoElemento("p",`El numero es mayor (N° Intentos: ${nIntentos})`
                );
            }*/

            limpiarInput();
        }
    } else {
        asignarTextoElemento("p", "Has alcanzado el número máximo de intentos");
        obtenerID("reiniciar").removeAttribute("disabled");
    }
}

condicionesIniciales();