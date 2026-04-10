import Lenis from 'lenis'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Smooth scroll — autoRaf:true means Lenis drives its own RAF loop
const lenis = new Lenis({ autoRaf: true })

// Expose on window so Navbar can call lenis.scrollTo() for anchor links
declare global {
  interface Window { lenis: Lenis }
}
window.lenis = lenis

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
