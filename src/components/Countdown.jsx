import { useState, useEffect } from 'react'

const TARGET = new Date('2026-12-09T07:00:00+05:30')

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET - now
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const mins  = Math.floor((diff / (1000 * 60)) % 60)
  const secs  = Math.floor((diff / 1000) % 60)
  return { days, hours, mins, secs }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'Days',  value: time.days  },
    { label: 'Hours', value: time.hours },
    { label: 'Mins',  value: time.mins  },
    { label: 'Secs',  value: time.secs  },
  ]

  return (
    <div>
      <p style={{
        fontFamily: 'Cinzel, serif',
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        color: '#B8860B',
        marginBottom: '0.75rem',
        textTransform: 'uppercase',
      }}>
        ✦ Counting Down ✦
      </p>
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'center',
        flexWrap: 'nowrap',
      }}>
        {units.map(({ label, value }) => (
          <div key={label} style={{
            background: 'linear-gradient(180deg, #4A0404, #6B0F1A)',
            border: '1px solid rgba(212,175,55,0.5)',
            borderRadius: '8px',
            padding: '0.5rem 0.6rem',
            minWidth: '56px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(74,4,4,0.3)',
          }}>
            <div className="animate-shimmer" style={{
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: '0.2rem',
              background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
              backgroundSize: '200% auto',
              animation: 'shimmerGold 2s linear infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {String(value).padStart(2, '0')}
            </div>
            <div style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.55rem',
              letterSpacing: '0.15em',
              color: 'rgba(243,229,171,0.7)',
              textTransform: 'uppercase',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
