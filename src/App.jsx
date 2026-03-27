import { useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Canvas
import ThreeCanvas from './components/canvas/ThreeCanvas'

// UI
import LoadingOverlay from './components/ui/LoadingOverlay'
import Navigation from './components/ui/Navigation'

// Sections
import Hero       from './components/sections/Hero'
import About      from './components/sections/About'
import Skills     from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects   from './components/sections/Projects'
import Education  from './components/sections/Education'
import Footer     from './components/sections/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  /**
   * Called by ThreeCanvas once the boot animation finishes.
   * Kicks off all GSAP entrance animations.
   */
  const handleLoadComplete = useCallback(() => {
    setLoading(false)

    setTimeout(() => {
      // Fade in navigation
      gsap.to('.nav-fade', { opacity: 1, duration: 1.2, ease: 'power2.out' })

      // Hero elements slide up
      gsap.to('.animate-in', {
        y: 0, opacity: 1, duration: 1, stagger: 0.13, ease: 'power3.out',
      })

      // Set initial hidden state for all scroll-reveal elements
      gsap.set('.gs-reveal', { y: 46, opacity: 0, scale: 0.94 })

      // Batch scroll reveals
      ScrollTrigger.batch('.gs-reveal', {
        onEnter: batch =>
          gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.11, duration: 0.75, ease: 'back.out(1.3)', overwrite: true }),
        onLeave: batch =>
          gsap.set(batch, { opacity: 0, y: 46, scale: 0.94, overwrite: true }),
        onEnterBack: batch =>
          gsap.to(batch, { opacity: 1, y: 0, scale: 1, stagger: 0.10, duration: 0.70, ease: 'back.out(1.2)', overwrite: true }),
        onLeaveBack: batch =>
          gsap.set(batch, { opacity: 0, y: 46, scale: 0.94, overwrite: true }),
        start: 'top 87%',
      })
    }, 300)
  }, [])

  return (
    <>
      {/* Fixed 3D background */}
      <ThreeCanvas onLoadComplete={handleLoadComplete} />

      {/* Loading screen */}
      <LoadingOverlay visible={loading} />

      {/* Page content — fades in after loader exits */}
      <div style={{
        opacity: loading ? 0 : 1,
        transition: 'opacity 0.6s ease-in-out',
        position: 'relative',
        zIndex: 1,
      }}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  )
}
