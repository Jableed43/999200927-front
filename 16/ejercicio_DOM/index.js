/* Registro de productos
Le pedimos al cliente que ingrese uno por uno los nombres de los productos que desea comprar */

/* 
- Array: Listado de productos de referencia con precio
- Objeto: nombre, precio
- El identificador del producto es el nombre
- 
*/
// pan

let productos = [
  { pan: 3000 },
  { cafe: 7000 },
  { aceite: 1500 },
  { leche: 1000 },
  { fideos: 700 },
  { vinagre: 500 },
  { harina: 850 },
  { azucar: 1000 },
  { galletitas: 1500 },
  { shampoo: 800 },
];

function registrarProductos() {
  const productosCliente = [];
  const productosNoEncontrados = [];
  let agregarProductos = true;
  // Obtenemos los nombres de los productos del listado
  const nombresProductos = productos.map(
    (producto) => Object.keys(producto)[0]
  );

  while (agregarProductos) {
    let productoEncontrado = false;
    let producto = prompt(
      "Ingrese nombre del producto. Para finalizar la compra escribe un punto: ."
    );

    // Validar si nos mandan un punto salimos de la operacion
    if (producto === ".") {
      agregarProductos = false;
    } else if (producto !== "" || producto !== null) {
      // Normalizar - shampoo
      // toLowerCase -> pasa todo a minusculas
      // trim -> borra espacios adelante y atras del string
      const productoNormalizado = producto.toLowerCase().trim();

      // Realizamos una iteracion sobre cada nombre de producto
      nombresProductos.forEach((nombreProducto) => {
        // Verificamos si el producto que nos manda al cliente existe en nuestra lista
        if (nombreProducto === productoNormalizado) {
          // Si el producto existe lo guardamos en productosCliente
          productosCliente.push(productoNormalizado);
          // Si es true, entonces no lo guardamos en los productos no encontrados
          productoEncontrado = true;
          return;
        }
      });
      if (productoEncontrado === false) {
        productosNoEncontrados.push(productoNormalizado);
      }
    }
  }
  return { productosCliente, productosNoEncontrados };
}


/* Cálculo del Total:
   - Recorrer todos los productos válidos ingresados
   - Buscar el precio de cada producto en la lista de precios
   - Sumar todos los precios para obtener el total
   - Mostrar el detalle de cada producto y su precio
   - Retornar el monto total a pagar
 */

function calcularTotal(productosCliente, productos) {
  // El total a pagar de nuestro cliente
  let totalAPagar = 0;

  productosCliente.forEach((producto) => {
    // Sumar el producto en el array
    // hasOwnProperty -> determina si un objeto tiene una propiedad con el nombre especificado
    const productoEncontrado = productos.find((item) =>
        // Si el item es "pan", busco la propiedad (key) "pan"
    //   item.hasOwnProperty(producto)
      Object.keys(item)[0] === producto
    );

    if (productoEncontrado) {
      // Necesito el precio
      // Obtenemos el valor del producto a traves del nombre
      // Si es "pan", trae el precio-valor del "pan"
      const precio = productoEncontrado[producto];
      // Sumar a un total, todos los precios
      totalAPagar += precio;
      console.log(totalAPagar)
    } else {
      return;
    }
  });
  return totalAPagar;
}

// Destructuracion de objetos
const { productosCliente, productosNoEncontrados } = registrarProductos()
console.log("Los productos no encontrados son: ", productosNoEncontrados)
console.log("Los productos del cliente son: ", productosCliente)
const totalAPagar = calcularTotal(productosCliente, productos)
console.log("El total a pagar es de: ", totalAPagar)
 