/**
 * Utilizamos el método **document.querySelector()** para seleccionar elementos HTML específicos, 
 * como el título (<h1>) y el párrafo (<p>).
 */

/**
 * Asignamos el elemento seleccionado a una variable y usamos la propiedad **innerHTML** 
 * para modificar su contenido.
 */

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';


//Ejecutamos la funcion declarada en el html
//Le habiamos dato el nombre de intentoDeUsuario() y le agregamos que function queremos que haga 
function intentoDeUsuario(){
    //puede ser una alerta
    alert('Clic desde el boton');
}