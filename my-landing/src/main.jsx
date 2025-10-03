import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './navbar.jsx'
import Hero from "./hero.jsx";
import Slider from "./slider.jsx"
import Pricing from "./pricing.jsx";
import Faq from './faq.jsx';
import Cta from "./cta.jsx"
import Footer from "./footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Nav />
    <Hero />
    <Slider />
    <Pricing />
    <Faq />
    <Cta />
    <Footer />
    
  </StrictMode>,
)
