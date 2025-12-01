import React from 'react'
import useGetCharacters from '../hooks/useGetCharacters'

function Characters() {

    const {characters, error, loading, onNext, onPrevious } = useGetCharacters()
    console.log(characters)
    // Rederizado condicional
    // ERROR 2: no se aconseja utilizar error directamente
    if(error){
        return <>
            <h2> Error al cargar los personajes </h2>
            <p> {error?.message || String(error)} </p>
        </>
    }

    if(loading){
        return <>
            <h2> Cargando personajes... </h2>
            <img src="./tenor.gif" alt="cargando" />
        </>
    }


  return (
    <div>
    {/* Card de character */}
      <div>
        { characters.map((character) => (
            <div key={character.id} >
            <h2> {character.name} </h2>
            <h2> {character.status} </h2>
            <h2> {character.species} </h2>
            <img src={character.image} alt={character.name} />
            </div>
        )) }
      </div>
    </div>
  )
}

export default Characters
