// Ejercicio 2: Conversor de Temperatura (Fahrenheit a
// Celsius)
// Crea una función llamada convertirFaC que reciba una temperatura en grados Fahrenheit
// (F) y la convierta a grados Celsius (C).
// 1. Fórmula: $C = (F - 32) * (5 / 9)$
// 2. Validación: La temperatura en Fahrenheit debe ser un número. Además, debe ser
// mayor o igual al cero absoluto (-459.67°F). Si no cumple estas condiciones,
// retornar null y mostrar un error en consola.
// 3. Salida: Imprimir la temperatura convertida con un solo decimal y retornarla.

function convertirFaC(fahrenheit) {
    const CERO_ABSOLUTO = -459.67

    if(typeof fahrenheit !== "number" || fahrenheit < CERO_ABSOLUTO){
        return null
    }

    //Fórmula: $C = (F - 32) * (5 / 9)$
    
    let celsius = (fahrenheit - 32) * (5 / 9)

    // Formatear los decimales
    let celsiusFormateado = celsius.toFixed(2)

    console.log(`${fahrenheit}°F equivalen a ${celsiusFormateado}°C`)
    
// Dos formas de convertir string a numero

    // ParseFloat es para numeros con decimales
    // return parseFloat(celsiusFormateado)

    // ParseInt es para enteros, elimina el valor decimal
    // return parseInt(celsiusFormateado)

    // Number es tanto para enteros como para decimales
    // return Number(celsiusFormateado)

    // Retorno con objeto:
    return { celsius: Number(celsiusFormateado), fahrenheit: fahrenheit }
}

let temperatura = convertirFaC(90)
// let celsius = temperatura.celsius
// let fahrenheit = temperatura.fahrenheit

// Destructuracion de objetos es por nombre de key
const { celsius, fahrenheit } = temperatura

