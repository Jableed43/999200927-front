// Arrays
// Colecciones de datos
// Podemos acceder a las posiciones (indices) del array

const nums = [1, 2, 3, 4, 5, 8];
console.log(nums[0]);
let position = 3 - 1;
console.log(nums[position]);

// Dot notation
console.log(nums.length);

// Como acceder al ultimo elemento
console.log(nums[nums.length - 1]);

// Indices
// Destructuracion en arrays es por orden de indice
const [a, b] = nums;
console.log(a);
console.log(b);

// Si queres omitir "a", que es la posicion 0, entonces pones una coma
const [, f] = nums;

// Acceder a datos de un array
const mixto = [
  0,
  2,
  7,
  9,
  "hola!",
  "Bonjour",
  false,
  ["a", "b", "c"],
  { nombre: "Tobi", raza: "calico" },
];

// Accedemos a un array dentro de otro array
console.log(mixto[7][1])

// Accedemos al objeto dentro del array
mixto[8].raza = "Naranjoso"

let raza = mixto[8].raza

console.log(mixto)

