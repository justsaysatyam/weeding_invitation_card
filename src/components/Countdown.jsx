import { useState, useEffect } from 'react'

export default function Countdown({ targetDate, compact = false }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [tick, setTick] = useState(false)

  useEffect(() => {
    const calc = () => {
      const now = new Date()
      const target = new Date(targetDate)
      const diff = Math.max(0, target - now)
      const newTime = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
      setTime(newTime)
      setTick(t => !t)
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const Box = ({ value, label, isSeconds }) => (
    <div className="countdown-box flex flex-col items-center justify-center px-3 py-3 min-w-[64px] flex-1">
      <span
        className="font-cinzel text-gold-shimmer font-bold leading-none countdown-num"
        style={{
          fontSize: compact ? '1.5rem' : '2.2rem',
          transition: 'transform 0.1s ease',
          display: 'block',
          fontFamily: "'Cinzel', serif",
          background: 'linear-gradient(90deg, #B8942A 0%, #F5E06A 25%, #D4AF37 50%, #F5E06A 75%, #B8942A 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 3s linear infinite',
        }}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        className="font-poppins uppercase tracking-widest mt-1.5"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: compact ? '8px' : '10px',
          color: '#D4AF37',
          opacity: 0.85,
          letterSpacing: '0.15em',
        }}
      >
        {label}
      </span>
    </div>
  )

  return (
    <div className="flex gap-2 justify-center w-full max-w-xs mx-auto">
      <Box value={time.days}    label="Days" />
      <Box value={time.hours}   label="Hours" />
      <Box value={time.minutes} label="Mins" />
      <Box value={time.seconds} label="Secs" isSeconds />
    </div>
  )
}
