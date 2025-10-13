// Tipos de datos primitivos
// String - cadena de caracteres
"hola", "hola", `hola`;

// Numbers
20, 1.5, 1e9, 1.6666666;

// Boolean
true, false;

//Otros
// nulo, configurado por un desarrollador
// Campo o dato existente no tiene valor
null;

// undefined - no esta definido, o no existe
undefined;

// Object - Objeto
// pares, { clave: valor }
// Cuando queremos que una entidad tenga caracteristicas (atributos) y comportamiento (metodos)
// Se usan para representar objetos de la real en codigo

var profesor1 = {
  nombre: "javier",
  apellido: "lopez",
  foto: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/87081/88036/Scooby_Doo_and_Shaggy_cardboard_cutout_set_buy_now_at_starstills__30445.1397130529.jpg?c=2",
};
var profesor2 = { nombre: "leandro", apellido: "gutierrez" };

// Array - Arreglos
// Es una coleccion de elementos con []
// Puede ser que todos los datos del listado sean "iguales" en estructura
// Usamos los arrays cuando queremos un listado de elementos del mismo tipo

var profesores = [
  { nombre: "leandro", apellido: "gutierrez", mascota: null, es_titular: true },
  { nombre: "camila", apellido: "gonzalez", mascota: 1, es_titular: false },
  { nombre: "javier", apellido: "lopez", mascota: 2, es_titular: true },
];

// Convenciones de naming - objetos
// Camel case - ideal para keys de objetos
var camelCase = {esTitular : true}

// Snake Case
var snake_case = { es_titular: true }

