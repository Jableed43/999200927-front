// Bucles
// Repetir tareas - Operaciones repetitivas
// Consideran condiciones

// Bucle for

let cantidad = 200

// Inicializacion; Condicion; Actualizacion
// 'index++' === 'index = index + 1'
// Lo usas cuando queres todo el control, es mas complejo 
// for(let index = 0; index <= cantidad; index++){
//     if(index % 7 === 0){
//         console.log(index)
//     }
// }

// Descendente en intervalos de a 5
// for(let index = cantidad; index >= 0; index-=5){
//     console.log(index)
// }

let numeros = [ 147,154,161,168, 17, 24, 33, 0, 89, 96, 88 ]
// length es la cantidad de elementos que posee el array
// numeros tiene 11 de length
// indice del array desde 0
for (let index = 2; index < numeros.length; index++) {
    if(numeros[index] % 7 === 0){
        console.log(numeros[index], "-", index)
    }
}

// While - Mientras
// Mientras la condicion siga activa va a funcionar

let contador = 20
while(contador > 0){
    console.log("cuenta regresiva", contador)
    contador--
}

// Investigar
// For in (arrays) - For of (para objetos)