import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function EjemplosUseEffect() {
  const [contador, setContador] = useState(0);
  const [activo, setActivo] = useState(false)

  // Ejemplo 1
  // UseEffect sin dependencias
  // Sin array de dependencias cada vez que se actualiza el estado del componente vuelve a ejecutarlo
//   useEffect(() => {
//     console.log("Componente montado");

//     const datosGuardados = localStorage.getItem("contador");
//     if (datosGuardados) {
//       console.log("datos guardados", datosGuardados);
//     }
//   });

  // Si tengo array de dependencias vacio, solo se ejecuta cuando se monta el componente
  useEffect(() => {
    console.log("Componente montado");

    const datosGuardados = localStorage.getItem("contador");
    if (datosGuardados) {
      console.log("datos guardados", datosGuardados);
    }
  }, []);

  // El array de dependencias lo que significa es:
  // Todo lo que se encuentre dentro si se actualiza
  // vuelve a ejecutar el efecto
  // vigila lo que esta dentro del array de dependencias y si cambia ejecuta el efecto
    useEffect(() => {
        console.log("El contador cambio", contador)
        localStorage.setItem("contador", contador)
  }, [contador]);

  // con retorno, se usa como logica de limpieza
  useEffect(() => {
    if(!activo){
        return
    }
    console.log("Iniciando timer...")

    // Creando un intervalo
    const timer = setInterval(() => {
        console.log("Timer ejecutandose...")
        setContador((prev) => prev + 1)
    }, 1000)

    // Lleva logica de limpieza
    return () => {
        console.log("Limpiando timer...")
        clearInterval(timer)
        setContador(0)
    }

  }, [activo])

  return (
    <div>
      <h2>UseEffect</h2>
      <div>
        <p> Contador: {contador} </p>
        <button onClick={() => setContador(contador + 1)}> Incrementar </button>
      </div>

      <button onClick={() => setActivo(!activo)} > { activo ? "Pausar" : "Iniciar" }  </button>
    </div>
  );
}

export default EjemplosUseEffect;
