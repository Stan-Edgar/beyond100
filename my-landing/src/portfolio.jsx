import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './navbar.jsx';
import Slider from "./slider.jsx"
import Footer from "./footer.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Nav />
    <Slider isPortfolio />
    <Footer />

  </StrictMode>,
)