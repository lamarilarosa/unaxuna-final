import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainHeader from './MainHeader.jsx'
import Porcentajes from './Porcentajes.jsx'
import Whatsapp from './Whatsapp.jsx'
import BannerDelplata from './BannerDelplata.jsx'
import PasosUna from './PasosUna.jsx'
import PreguntasFrecuentes from './PreguntasFrecuentes.jsx'
import FormularioExpandible from './FormularioExpandible.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainHeader />
    <Porcentajes />
    <Whatsapp />
    <BannerDelplata />
    <PasosUna />
    <FormularioExpandible/>
    <PreguntasFrecuentes />
    <App />
  </StrictMode>,
)
