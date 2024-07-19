/**Crear una función que muestre "¡Hola, mundo!" en la consola. */
function saludo(){
    console.log('¡Hola Mundo!');
}
saludo();

/**Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. */
function mostrarNombre(nombre){
    console.log( `¡Hola, ${nombre}!` );
}
mostrarNombre('Ronald')

/**Crear una función que reciba un número como parámetro y devuelva el doble de ese número. */
function dobleNumero(num){
return console.log(num*2);
}
dobleNumero(4);

/**
 * Crear una función que reciba tres números como parámetros y devuelva su promedio.
 */
function promedio(num1, num2, num3){
resultadoProm =  ((num1+num2+num3) / 3);
 return console.log(`El promedio de ${num1}, ${num2} y ${num3} es: ${resultadoProm} `)
}
promedio(15,15,15);

/**
 * Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
 */
function numeroMayor(num1, num2){
    if(num1 > num2){
        return console.log(`El numero mayor entre ${num1} y ${num2} es ${num1}`);
    }
    else 
    return console.log(`El numero mayor entre ${num1} y ${num2} es: ${num2}`);
}
numeroMayor(87,54);

/**
 * Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */
function multiplicaAlMismo(num){
    return console.log(num*num);
}
multiplicaAlMismo(8);
