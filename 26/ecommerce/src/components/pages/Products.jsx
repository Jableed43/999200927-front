import React from 'react'
import useGetProducts from "../../hooks/useGetProducts"

function Products() {
   const { error, loading, products } = useGetProducts()

    if(error){
        return <>
            <h2> Error al cargar los productos </h2>
            <p> {error?.message || String(error)} </p>
        </>
    }

    if(loading){
        return <>
            <h2> Cargando productos... </h2>
            <img src="./tenor.gif" alt="cargando" />
        </>
    }

  return (

    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "20px" }} >
        { products.map((product) => (
            <div style={{ width: "200px", border: "solid black", textAlign: "center", backgroundColor: "#e9edee" }} key={product.id}>
                <h1 style={{ fontSize: "16px", textTransform: "capitalize" }} > {product.name} </h1>
                <img style={{ width: "100%" }} src={product.image} alt={product.name} />
                <p> {product.description} </p>
                <p> {product.status} </p>
                <p> ${product.price} </p>
                <p> Stock disponible: {product.stock} </p>
            </div>
        )) }
      </div>
    </>
  )
}

export default Products
