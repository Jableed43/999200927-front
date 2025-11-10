import { useEffect, useState } from 'react'
import './LikeCounter.css'

// Los componentes de react (hoy en dia), son funcionales
// Antes eran componentes de clase
function LikeCounter() {
  // Codigo javascipt
  // likeCounter -> estado, conteo de likes
  // setLikeCounter -> funcion que actualiza al estado
  const [ likeCounter, setLikeCounter ] = useState(0)

const load = (storageName, setter) => {
  const saved = localStorage.getItem(storageName)
  if(saved !== null && !isNaN(saved)){
    setter(parseInt(saved))
  }
}

// Ejecuta un "effecto" en ciertos momentos
// carga los likes al refrescar/ ingresar en la pagina
useEffect(() => {
  load("myLikeCount", setLikeCounter)
}, [])

// metodo generico que guarda en localStorage
const save = (storageName, count) => {
  localStorage.setItem(storageName, count)
}

const handleLikeClick = () => {
  const newCount = likeCounter + 1
  // Asignamos nuevo valor al estado
  setLikeCounter(newCount)
  // guardamos el valor del estado en localStorage
  save("myLikeCount", newCount)
}

const handleReset = () => {
  const newCount = 0
  // le pasamos 0 a la cuenta
  setLikeCounter(newCount)
  // guardamos en localStorage el 0
  save("myLikeCount", newCount)
}

  // En el return tenemos HTML
  // <> </> : Fragment sirve para encerrar html en un solo padre
  // sin añadir comportamiento
  return (
    <div className="like-container">
        <h1>¡Dale "Me Gusta"!</h1>
        <div className="like-area">

            <button id="likeButton" onClick={handleLikeClick} >
                <i className="fas fa-heart like-button"></i>
            </button>
            {/* Las llaves se usan para escribir codigo js */}
            <span className="like-count" id="likeCount">{likeCounter}</span>
        </div>
        <button id="resetLikeCount" onClick={handleReset} >Resetear</button>
        <p>Haz clic en el corazón para aumentar el contador.</p>
    </div>
  )
}
// Exportacion del componente
export default LikeCounter
