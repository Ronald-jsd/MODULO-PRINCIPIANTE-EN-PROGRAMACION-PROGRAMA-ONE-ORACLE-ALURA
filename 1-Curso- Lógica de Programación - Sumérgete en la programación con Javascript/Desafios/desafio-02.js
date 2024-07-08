/**
 * 1.Pregunta al usuario qué día de la semana es. 
 * Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
 * De lo contrario, muestra "¡Buena semana!".
 */
let diaSemana = prompt("Escriba que dia de la semana es hoy:");
diaSemana = diaSemana.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//normalize("NFD") se utiliza para descomponer los caracteres a su forma base (eliminando las tildes).
//.replace(/[\u0300-\u036f]/g, "") elimina cualquier diacrítico (como las tildes).

if(diaSemana == "sabado" || diaSemana == "domingo"){
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

/**
 *2. Verifica si un número ingresado por el usuario es positivo o negativo. 
 * Muestra una alerta informativa.
 */
let numeroUsuario = prompt('Escriba un número por favor:'); 
if(numeroUsuario > 0){
    alert('Su número es positivo');
} else if (numeroUsuario == 0){
    alert('Su número es 0')
} else{
    alert('Su número es negativo');
}

/**
 * 3. Crea un sistema de puntuación para un juego. 
 * Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
 * En caso contrario, muestra "Inténtalo nuevamente para ganar.".
 */
let puntuacion = prompt('Ingrese la puntuación del juego:');

if (puntuacion >= 100){
    alert('¡Felicidades, has ganado!')
} else{
    alert('Inténtalo nuevamente para ganar, recuerde que la puntuación debe ser mayor o igual a 100 para ganar')
}

/**
 * 4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
 * utilizando un ***template string*** para incluir el valor del saldo.
 */
let saldo = 1500;
let mensajeDeSaldo = (`Saldo disponible en su cuenta: ${saldo}`); //concatenación de un valor en una variable
alert(mensajeDeSaldo);

/**
 * 5. Pide al usuario que ingrese su nombre mediante un prompt. 
 * Luego, muestra una alerta de bienvenida usando ese nombre.
 */
let names = prompt('Ingrese su nombre:');
names = names.charAt(0).toUpperCase() + names.slice(1); 
//names sera igual a el primer valor obtenido con charAt(0) 
// ese valor sera convertido a mayúscula
//se concatena con la sub cadena empezando desde el valor de 1 en adelante
//ronald
//r = R
//R + onald
alert(`¡Bienvenido ${names}  ! Ten un buen día`);