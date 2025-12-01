import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./components/Characters";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                element: <Characters />,
                path: "characters"
            },
            {
                path: "*",
                element: (
                    <div>
                        <h1> 404 </h1>
                        <p> Pagina no encontrada </p>
                    </div>
                )
            }
        ]
    }
])