import { useEffect, useState } from "react";

// Es una constante
const SESSION_KEY = "user"

function useAuth() {
    const [user, setUser] = useState(null)

    // Donde vamos a guardar al usuario?
    useEffect(() => {
        const storedUser = sessionStorage.getItem(SESSION_KEY)
        if(storedUser){
            try {
                // Convierte json en objeto de js
                setUser(JSON.parse(storedUser))
            } catch (error) {
                
            }
        }
    }, [])

    // Crear la session y guardarla
    const login = (userData) => {
        setUser(userData)
        // json.stringify convierte de js a json para poder guardarlo
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        sessionStorage.removeItem(SESSION_KEY)
    }

    return {
        user,
        login,
        logout, 
        isAuthenticated: user !== null
    }

}

export default useAuth