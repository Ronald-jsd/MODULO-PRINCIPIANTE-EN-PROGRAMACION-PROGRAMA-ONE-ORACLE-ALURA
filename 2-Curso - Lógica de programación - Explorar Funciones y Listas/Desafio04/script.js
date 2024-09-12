/*Desafíos
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = new Array();

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
var lenguagesDeProgramacion = [];
lenguagesDeProgramacion[0] = "Java";
lenguagesDeProgramacion[1] = "Ruby";
lenguagesDeProgramacion[2] = "Golang";

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguagesDeProg(){
console.log(lenguagesDeProgramacion);
}
mostrarLenguagesDeProg();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function inversoLenguajesDeProg(){
    for(i = lenguagesDeProgramacion.length-1; i>=0 ;i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
inversoLenguajesDeProg();

//Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(valoresDeArray){
let numerosArray = valoresDeArray;
let suma=0;
let promedio=0;
for(i=0; i<numerosArray.length;i++){
    suma+=numerosArray[i]
}
promedio = suma/numerosArray.length;
console.log(`Promedio: ${promedio}`);
}
promedio([1,2,3,4,100]);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function arrayNumeroMayorMenor(valoresDeArray){
    let nMenor=valoresDeArray[0];
    let nMayor=valoresDeArray[0];
    for(i=0 ;i<valoresDeArray.length;i++){
        if(valoresDeArray[i]<nMenor){
            nMenor = valoresDeArray[i];
        }
        if(valoresDeArray[i]>nMayor){
            nMayor=valoresDeArray[i]
        }
    }
        console.log(`N° menor array: ${nMenor}`);
        console.log(`N° menor array: ${nMayor}`);
        return;
}
let numerosMM = [5,8,2,100,4,0.005,897,1.99,454.99,1,788,0.89,477]
arrayNumeroMayorMenor(numerosMM);

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarLista(numArray){
    //asignando a una variable el elemento
    //let numerosLista = numArray;
    //forma directa con el elemento
    let sumaNumeros=0;
    for(i = 0;i<numArray.length;i++){
        sumaNumeros+=numArray[i];
    }
    return console.log(`Suma de lista: ${sumaNumeros}`);
}
let numSumar = new Array(5,3,4,10,300,2,1);
sumarLista(numSumar);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicion(arrayElementos, elemento){
    for(i=0;i<arrayElementos.length;i++){
        if(arrayElementos[i] == elemento.toLowerCase()){
            return i;
        } 
    }
    return -1;
}
let listaElementos = ["galleta", "golosina", "puerta", 4,"luna", 1];
let valor = posicion(listaElementos,"luna");
console.log(valor);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarDosListas(lista1, lista2){
    let nuevalista = [];
    if(lista1.length != lista2.length){
        return console.log("El tamaño de las listas no son iguales")
    } else{
        for(i=0;i<lista1.length;i++){
            //nuevalista[i] = lista1[i] + lista2[i];
            nuevalista.push(lista1[i] + lista2[i]);
        }
        return console.log(nuevalista);
    }
}
let listaUno = [4,5,9,6];
let listaDos = [100,7,5,760];
sumarDosListas(listaUno, listaDos);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function listaAlCuadrado(listaNumeros){
    let nuevaLista = [];
    for(i = 0;i<listaNumeros.length;i++){
        nuevaLista.push(Math.pow(listaNumeros[i],2) )
    }
    return console.log(nuevaLista);
}
miListaDeNumeros = new Array(1,2,3,999);
listaAlCuadrado(miListaDeNumeros);