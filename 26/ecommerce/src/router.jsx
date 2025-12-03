import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home"
import Products from "./components/pages/Products";

// Que tiene siempre una ruta?
// path y element

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // que home sea children significa que va a ir dentro de Outlet del Layout
      {
        index: true,
        element: <Home />,
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
        ),
      },
    ],
  },
]);
