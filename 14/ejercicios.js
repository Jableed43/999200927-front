// 1. Elaborar una funcion que reciba un parametro y nos retorne de que tipo es el argumento

// Para conocer si un dato es array se usa Array.isArray(lista)

function tipoDeDato(valor) {
    let resultado = typeof valor
    console.log(resultado)
    return resultado
}

tipoDeDato("hola")
tipoDeDato(10)
tipoDeDato(true)
tipoDeDato({})
tipoDeDato([2, 3, 5])

// 2. Dada una edad, queremos saber si una persona es mayor de 18 o no
// Validacion -> Verificar si el dato de entrada es del tipo esperado o si el valor es correcto
function esMayorDeEdad(edad) {
    if(edad >= 18) {
        console.log(edad, "Es mayor o igual a 18 años")
        return true
    } else {
        console.log(edad, "Es menor a 18 años")
        return false
    }
}

esMayorDeEdad(22)
esMayorDeEdad(18)
esMayorDeEdad(15)
esMayorDeEdad(-15)
esMayorDeEdad("ensalada")

function esMayorDeEdadPlus(edad) {
    // Validamos que la edad no sea negativa
    if(edad < 0){
        console.log("Edad debe ser mayor a 0")
        return false
    }

    // Validamos que la edad sea solo number
    if(typeof edad != "number"){
        console.log("Edad debe ser un numero")
        return false
    }

    if(edad >= 18) {
        console.log(edad, "Es mayor o igual a 18 años")
        return true
    } else {
        console.log(edad, "Es menor a 18 años")
        return false
    }
}

esMayorDeEdadPlus(-1)
esMayorDeEdadPlus("ensalada")
esMayorDeEdadPlus(true)
esMayorDeEdadPlus(22)
esMayorDeEdadPlus(15, 18)

// 3. Queremos ver el promedio de tres notas
function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3

    if(promedio >= 7){
        console.log("Promocionado", promedio)
    } else if (promedio >= 4 && promedio < 7){
        console.log("Regularizado, vas a final", promedio)
    } else {
        console.log("Reprobado", promedio)
    }
}

calcularPromedio(7, 6, 4.5)
calcularPromedio(4, 10, 7.5)

// Buscamos que las funciones sean lo mas dinamicas y genericas posible
/* Puntos a mejorar del enfoque de calcularPromedio
    - Que pasaria si nuestro promedio se calculara por una cantidad de notas distinta a 3?
    - Siempre dividimos por tres y deberiamos dividir por la cantidad de valores
    - Validacion
*/

function calcularPromedio2(listaNumeros) {
    // Validar que listaNumeros sea un array y que no esté vacio
    if(!Array.isArray(listaNumeros) || listaNumeros.length === 0){
        console.log("Debe proporcionar un array de notas no vacio")
    }

    // Inicializacion de variable
    let sumaNotas = 0

    for(let i = 0; i < listaNumeros.length ; i++){
        const nota = listaNumeros[i]
        console.log(nota)
        // Validar si es numero
        sumaNotas += nota
    }

    const promedio = sumaNotas / listaNumeros.length

    if(promedio >= 7){
        console.log("Promocionado", promedio)
    } else if (promedio >= 4 && promedio < 7){
        console.log("Regularizado, vas a final", promedio)
    } else {
        console.log("Reprobado", promedio)
    }
}

calcularPromedio2([7, 4, 10, 8, 4, 8])
