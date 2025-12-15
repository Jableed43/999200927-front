import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/user/useAuth'

// Layout tiene como beneficio que lo que se repite en todas las paginas
// solo se ubica en un lugar -> header y footer

function Layout() {
  const {user, isAuthenticated, logout} = useAuth()

  const handleLogout = () => {
    logout()
  }
  return (
    <>
      <header>
        <nav>
            <NavLink to="/" > Inicio </NavLink>
            <NavLink to="/product"> Productos </NavLink>
          { isAuthenticated &&  <NavLink to="/product/create"> Crear Producto </NavLink>}
           { !isAuthenticated && <NavLink to="/user/login"> Ingresá </NavLink>}
           { !isAuthenticated && <NavLink to="/user/register"> Registrate </NavLink>}
           { isAuthenticated &&  <button onClick={handleLogout}> Logout </button> }
        </nav>
       {user && <p> ¡¡Bienvenido {user.name}!! </p>} 
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
