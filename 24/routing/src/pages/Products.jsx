import React from "react";
import { Link } from "react-router-dom";

// la ruta de las imagenes /imagenes/computer.png es desde la carpeta public
const PRODUCTS = [
  {
    id: 1,
    nombre: "laptop",
    precio: 999,
    categoria: "electronicos",
    imagen: "/imagenes/computer.png",
  },
  {
    id: 2,
    nombre: "mouse",
    precio: 100,
    categoria: "electronicos",
    imagen: "/imagenes/computer.png",
  },
  {
    id: 3,
    nombre: "teclado",
    precio: 150,
    categoria: "electronicos",
    imagen: "/imagenes/computer.png",
  },
  {
    id: 4,
    nombre: "auriculares",
    precio: 250,
    categoria: "audio",
    imagen: "/imagenes/computer.png",
  },
  {
    id: 5,
    nombre: "altavoz",
    precio: 500,
    categoria: "audio",
    imagen: "/imagenes/computer.png",
  },
  {
    id: 6,
    nombre: "monitor",
    precio: 399,
    categoria: "electronicos",
    imagen: "/imagenes/computer.png",
  },
];

function Products() {
  return (
    <div>
        <h1> Mis productos </h1>
        <Link to="/" > Pagina Principal </Link>
      {PRODUCTS.map((product) => (
        <div key={product.id} >
            <h3> { product.nombre } </h3>
            <img src={ product.imagen } alt={product.nombre} />
            <p> { product.precio } </p>
            <p> {product.categoria} </p>
        </div>
      ))}
    </div>
  );
}

export default Products;
