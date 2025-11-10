import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LikeCounter from './LikeCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LikeCounter />
  </StrictMode>,
)
