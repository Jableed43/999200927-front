// Operaciones aritmeticas basicas
console.log("Suma ", 5 + 5); // Suma
console.log("Multiplicacion ",5 * 5); // Multiplicacion
console.log("Resta ",5 - 5); // Resta
console.log("Division ",5 / 5); // Division

// Otros operadores

// Modulo % , da como resultado el resto de una division
// Si es par devuelve 0, si es impar devuelve 1
// Podemos detectar multiplos -> numerador % divisor
console.log("5%2 ",5%2) // 1
console.log("6%2 ",6%2) // 0
console.log("5%5 ",5%5) // 0

// Exponenciacion - Potenciacion
console.log(2**2)
console.log(2**3)
console.log(2**4)

// Como calcular la raiz de un numero
// Math.sqrt(n)
console.log(Math.sqrt(25))
console.log(25 ** 0.5)

// Forma simplificada de operadores aritmeticos

// Aca utilizamos como valor
let numero = 0
numero + 10
console.log(numero)

// Asignamos a numero2 el valor de la operacion
let numero2 = 0
numero2 = numero2 + 10
console.log(numero2)

// forma simplificada
// numero2 = numero2 + 20
numero2 += 20
numero2 -= 5
numero2 /= 7
numero2 *= 17