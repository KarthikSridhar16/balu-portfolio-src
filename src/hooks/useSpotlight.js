import { useEffect } from 'react'

/**
 * Attaches a cursor-tracking radial glow to every .spotlight element
 * inside the given container ref (or document if no ref).
 *
 * Usage:
 *   useSpotlight()                     // activates on all .spotlight in document
 *   useSpotlight(containerRef)         // scoped to a specific container
 */
export default function useSpotlight(containerRef = null) {
  useEffect(() => {
    const root = containerRef?.current ?? document

    const cards = root.querySelectorAll('.spotlight')

    const handlers = []

    cards.forEach(card => {
      const handler = e => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--sx', `${e.clientX - rect.left}px`)
        card.style.setProperty('--sy', `${e.clientY - rect.top}px`)
      }
      card.addEventListener('mousemove', handler)
      handlers.push({ card, handler })
    })

    return () => {
      handlers.forEach(({ card, handler }) =>
        card.removeEventListener('mousemove', handler)
      )
    }
  }, [containerRef])
}
