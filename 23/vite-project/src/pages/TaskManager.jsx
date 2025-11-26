import React, { useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { LOCAL_STORAGE_KEY } from '../features/task/localStorage'
import { useSelector } from 'react-redux'

function TaskManager() {

    const tasks = useSelector((state) => state.tasks)

    useEffect(() => {
        try {
            // Caso 1: Crea el espacio en localStorage desde 0
            // Caso 2: Actualiza las tareas en localStorage con lo nuevo, si tasks cambia
            // JSON.stringify lo contrario a JSON.parse
            // JSON.stringify convierte objetos de javascript en JSON
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
        } catch (error) {
            console.error("Error al guardar en localStorage", error)
        }
    }, [tasks])

  return (
    <div>
      <h1> Mi lista de tareas </h1>

        <TaskForm />

        <TaskList />

    </div>
  )
}

export default TaskManager
