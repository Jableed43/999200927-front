import React, { useState } from "react";
import { statusData, statusTranslations } from "../../utils/statusTranslations";
import usePostProduct from "../../hooks/usePostProduct";
import { useNavigate } from 'react-router-dom'

function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    status: "AVAILABLE",
    price: 0,
    stock: 1,
  });

  const navigate = useNavigate()

  const { error, postProduct } = usePostProduct();

  // Eventos: onSubmit y onChange

  const handleFormSubmit = async (e) => {
    // Metodo que evita refrescar la pagina al enviar el form
    e.preventDefault();
    const success = await postProduct(form);
    if (success) {
        // limpieza del form
      setForm({
        name: "",
        image: "",
        description: "",
        status: "AVAILABLE",
        price: 0,
        stock: 1,
      });
      // navegacion al listado de productos
      navigate("/products")
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      // Considera el nombre del input y el tipo del input
      // si el input es numerico entonces convierte el valor a numero entero
      // si llego vacio el value entonces le ponemos 0
      // si el input no es numerico, entonces queda el valor original
      [name]: type === "number" ? parseInt(value) || 0 : value,
    });
    console.log(form);
  };

  // Controlled form
  return (
    <>
      <h1> Crear producto </h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Nombre de producto</label>
        <input
          required
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
          value={form.name}
        />
        <br />
        <label htmlFor="image">Url de imagen</label>
        <input
          required
          onChange={handleInputChange}
          type="text"
          name="image"
          id="image"
          value={form.image}
        />
        <br />
        <label htmlFor="description">Descripcion</label>
        <textarea
          required
          onChange={handleInputChange}
          name="description"
          id="description"
          value={form.description}
        ></textarea>
        <br />
        <label htmlFor="status">Estado del producto</label>
        <select
          onChange={handleInputChange}
          value={form.status}
          required
          name="status"
          id="status"
        >
          {statusData.map((status) => (
            <option value={status} key={status}>
              {statusTranslations[status] || status}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="price">Precio</label>
        <input
          onChange={handleInputChange}
          value={form.price}
          required
          type="number"
          name="price"
          id="price"
        />
        <br />
        <label htmlFor="stock">Stock</label>
        <input
          onChange={handleInputChange}
          value={form.stock}
          required
          type="number"
          name="stock"
          id="stock"
        />
        <br />
        <button type="submit">Crear producto</button>
        <br />
        <button type="reset">Limpiar</button>
        <br />
        {error && <p> {error.message || error} </p>}
      </form>
    </>
  );
}

export default CreateProductPage;
