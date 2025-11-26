import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1> Bienvenido a nuestra primera pagina con rutas </h1>
       <Link to="/products" > Productos </Link>
    </div>
  )
}

export default Home
