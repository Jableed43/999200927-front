// Variable Var
// Usamos la palabra reservada var, nombre de la variable
// = se usa para asignar valor a la variable
// var colorTaza -> Declaracion de variable
// = "gris" -> Inicializacion, asignacion de valor
var colorTaza = "gris"

// Invocacion y reinicializacion
colorTaza = "rojo"

var colorTaza = "azul"

// Caracteristicas de var:
// - Permite la reinicializacion
// - Poca seguridad
// - Permite redeclaracion

// Variable Let
// No permite redeclaracion
// Trabaja con scope (alcance)
// Scope sirve para no sobreescribir una variable y reutilizar las que necesites, para no entrar en conflicto si dos se llaman igual pero una es global y la otra local.

//Variable global, se puede acceder desde cualquier lado
let color_calzado = "negro"

console.log("antes de la funcion calzado ", color_calzado)

function calzado() {
    // Variable local - en bloque, se puede acceder solo dentro de su contexto
    let color_calzado = "Blanco"
    console.log("Dentro de la funcion calzado ",color_calzado)
}

function calzado2() {
    console.log(color_calzado)
}
calzado()
console.log("Despues de la funcion calzado ", color_calzado)

// que es console.log?
// Es una herramienta que permite ver datos, resulados de operaciones, valores de una variable

// Constantes - la variable que no varia
// Usadas para guardar datos que no queremos que cambien
// Puertos, Ip's , URL's, funciones 
const nombre = "brandon"

// Formas de cambiar valor de una variable
const nombres = [ "brandon", "miguel", "jose" ]
console.log(nombres)

// El metodo push guarda un valor al final del array
nombres.push("javier")
console.log(nombres)

// Podemos editar los datos de una constante siempre que sea array u objeto

