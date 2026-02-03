// import { useEffect } from 'react'
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Features } from "./components/Features"
import { Equipment } from "./components/Equipment"
import { PhotoCarousel } from "./components/PhotoCarousel"
import { About } from "./components/About"
import { Location } from "./components/Location"
import { Contact } from "./components/Contact"
import { BusinessHours } from "./components/BusinessHours"
import { Reviews } from "./components/Reviews"
import WhatsAppButton from "./components/WhatsAppButton"
import { Footer } from "./components/Footer"

function App() {
  // useEffect(() => {
  //   // evita restauração automática de scroll e garante topo na atualização
  //   if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  //   window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  // }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Equipment />
        <PhotoCarousel />
        <Location />
        <BusinessHours />
        <Contact />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
