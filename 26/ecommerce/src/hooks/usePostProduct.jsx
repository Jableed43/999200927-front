import { useState } from "react";
import { API_URL } from "../config";

function usePostProduct() {
    const [error, setError] = useState(null)

    const postProduct = async (formData) => {
        setError(null)

        try {
           const response = await fetch(`${API_URL}/products`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                // JSON.stringify convierte a JSON los obj de js
                body: JSON.stringify(formData)
            })

            // Este error es exclusivo del servidor
            if(!response.ok){
                throw new Error(`Error al crear el producto, ${response.status}`)
            }

           const data = await response.json()

           // data posee los datos del registro nuevo del producto
           return data

        } catch (error) {
            console.error("Error al crear nuevo producto ", error)
            setError(error)
            return null
        }
    }
    return {error, postProduct}
}

export default usePostProduct