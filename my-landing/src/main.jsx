import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './navbar.jsx'
import Hero from "./hero.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Nav />
    <Hero />
    
    
  </StrictMode>,
)
