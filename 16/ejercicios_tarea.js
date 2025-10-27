// Push
// 1. Array inicial
let listaDeCompras = ["Leche", "Pan", "Queso"];

// 2. Añade "Manzanas" y "Huevos" al final (usa push)
// Tu código aquí:
listaDeCompras.push("Manzanas", "Huevos")

// 3. Verifica la lista
console.log(listaDeCompras);

// Pop

// 1. Elimina el último elemento (usa pop)
// Tu código aquí:
let articuloRemovido = listaDeCompras.pop()

// 2. Imprime el removido y la lista
console.log("Se removió:", articuloRemovido);
console.log("Nueva lista:", listaDeCompras);

// Splice
let notas = [9, 6, 7, 5, 4, 8, 1, 2]; // La lista tiene 8 notas.
// 1. Reemplazar '6' (índice 1) por '10'
// Tu código aquí:
notas.splice(1, 1, 10)
console.log(notas);


// 2. Insertar '8' en el índice 3 (sin eliminar nada)
// Tu código aquí:
notas.splice(3, 0, 8)
console.log(notas);

// 3. Eliminar los dos últimos elementos (a partir del índice 6)
// Tu código aquí:
// notas.splice(7, 2)
notas.splice(notas.length -2, 2)

console.log("Notas finales:", notas);
