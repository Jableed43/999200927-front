import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>
    <nav>
        {/* Componente link es como la etiqueta a de HTML */}
        <Link to="/" > Inicio </Link>

        {/* NavLink es como Link pero orientado a la nav */}
        <NavLink to="/characters"> Personajes </NavLink>
    </nav>
      </header>

      <main>
        {/* Todo lo que distingue a la pagina y cambia entre paginas
        Texto, imagenes, contenido, titulos, videos, etc... */}
    <Outlet />
      </main>

      <footer>
    Soy un footer
      </footer>
    </>
  )
}

export default Layout
