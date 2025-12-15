import { useState } from "react";
import { API_URL } from "../../config";

function useLoginUser() {
    const [error, setError] = useState(null)

    const loginUser = async (email, password) => {
        setError(null)

        if(!API_URL){
            throw new Error("Ingrese envs");
        }

        try {
           const response = await fetch(`${API_URL}/users`)

            // Este error es exclusivo del servidor
            if(!response.ok){
                throw new Error(`Error al leer usuarios, ${response.status}`)
            }

           const users = await response.json()

           const userFound = users.find((user) => user.email === email && user.password === password)

           if(!userFound){
            console.log(userFound)
            setError("Credenciales incorrectas")
            return null
           }

          const { password: _, ...userSinPassword  } = userFound

          return userSinPassword

        } catch (error) {
            console.error("Error al loggear usuario", error)
            setError(error)
            return null
        }
    }
    return {error, loginUser}
}

export default useLoginUser