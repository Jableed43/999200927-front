import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home"
import Products from "./components/pages/Products";
import CreateProductPage from "./components/pages/CreateProductPage";
import EditProductPage from "./components/pages/EditProductPage";
import RegisterUserPage from "./components/pages/RegisterUserPage";
import LoginUserPage from "./components/pages/LoginUserPage";

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
        path: "/product",
        element: <Products />
      },
      {
        path: "/product/create",
        element: <CreateProductPage />
      },
      {
        path: "/product/edit/:id",
        element: <EditProductPage />
      },
      {
        path: "/user/register",
        element: <RegisterUserPage />
      },
      {
        path: "/user/login",
        element: <LoginUserPage />
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
