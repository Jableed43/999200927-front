import { useState } from "react";
import { API_URL } from "../../config";

function useRegisterUser() {
    const [error, setError] = useState(null)

    const registerUser = async (formData) => {
        setError(null)

        try {
           const response = await fetch(`${API_URL}/users`,
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
                throw new Error(`Error al registrar usuario, ${response.status}`)
            }

           const data = await response.json()

           //omito la password asi no es visible
           const { password: _, ...userSinPassword } = data

           // data posee los datos del registro nuevo del producto
           return userSinPassword

        } catch (error) {
            console.error("Error al crear registrar usuario", error)
            setError(error)
            return null
        }
    }
    return {error, registerUser}
}

export default useRegisterUser