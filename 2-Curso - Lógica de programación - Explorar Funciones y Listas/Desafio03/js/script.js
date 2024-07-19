//métodos adicionales
function asignarTexto(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerText = texto;
}
function obtenerValor(elementID){
    return parseFloat(document.getElementById(elementID).value)||0.0;
}
function clear(elementID){
    let text = document.getElementById(elementID);
    text.value='';
    text.focus();
}


function clearAll(){
clear('height');
clear('numeroF');
clear('numeroDolar');
clear('baseV');
clear('alturaV');
clear('radioValue');
clear('numMult');
asignarTexto('resultado', 'Resultado:');
asignarTexto('resultadoFactorial', 'Resultado:');
asignarTexto('resultadoDolar', 'Resultado:');
asignarTexto('resultateAP', 'Resultado:');
asignarTexto('resRadio', 'Resultado:');
asignarTexto('multiTable','Resultado');
clear('weight');
}

/**
 * Crea una función que calcule el índice de masa corporal (IMC) 
 * de una persona a partir de su altura en metros y peso en kilogramos, 
 * que se recibirán como parámetros.
 */
function calculateBmi(height, weight){
    return weight/(Math.pow(height,2));
}

function calculoBMI(){
const peso = obtenerValor('weight'); 
const talla = obtenerValor('height');
let resultate = calculateBmi(talla, peso).toFixed(2);
asignarTexto('resultado',  `El valor de su IMC es: ${resultate}`);
clear('height');
clear('weight');

}

/**
 * Crea una función que calcule el valor del factorial de un número pasado como parámetro.
 */
function vFactorial(num){
    //f 5 --> 5*4*3*2*1
    let acumulador = 1;
    if (num > 0 ){
        for(let i = 1; i<= num ; i++ ){
            acumulador*=i;
        } 
    return acumulador;
    }else return 0;
}
function calcularFactorial(){
let numero = obtenerValor('numeroF');
let resultadoF = vFactorial(numero);
asignarTexto('resultadoFactorial',`El factorial de ${numero} es ${resultadoF}` );
clear('numeroF');

}

/**
 * Crea una función que convierta un valor en dólares, pasado como parámetro,
 *  y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
 * con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
 */
////soles a dolares
function aDolares(numSoles){
    return numSoles/3.72;
}
function calcularD(){
    let precio = obtenerValor('numeroDolar');
    let resultateD = aDolares(precio).toFixed(2);
    asignarTexto('resultadoDolar',`Resultado en dolar: ${resultateD}` );
}

/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
 * utilizando la altura y la anchura que se proporcionarán como parámetros.
 */
function salaRectangular(altura, base){
area = altura*base;
perimetro = 2*(altura) + 2*(base);
return asignarTexto('resultateAP', `El area es: ${area} y el perímetro es: ${perimetro}`);
}
function calculatePSala(){
    let alturaValue = obtenerValor('alturaV');
    let baseValue = obtenerValor('baseV');
    salaRectangular(alturaValue,baseValue);
    clear('alturaV');
    clear('baseV');
}

/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
 * utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 */
function calculateCircular(radio){
    const Pi = 3.14; 
    let perimetro = 2 * Pi * radio;
    let area = Pi * (Math.pow(radio,2));
    return asignarTexto('resRadio', `Perímetro = ${perimetro}, Area = ${area}`);
}
function calculateAPCircular(){
    let valueRadio = obtenerValor('radioValue');
    calculateCircular(valueRadio).toFixed(2);
    clear('radioValue');
}

/**
 *Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. 
 */
function tabla(numero){
    let resultado = '';
    for(let i = 1; i < 13; i++){
        resultado+= `${numero} x ${i} = ${numero * i} \n`;
    }
    return resultado;
}
function calculateTabla(){
    let numValue = obtenerValor('numMult')|| 0;
    let resultate = tabla(numValue);
    asignarTexto('multiTable', `${resultate}`);
    clear('numMult');
}


