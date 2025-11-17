import React from 'react'

function Mapeo() {
    const estudiantes = [
        { id: 1, nombre: "Ana", curso: "matematicas", nota: 9 },
        { id: 2, nombre: "Luis", curso: "programacion", nota: 8 },
        { id: 3, nombre: "Pedro", curso: "musica", nota: 10 },
        { id: 4, nombre: "Carla", curso: "literatura", nota: 8 },
    ]

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

  return (
    <>
      <section>
        <h3> Mapeo de array </h3>
        {/* Cuando mapeas necesitas un contenedor dentro del cual vas a mapear
        Tambien necesitas elementos hijos sobre los que vas a mapear */}
        <ul>
            {/* El map de react en el bloque de codigo usa parentesis y no llaves */}
            {/* estudiante es el item (objeto) individual del listado de estudiantes */}
            { estudiantes.map((estudiante) => (
                <li key={estudiante.id}>
                    <strong> {estudiante.nombre} </strong> -
                    curso: {estudiante.curso} -
                    nota: { estudiante.nota }
                </li>
            )) }
        </ul>
      </section>

      <section>
        <h3> Mapeo de numeros </h3>
        {numeros.map((numero, indice) => (
            <ul key={indice} >
                <li> {numero} </li>
            </ul>
        ) )}
      </section>

      <section>
        <h3> Mapeo de numeros - multiplicar </h3>
        {numeros.map((numero, indice) => (
            <ul key={indice} >
                <li> {numero} x 2 = {numero * 2} </li>
            </ul>
        ) )}
      </section>
    </>
  )
}

export default Mapeo
