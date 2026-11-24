import { useEffect, useRef, useState } from 'react'

const PETALS = ['🌸', '🌼', '✿', '❀', '⚘']

export default function PetalShower({ active }) {
  const [petals, setPetals] = useState([])
  const intervalRef = useRef(null)
  const countRef = useRef(0)

  useEffect(() => {
    if (!active) return
    countRef.current = 0

    intervalRef.current = setInterval(() => {
      if (countRef.current > 80) {
        clearInterval(intervalRef.current)
        return
      }
      const id = Date.now() + Math.random()
      const petal = {
        id,
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        left: Math.random() * 100,
        duration: 3 + Math.random() * 3,
        delay: 0,
        size: 1 + Math.random() * 1.5,
      }
      setPetals(prev => [...prev.slice(-60), petal])
      countRef.current++
    }, 80)

    return () => clearInterval(intervalRef.current)
  }, [active])

  const removePetal = (id) => {
    setTimeout(() => {
      setPetals(prev => prev.filter(p => p.id !== id))
    }, 6000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal absolute select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            top: '-60px',
          }}
          onAnimationEnd={() => removePetal(p.id)}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}

