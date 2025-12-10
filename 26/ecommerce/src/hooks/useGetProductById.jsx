import { useState } from "react";
import {API_URL} from "../config.js"

function useGetProductById() {
  const [error, setError] = useState(null);

  const getProductById = async (productId) => {
    try {
      setError(null);

      const response = await fetch(`${API_URL}/products/${productId}`);

      // response.status brindara el codigo de estado del servidor
      if (!response.ok) {
        throw new Error(
          "Error al traer el producto",
          response.status
        );
      }

      const data = await response.json();

      return data
    } catch (error) {
        console.error(error)
        setError(error)
    }
  };

  return {getProductById, error}
}

export default useGetProductById;
