import { createSlice } from '@reduxjs/toolkit'

/* Slice combinan el estado inicial
los reducers (funciones que modifican el estado)
las acciones, corresponden a los reducers
  */

const initialState = []

// Slice tiene el nombre del estado, el estado inicial y los reducers (metodos que modifican el estado)

const taskSlice = createSlice({
    // nombre que va a aparecer en las acciones
    name: "tasks",
    initialState,

    // Los reducers modifican las tareas de formas pre definidas
    // por eso es predecible
    reducers: {
        // Añadir tareas
        // State es el estado actual
        // Action lleva payload (info) y type
        addTask: (state, action) => {
            // Estructuramos la nueva tarea
           const newTask = {
                id: String(Date.now()),
                text: action.payload,
                completed: false
            }
            state.push(newTask)
        },
        // Alterna entre completada y no completada

        toggleComplete: (state, action) => {
            // payload trae el id de la tarea
            const taskId = action.payload
            // buscamos la tarea con el id que recibimos
            const existingTask = state.find(task => task.id === taskId)
            if(existingTask){
                // true = !true (false)
                existingTask.completed = !existingTask.completed
            }
        },
        // Borrar la tarea
         deleteTask: (state, action) => {
            // payload trae el id de la tarea
            const taskId = action.payload
            return state.filter(task => task.id !== taskId)
            // Agrupar elementos por una condicion -> filter
            // Discriminar elementos por una condicion -> filter
        }
    }
})

// Exporto las acciones para usarlas en los componentes
export const { addTask, toggleComplete, deleteTask } = taskSlice.actions

export default taskSlice.reducer