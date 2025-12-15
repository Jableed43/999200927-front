import { useNavigate } from "react-router-dom";
import { statusTranslations } from "../utils/statusTranslations.js";
import useDeleteProduct from "../hooks/useDeleteProduct.jsx";
import useAuth from "../hooks/user/useAuth.jsx";

function ProductCard({ products }) {
  const navigate = useNavigate();
  const { error, deleteProduct } = useDeleteProduct();

  const handleEditProduct = (e, productId) => {
    // evita que si en el mismo contenedor que esta el evento hay otro boton, no se mezclen los eventos
    e.stopPropagation();
    // armar una navegacion hacia la pagina de edicion
    navigate(`/products/edit/${productId}`);
  };

  // TODO FALTARIA NO MOSTRAR BOTON DE EDITAR Y BORRAR SI ESTA AUTENTICADO
    const {isAuthenticated} = useAuth()

  const handleDeleteProduct = async (e, productId) => {
    e.stopPropagation();
    if (window.confirm("Estas seguro que queres eliminar el producto?")) {
      const response = await deleteProduct(productId);
      console.log(response);
      if (response) {
        window.location.reload();
        return;
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
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

          { isAuthenticated && <button onClick={(e) => handleEditProduct(e, product.id)}>
            Editar
          </button>}
          { isAuthenticated && <button onClick={(e) => handleDeleteProduct(e, product.id)}>
            Eliminar
          </button>}
        </div>
      ))}

      {error && <p> {error.message || error} </p>}
    </div>
  );
}

export default ProductCard;
