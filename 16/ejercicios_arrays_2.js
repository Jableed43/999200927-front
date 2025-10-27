
const productos = [
 { nombre: "zarza", precio: 2},
 { nombre: "parlante", precio: 120000 },
 { nombre: "teclado", precio: 125000 },
 { nombre: "monitor", precio: 200000 },
 { nombre: "ratón", precio: 100000},
 { nombre: "aceite", precio: 1}
]

// Que pasa si quisieramos saber donde se encuentra el elemento?
// find -> findIndex
let found3 = productos.find(producto => producto.precio >= 125000)
let found = productos.findIndex(producto => producto.precio >= 125000)
console.log(found)
console.log(productos[found]);

//¿Que retorna findIndex si no encuentra un valor que cumpla con la condicion?
// Si no encuentra coincidencia retorna -1
let found2 = productos.findIndex(producto => producto.precio >= 500000)
console.log(found2)

if(found2 !== -1){
    console.log("Se encontró el valor")
} else {
    console.log("No se encontro el valor")
}

// ¿Como hacemos para saber si todos los elementos de un array cumplen una condicion?

// Tenemos un club deportivo, y queremos saber si todos los socios estan al dia

let socios = [
    {nombre: "gabriel", activo: true},
    {nombre: "marina", activo: true},
    {nombre: "javier", activo: false},
    {nombre: "aristobulo", activo: true},
]

// Every -> Todo, si todo cumple con una condicion // Retorna boolean
let socios_respuesta = socios.every(socio => socio.activo === true)
// socios.every(socio => {
//     return socio.activo === true
// })
console.log(socios_respuesta)

// ¿Como hacemos para saber si algunos de los elementos de un array cumplen una condicion?

// Some -> Si algunos cumplen una condicion // Retorna boolean
let socios_respuesta2 = socios.some(socio => socio.activo === true)
console.log(socios_respuesta2)

// ¿Como hacemos para ordenar elementos de un array?
const nums = [0, 22, 3, 47, 99, 65, 4, 5, 57, 82]

// Orden descendente (M -> m) y orden ascendente (m -> M)
// Sort -> ordenar

// Orden ascendente
let numASC = nums.sort((a, b) => {
    // De esta forma decimos que a es menor que b
    return a - b
})
console.log(numASC)

// Orden descendente
let numDESC = nums.sort((a, b) => {
    // De esta forma decimos que a es menor que b
    return b - a
})
console.log(numDESC)

// Queremos separar un string en partes por algun caracter que se encuentre en el string

let nums3 = "4,5,6,7,8,9,10"
let result_nums3 = nums3.split(",")
console.log(result_nums3)

let nums4 = "4-5-6-7-8-9-10"
let result_nums4 = nums4.split("-")
console.log(result_nums4)