import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../features/task/taskSlice.js";

// el taskItem va a ser cada task individual que vamos a mapear
function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <li>
      <label htmlFor="completed">Marcar completado</label>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        onChange={handleToggle}
        checked={task.completed}
      />
      <span> {task.text} </span>
      <button onClick={handleDelete} >Eliminar</button>
    </li>
  );
}

export default TaskItem;
