import React from "react";
import useGetProducts from "../../hooks/useGetProducts";
import { statusTranslations } from "../../utils/statusTranslations";
import { useNavigate } from "react-router-dom";

function Products() {
  const { error, loading, products } = useGetProducts();
  const navigate = useNavigate()

  if (error) {
    return (
      <>
        <h2> Error al cargar los productos </h2>
        <p> {error?.message || String(error)} </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h2> Cargando productos... </h2>
        <img src="./tenor.gif" alt="cargando" />
      </>
    );
  }

  const handleEditProduct = (e, productId) => {
    // evita que si en el mismo contenedor que esta el evento hay otro boton, no se mezclen los eventos 
    e.stopPropagation()
    // armar una navegacion hacia la pagina de edicion
    navigate(`/products/edit/${productId}`)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            style={{
              width: "200px",
              border: "solid black",
              textAlign: "center",
              backgroundColor: "#e9edee",
              display: "flex",
              flexDirection: "column",
            }}
            key={product.id}
          >
            <h1 style={{ fontSize: "16px", textTransform: "capitalize" }}>
              {product.name}
            </h1>
            <img
              style={{ width: "100%", height: "120px" }}
              src={product.image}
              alt={product.name}
            />
            <p> {product.description} </p>
            <p> {statusTranslations[product.status]} </p>
            <p> ${product.price} </p>
            <p> Stock disponible: {product.stock} </p>

            <button onClick={(e) => handleEditProduct(e, product.id) } > Editar </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
