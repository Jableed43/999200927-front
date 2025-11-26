import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice.js";

function TaskForm() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      // con trim() limpiamos espacios delante y detras del texto
      const trimmedValue = inputValue.trim();
      // dispatch funciona como setState y hace falta especficicar que metodo usamos
      dispatch(addTask(trimmedValue));
      // limpiamos el input del formulario
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Escriba su tarea</label>
      <input
        type="text"
        id="task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TaskForm;
