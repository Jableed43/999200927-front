import { useState } from "react"
import { API_URL } from "../config"

function useDeleteProduct() {
    const [error, setError] = useState(null)

    const deleteProduct = async (productId) => {
        setError(null)
        try {
            const response = await fetch(`${API_URL}/products/${productId}`, {
                method: "DELETE",
                headers: { 
                    "Content-type": "application/json"
                }
            }) 

            if(!response.ok){
                throw new Error(`HTTP error, status: ${response.status}`)
            }

            const data = await response.json()

            return data

        } catch (error) {
            console.error(error)
            setError(error)
        }
        
    }
    return {error, deleteProduct}
}

export default useDeleteProduct