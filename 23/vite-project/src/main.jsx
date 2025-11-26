import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from "../app/store.js"

// Configuramos el provider del estado global a traves del store
// de esta forma nuestros estados globales se encuentran disponible en toda la aplicacion

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </StrictMode>,
)
