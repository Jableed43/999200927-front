import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

function TaskList() {
    // useSelector es un hook, que puede acceder a cualquier estado de redux en el store
    // para acceder a las tareas usamos state.tasks
    // este hook se puede usar ya que en nuestro main.jsx tenemos el provider
   const tasks = useSelector((state) => state.tasks)

    // empty state
    if(tasks.length === 0){
        return (
            <p> No hay tareas pendientes, ¡Añade una nueva! </p>
        )
    }

  return (
    <ul>
      { tasks.map(task => (
        // Quien recibe la tarea?
        <TaskItem task={task} key={task.id} />
      )) }
    </ul>
  )
}

export default TaskList
