import useGetProducts from "../../hooks/useGetProducts";
import ProductCard from "../productCard";

function Products() {
  const { error, loading, products } = useGetProducts();

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

  return (
    <>
    <ProductCard products={products} />
    </>
  );
}

export default Products;
