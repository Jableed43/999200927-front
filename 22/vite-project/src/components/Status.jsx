import React from "react";
import { useState } from "react";

function Status() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: "juan",
    edad: 25,
    email: "juan@gmail.com",
  });
    const [claveSeleccionada, setClaveSeleccionada] = useState("nombre");

  function handleIncrement() {
    // Todos los setter pueden acceder al valor actual del estado
    setContador((valorPrevio) => valorPrevio + 1);
  }

  function handleEdad() {
    setUsuario((usuarioPrevio) => ({
      // Spread operator sirve para tomar todos los datos actuales de un objeto o array
      // sirve para modificar solo lo que queremos sin tocar el resto
      // sin el spread operator seteas el valor solo en el dato edad y borras el resto
      // spread operator copia todos los valores existentes y podemos modificar solo lo que queremos
      ...usuarioPrevio,
      edad: usuarioPrevio.edad + 1,
    }));
  }

  const handleInputUsuario = (e) => {
    // validacion por si es edad
    // Recordar que todos los inputs cambian los datos a string, incluso el type: number
    // si edad, debemos pasarlo a numbero, ya que el estado edad es numerico
    const nuevoValor = claveSeleccionada === "edad" ? Number(e.target.value) : e.target.value

    // [claveSeleccionada] me permite elegir una key de mi objeto de usuario
    // para guardar el valor que se ha enviado por input
    setUsuario((usuarioPrevio) => ({
        ...usuarioPrevio,
        [claveSeleccionada]: nuevoValor
    }))

  }

  return (
    <>
      <h2>Ejemplos de useState</h2>

      <section>
        <h3> Estado numerico </h3>
        <p> Contador: {contador} </p>
        <button onClick={handleIncrement}> Incrementar </button>
      </section>

      <section>
        <h3> Estado booleano </h3>
        <p> Estado actual: {activo ? "Activado" : "Inactivo"} </p>
        {/* !valorPrevio Funciona como un toggle  */}
        <button onClick={() => setActivo((valorPrevio) => !valorPrevio)}>
          {activo ? "Desactivar" : "Activar"}
        </button>
      </section>

      <section>
        <h3> Estado como objeto </h3>
        <p>
          Nombre: {usuario.nombre}, Edad: {usuario.edad}, Email: {usuario.email}
        </p>
        <button onClick={handleEdad}> Incrementar la edad </button>
      </section>

      <section>
        <h3> Actualizar propiedades dinamicamente </h3>
        <label htmlFor="clave">Campo a editar:</label>
        <select  onChange={(evento) => setClaveSeleccionada(evento.target.value) } id="clave">
            <option value="nombre">Nombre</option>
            <option value="edad">Edad</option>
            <option value="email">Email</option>
        </select>

        <label htmlFor="dato">Nuevo valor:</label>
        <input id="dato" type={ claveSeleccionada === "edad" ? "number" : "text" }
        // usuario = { nombre: "juan" } - usuario[nombre]
        // para especificar de forma dinamica la key usamos los corchetes
        value={usuario[claveSeleccionada]}
        onChange={handleInputUsuario} />
      </section>
    </>
  );
}

export default Status;
