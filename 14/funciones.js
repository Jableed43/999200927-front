/* Funciones
Codigo reutilizable para tareas especificas
Dont repeat yourself - DRY
Porque es malo repetir codigo?
 - Si la funcion cambia, deberias cambiarla en todas partes (Dificulta mantenimiento)
 - Corres riesgo de errores (Aumentamos la cantidad de bugs)
Porque es bueno reutilizar codigo?
- Mantenible - Hay un solo lugar donde deberias hacer tus cambios
- Unica fuente de la verdad
- Separacion de responsabilidades (Solid -> S)

Que permiten las funciones?
- Estructurar codigo con buenas practicas
- Modularizar / Componetizacion
- Facil lectura del codigo
- Mejor mantenimiento
- Reutilizar codigo
- Ahorramos tiempo, disminuimos errores


- Reciben datos de entrada que procesan y develven un resultado 
*/

// Momentos de las funciones
// Definicion (Implementacion) -> donde la creamos y definimos sus pasos
// Invocacion (Llamado- Call) -> donde la nombramos para ejecutarla

// 1. Funcion declarada - La mas comun
// Te permite ejecutarla antes de declararla
// Tiene hoisting

function calcularArea(largo, ancho){
    // El retorno develve el resultado de la funcion
    // El retorno finaliza la ejecucion
    // Permite reutilizar el resultado de la funcion
    return largo * ancho
}

// El argumento son los valores que usan los parametros cuando se ejecuta la funcion
console.log(calcularArea(7, 2))

// 2. Funcion de expresion (Funcion asignada)
// No posee hoisting - No se puede ejecutar antes de su declaracion

const multiplicar = function (a, b) {
    return a * b
}

console.log(multiplicar(7,7))

// 3. Funcion flecha - Arrow Function
// Version Standard
// No usa la palabra reservada function
// No posee hoisting - No se puede ejecutar antes de su declaracion
// SI USAS LLAVES USAS RETURN
const saludarUsuario = (nombre) => {
    return `Hola ${nombre}`
}

console.log(saludarUsuario("Javier"))

// Funcion flecha sintaxis concisa // Retorno implicito
// No usa function, no usa llaves, no usa retorno
// Sirve para ahorrar mucho espacio 
// No posee hoisting - No se puede ejecutar antes de su declaracion

const restar = (a, b) => a - b

// Si tenes un solo parametro no es obligatorio utilizar parentesis
const incrementar = a => a + 1

// Funciones dentro de objetos - Metodo
const usuario = {
    nombre: "javier",
    saludar: function(mensaje) {
        // Contatenacion
        console.log(`${mensaje}, mi nombre es ${this.nombre}`)
        console.log(mensaje , ", mi nombre es" , this.nombre)
        console.log(mensaje + " , mi nombre es " + this.nombre)
    },
    apellido: "lopez"
}

usuario.saludar("Hola")
// Sintaxis abreviada
const auto = {
    color: "gris",
    // Funcion normal, sin clave
    // Muy usado en programacion orientada a objetos
    // Mejor forma de escribir un metodo
    arrancar() { 
        return "Se encendio el auto" 
    },
    marca: "volkswagen",
    // Con funcion flecha + clave
    apagar: () => {
        return "se ha apagado el auto"
    }
}

console.log(auto.apagar())