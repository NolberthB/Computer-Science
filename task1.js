// Exercises class number 1 and introduction to the course

//  1.- Crea un array llamado meses y que almacene el nombre de los 12 meses del año. Mostrar por pantalla los doce nombres usando console.log()

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'october',
    'November',
    'December' 
]

console.log('These are the names of the months of the year ' + months)



// 2.- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let number = Number(prompt('Ingrese un numero: '))

function pairOdd(number){

    if(number % 2 == 0){
        console.log('El número ' + number + ' es par')
    }else{
        console.log('El número ' +number+ ' no es par')
    }

}

pairOdd(number)

//  3.- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mostrarInfo(str) {

    if (str == str.toLowerCase()) {
        console.log('esta formada solo por letras minusculas :)')
    }else if( str == str.toUpperCase()) {
        console.log('ESTA FORMADA SOLO POR LETRAS MAYUSCULAS :)')
    }else{
        console.log('esta FORmada por Letras minusculas y MAYUSCULAS :)')
    }
}
mostrarInfo('PURAS LETRAS MAYUS y tambien minus')


// 4.- El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120. Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

function factorial(num){
    var res = 1

    for( let i = 1; i <= num; i++){
        res = res * i
    }
    return res
}
factorial(5)



//  5.- Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".


function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, '').toLowerCase();
    const strReversed = newStr.split('').reverse().join('');
  
    return newStr === strReversed ? 'es palindromo' : 'no es palindromo';
  }

console.log(palindromeChecker('La ruta nos aporto otro paso natural')); // es palindromo


// 6.- Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

function lanzarDados() {
    var arr = [ ]

    for( let i = 0; i <= 4 ; i++){

        
        let dado1 = parseInt(6 * Math.random() + 1)
        let dado2 = parseInt(6 * Math.random() + 1)

        arr.push(dado1 + dado2)
        console.log(dado1 , dado2)
    }
console.log(arr)
}

lanzarDados()