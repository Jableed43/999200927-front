// 1. Añadir un elemento a un array en la ultima posicion (no reemplazar) - array.push()
let nums = [2, 3, 4, 5];
nums.push(6);
console.log(nums);
// Tambien podemos pushear varios elementos
nums.push("a", "b", false, [1, 2]);
console.log(nums);

// 2. Eliminar un elemento del array en la ultima posicion - array.pop()
console.log("Elemento eliminado", nums.pop());
console.log("Array modificado, ultimo Elemento eliminado", nums);

// 3. Agregar un elemento al principio de un array - array.unshift()
console.log("Nuevo largo del array", nums.unshift("Juan"));
console.log(nums.unshift("mateo", "marcos"));
console.log("Añadimos el nombre juan al principio del array", nums);

// 4. Remover un elemento al principio de un array - array.shift()
console.log("Se elimina el primer elemento del array", nums.shift())
  // 5. Reemplazar elementos, en cualquier parte del array

  // Reemplazar el indice 1
 let nums2 = ["marcos", "Juan", 2, 3, 4, 5, 6, "a", "b", false]

// Reemplazamos juan con lucas
 console.log(nums2)
 // El primer parametro es donde empieza a contar
 // El segundo parametro es cuantos elementos se reemplazan
 // El tercer parametro es el dato de entrada
 nums2.splice(1, 1, "lucas");
 console.log(nums2)

// Podemos reemplazar mas de un indice por un solo elemento
nums2.splice(0, 2, "pedro")
console.log(nums2)

// Colocar mas de un elemento
nums2.splice(0, 2, "toby", "firulais")
console.log(nums2)

// Colocar nuevo valor sin borrar
console.log("sin reemplazar", nums2.splice(4, 0, "batata"))
console.log(nums2)

// Metodos de iteracion (bucles) y transformacion

// 6. Foreach (Por cada uno), utilizar una funcion aplicada a cada elemento del array
// 1995 For -> 2009 Foreach

// Saludar a cada persona
let nombres = ["Javier", "Facundo", "Sofia", "Rocio", "Alejo"]
// Todos los iteradores de array son parecidos
// El primer argumento es el indice individual del array (El mas usado)
// El segundo argumento es el valor del index actual
// El tercer argumento es una referencia del array original
nombres.forEach((nombre, index, array) => {
    console.log(`Hola, ${nombre}, ¿Cómo estás?, ${index}, ${array.length}`)
})
// 7. map() - utilizar una funcion aplicada a cada elemento del array, el retorno es un array nuevo, no modifica el original

// Duplicar numeros
let numeros = [1, 2, 3, 4, 55, 66, 67, 88, 98, 100]

// let numResult = numeros.map(numero => {
//     return numero * 2
// })

function duplicar(a) {
    return a * 2
}

let numResult = numeros.map(numero => duplicar(numero))
console.log(numResult)
// 8. filter() - Lee todos los valores y retorna un array con los resultados filtrados
// Realizar busquedas o ignorar valores
// Vamos a encontrar los numeros que sean pares - divisibles por 2
let numPares = numeros.filter(numero => numero % 2 === 0)
let numImpares = numeros.filter(numero => numero % 2 === 1)
let numMayoresSes = numeros.filter(numero => numero > 60)
let numMayoresSesPares = numeros.filter(numero => (numero > 60) && (numero % 2 === 0))
let numMayoresSesImpares = numeros.filter(numero => (numero > 60) && !(numero % 2 === 0))

console.log({numImpares, numPares, numMayoresSes, numMayoresSesPares, numMayoresSesImpares})

// Cual es el problema de filter?
// No funciona bien con arrays muy grandes, mientras mas valores mas lento
// Generalmente los filtros grandes se hacen directo en las db - indices
// big O

// 9. find() - Trae el primer valor que coincida con la condicion (predicado)
let found1 = numeros.find(numero => numero === 66)
console.log(found1)

const productos = [
 { nombre: "zarza", precio: 2},
 { nombre: "parlante", precio: 120000 },
 { nombre: "teclado", precio: 125000 },
 { nombre: "monitor", precio: 200000 },
 { nombre: "ratón", precio: 100000},
 { nombre: "aceite", precio: 1}
]

let found2 = productos.find(producto => producto.precio >= 125000)
console.log(found2)