import { useEffect, useRef } from 'react'

const PETALS = ['🌸', '🌹', '🏵️', '🌺', '✿']
const COLORS = ['#FCE4EC', '#D4AF37', '#F8BBD0', '#FFF5F5', '#F3E5AB']

function createPetal(container) {
  const petal = document.createElement('div')
  const symbol = PETALS[Math.floor(Math.random() * PETALS.length)]
  const size = 14 + Math.random() * 16
  const left = Math.random() * 100
  const delay = Math.random() * 2
  const duration = 5 + Math.random() * 5
  const opacity = 0.5 + Math.random() * 0.5

  petal.textContent = symbol
  petal.style.cssText = `
    position: fixed;
    top: -40px;
    left: ${left}vw;
    font-size: ${size}px;
    opacity: ${opacity};
    pointer-events: none;
    z-index: 9998;
    animation: petalFall ${duration}s ${delay}s linear forwards;
    filter: drop-shadow(0 2px 4px rgba(212,175,55,0.3));
  `

  container.appendChild(petal)
  setTimeout(() => {
    if (petal.parentNode) petal.parentNode.removeChild(petal)
  }, (duration + delay) * 1000 + 500)
}

export default function PetalShower() {
  const containerRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Initial burst
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createPetal(container), i * 120)
    }

    // Continuous spawn
    intervalRef.current = setInterval(() => {
      const count = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < count; i++) createPetal(container)
    }, 400)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9998,
        overflow: 'hidden',
      }}
    />
  )
}
