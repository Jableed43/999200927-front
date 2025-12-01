import { useEffect, useState } from "react"
import { API_URL } from "../config"


const useGetCharacters = () => {
    // Si es un get los datos obtenidos deben estar en un estado
    const [characters, setCharacters] = useState([])
    // Loading indica cuando todavia no se finalizó la operacion
    const [loading, setLoading] = useState(false)
    // Manejo del error, al ser un estado lo podemos actualizar y mostrar en tiempo real
    const [error, setError] = useState(null)
    // Info sirve para la paginacion y navegacion de los registros
    const [info, setInfo] = useState({})

    // Es asincronico
    const fetchCharacters = async (url) => {
        setError(null)
        setLoading(true)

        try {
            // ERROR 1: la url se debe pasar por parametro
            // fetch ejecuta un metodo HTTP, en este caso es un GET
            const respuesta = await fetch(`${url}/character`)

            // Validamos que la respuesta no haya sido positiva
            if(!respuesta.ok){
                throw new Error("Error, no se pudieron obtener los personajes")
            }

            // Convierte el json en objeto de javascript
            // obj js -> usar metodos nativos, iterar, usar bucles
            const data = await respuesta.json()

            setCharacters(data.results)
            setInfo(data.info)

        } catch (error) {
            console.error("Error realizando fetch a la api ", error)
            setError(error)
            setCharacters([])
            setInfo({})
        } finally {
            // Finally se ejecuta independientemente de que haya sido positivo o negativo el resultado de la funcion
            setLoading(false)
        }
    }

    // Dos caminos
    // 1. Ejecutar fetchCharacters aqui usando useEffect
    useEffect(() => {
        if(API_URL){
            // ERROR 1: la url se debe pasar por parametro
            fetchCharacters(API_URL)
        } else {
            setError(new Error("Falta la url para realizar fetch"))
        }
    }, [API_URL] )

    const onPrevious = () => {
        if(info.prev){
            fetchCharacters(info.prev)
        }
    }

     const onNext = () => {
        if(info.next){
            fetchCharacters(info.next)
        }
    }

    return {
        characters,
        loading,
        error,
        info,
        onPrevious,
        onNext,
    }

    // 2. Brindar la funcion fetchCharacters para ser ejecutada de forma externa

}

export default useGetCharacters