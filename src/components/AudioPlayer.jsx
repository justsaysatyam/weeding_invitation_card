import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

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
      const playPromise = audio.play()
      if (playPromise) {
        playPromise
          .then(() => {
            setPlaying(true)
            // Fade in volume
            let vol = 0
            const fade = setInterval(() => {
              vol = Math.min(vol + 0.05, 0.4)
              audio.volume = vol
              if (vol >= 0.4) clearInterval(fade)
            }, 150)
          })
          .catch(() => {
            // Autoplay blocked — user will need to tap manually
          })
      }
    }
  }, [shouldPlay])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!hasStarted.current) {
      hasStarted.current = true
      audio.volume = 0.35
      audio.loop = true
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
    audio.muted = !audio.muted
    setMuted(audio.muted)
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/shehnai.mp3" loop preload="auto" />
      <button
        onClick={toggleMute}
        title={muted ? 'Unmute Music' : 'Mute Music'}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          zIndex: 99999,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4AF37, #F3E5AB)',
          border: '2px solid rgba(74,4,4,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(212,175,55,0.5)',
          animation: 'floatBob 3s ease-in-out infinite',
        }}
      >
        {muted ? (
          <VolumeX size={20} color="#4A0404" />
        ) : (
          <Volume2 size={20} color="#4A0404" />
        )}
      </button>
    </>
  )
}
