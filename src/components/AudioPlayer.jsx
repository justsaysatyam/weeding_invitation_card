import { useState, useRef, useEffect } from 'react'
import { VolumeX } from 'lucide-react'

export default function AudioPlayer({ shouldPlay }) {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (shouldPlay && !hasStarted.current) {
      hasStarted.current = true
      audio.volume = 0
      audio.loop = true
      const p = audio.play()
      if (p) {
        p.then(() => {
          setPlaying(true)
          let v = 0
          const timer = setInterval(() => {
            v = Math.min(v + 0.05, 0.5)
            audio.volume = v
            if (v >= 0.5) clearInterval(timer)
          }, 150)
        }).catch(() => {
          // Autoplay policy: user interaction will trigger
        })
      }
    }
  }, [shouldPlay])

  const toggleSound = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!hasStarted.current) {
      hasStarted.current = true
      audio.volume = 0.5
      audio.loop = true
      audio.play().then(() => setPlaying(true)).catch(() => {})
      setMuted(false)
      return
    }

    if (audio.paused) {
      audio.play().then(() => {
        setPlaying(true)
        setMuted(false)
      })
    } else {
      audio.muted = !audio.muted
      setMuted(audio.muted)
    }
  }

  const isBarAnimated = playing && !muted

  return (
    <>
      <audio ref={audioRef} src="/audio/shehnai.mp3" loop preload="auto" />
      <button
        onClick={toggleSound}
        title={muted ? 'Play Music' : 'Mute Music'}
        aria-label="Toggle Music"
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 9999,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          boxShadow: '0 4px 16px rgba(107, 15, 26, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {muted ? (
          <VolumeX size={18} color="#6B0F1A" />
        ) : (
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '16px' }}>
            <span
              style={{
                width: '3px',
                height: isBarAnimated ? '14px' : '6px',
                backgroundColor: '#6B0F1A',
                borderRadius: '2px',
                animation: isBarAnimated ? 'equalizer1 0.8s ease-in-out infinite alternate' : 'none',
              }}
            />
            <span
              style={{
                width: '3px',
                height: isBarAnimated ? '18px' : '10px',
                backgroundColor: '#6B0F1A',
                borderRadius: '2px',
                animation: isBarAnimated ? 'equalizer2 0.6s ease-in-out infinite alternate 0.2s' : 'none',
              }}
            />
            <span
              style={{
                width: '3px',
                height: isBarAnimated ? '12px' : '5px',
                backgroundColor: '#6B0F1A',
                borderRadius: '2px',
                animation: isBarAnimated ? 'equalizer3 0.7s ease-in-out infinite alternate 0.4s' : 'none',
              }}
            />
            <span
              style={{
                width: '3px',
                height: isBarAnimated ? '16px' : '8px',
                backgroundColor: '#6B0F1A',
                borderRadius: '2px',
                animation: isBarAnimated ? 'equalizer2 0.9s ease-in-out infinite alternate 0.1s' : 'none',
              }}
            />
          </div>
        )}
      </button>
    </>
  )
}
