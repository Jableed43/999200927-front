// Estructura de control condicional

// True - Truthy
    let truthy = [ "hola", " ", true, 1, -20, {}, [], function(){}, Symbol('id') ]
// False - Falsy
    let falsy = [ false, 0, -0, "", null, undefined, NaN ]

    let condicion = false

if (condicion) {
    console.log("Es truthy")
} else {
    console.log("Es falsy")
}

if (!condicion) {
    console.log("Es falsy")
} else {
    console.log("Es truthy")
}

let frio = true
let temperatura = 10

if(frio){
    console.log("Me abrigo")
} else {
    console.log("No me abrigo")
}

// Else if
if(temperatura <= 10){
    console.log("Me pongo campera")
} else if (temperatura > 10 && temperatura < 18){
    console.log("Me pongo un buzo")
} else {
    console.log("No me abrigo")
}

// AND / && / Y - Lo que necesita para ser True es que todos sus terminos sean verdaderos.

// OR / || / O - Lo que necesita para ser True es que uno de sus terminos sea verdadero, si ambos son falsos entonces es falso.

// If ternario - reducido

if(frio){
    console.log("Me abrigo")
} else {
    console.log("No me abrigo")
}

frio ? console.log("Me abrigo") : console.log("No me abrigo")


if(temperatura <= 10){
    console.log("Me pongo campera")
} else if (temperatura > 10 && temperatura < 18){
    console.log("Me pongo un buzo")
} else {
    console.log("No me abrigo")
}

temperatura <= 10 ? console.log("Me pongo campera")
: temperatura > 10 && temperatura < 18 ?
console.log("Me pongo un buzo")
: console.log("No me abrigo")