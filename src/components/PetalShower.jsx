import { useEffect, useRef } from 'react'

export default function PetalShower() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const petals = ['🌸', '🌺', '💮', '🌹', '🪷']
    let activePetals = 0
    const maxPetals = 22

    const spawnPetal = () => {
      if (activePetals >= maxPetals) return

      const petal = document.createElement('div')
      const symbol = petals[Math.floor(Math.random() * petals.length)]
      const left = Math.random() * 96
      const duration = 6 + Math.random() * 6
      const size = 14 + Math.random() * 12
      const drift = (Math.random() - 0.5) * 60

      petal.innerText = symbol
      petal.style.cssText = `
        position: fixed;
        top: -30px;
        left: ${left}vw;
        font-size: ${size}px;
        opacity: ${0.45 + Math.random() * 0.45};
        pointer-events: none;
        z-index: 99;
        transform: translate3d(0, 0, 0) rotate(${Math.random() * 360}deg);
        transition: transform ${duration}s linear, opacity ${duration}s ease-in;
        filter: drop-shadow(0 2px 4px rgba(107, 15, 26, 0.12));
      `

      container.appendChild(petal)
      activePetals++

      // Animate downward
      requestAnimationFrame(() => {
        petal.style.transform = `translate3d(${drift}px, calc(100vh + 60px), 0) rotate(${Math.random() * 720}deg)`
      })

      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal)
          activePetals--
        }
      }, duration * 1000)
    }

    // Initial batch
    for (let i = 0; i < 8; i++) {
      setTimeout(spawnPetal, i * 350)
    }

    const interval = setInterval(spawnPetal, 700)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99,
        overflow: 'hidden',
      }}
    />
  )
}
