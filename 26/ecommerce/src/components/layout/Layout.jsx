import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// Layout tiene como beneficio que lo que se repite en todas las paginas
// solo se ubica en un lugar -> header y footer

function Layout() {
  return (
    <>
      <header>
        <nav>
            <NavLink to="/" > Inicio </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Soy footer
      </footer>
    </>
  )
}

export default Layout
