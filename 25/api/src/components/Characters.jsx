import React from 'react'
import useGetCharacters from '../hooks/useGetCharacters'

function Characters() {

    const {characters, error, loading, onNext, onPrevious, info } = useGetCharacters()
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

   const handleNext = () => {
    onNext()
    window.scrollTo({top: 0, behavior: 'smooth'})
   }

    const handlePrev = () => {
    onPrevious()
    window.scrollTo({top: 0, behavior: 'smooth'})
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
      {/* && significa que ambos terminos deben ser true */}
      { info.prev && <button onClick={handlePrev} > Ir Atras </button> }
      { info.next && <button onClick={handleNext} > Ir Adelante </button> }
    </div>
  )
}

export default Characters
