import { configureStore } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEY } from '../src/features/task/localStorage.js'
import taskReducer from '../src/features/task/taskSlice.js'

// Carga el estado desde localStorage
const loadState = () => {
    // try catch, significa "intentar hacer algo"
    // si falla, el catch atrapa el error
    try {
        // localStorage guarda la informacion como JSON
        // serializado significa transformado en un formato distinto al original
        // en localStorage guardamos en .json, por lo tanto no podemos operarlo ni iterarlo
        // metodos como .map, .filter, .find, foreach
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(serializedState === null){
            return undefined
        }

        // JSON.parse() transformamos json a objeto de js
        const parsedState = JSON.parse(serializedState)

        // recordemos que trabajamos con arrays y si no es array va a fallar
        if(!Array.isArray(parsedState)){
            console.warn("Los datos de localStorage no son validos")
            return undefined
        }

        return parsedState

    } catch (error) {
        console.error("Error al cargar el estado de localStorage", error)
        return undefined
    }
}
// configurando el almacenamiento y manejo de mi estado
export const store = configureStore({
    reducer: {
        // El estado global de la propiedad tasks
        // este estado es manejado por el taskReducer
        // nombre del estado: reducers del estado
        tasks: taskReducer,
    },
    // pre carga el estado al inciar la aplicacion
    // el estado inicial viene desde localStorage
    preloadedState: {
        tasks: loadState()
    }
})