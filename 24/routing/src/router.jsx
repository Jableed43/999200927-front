// El router o enrutador es un archivo que reune las rutas del proyecto
// define gerarquias de rutas y las urls de cada pagina
// cada ruta tiene 2 parametros:
// 1. Path
// 2. Element
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

// createBrowserRouter posee el listado de rutas disponibles del proyecto
export const router = createBrowserRouter([
    { // path es la url
        path: "/",
        element: <Home />,
        // Esta ruta es la indice, es la pagina principal
        index: true
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "*",
        element: (
            <div>
                <h1> Error 404 </h1>
                <p> Pagina no encontrada </p>
            </div>
        )
    }
])