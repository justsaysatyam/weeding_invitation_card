import { useRef, useState, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

// Free shehnai/Indian instrumental — multiple fallback sources
const AUDIO_SOURCES = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // fallback placeholder
  '/audio/shehnai.mp3',
]

export default function AudioPlayer({ shouldPlay, onReady }) {
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0

    // Try loading sources in order
    const trySource = (index) => {
      if (index >= AUDIO_SOURCES.length) return
      audio.src = AUDIO_SOURCES[index]
      audio.load()
    }
    trySource(0)

    audio.addEventListener('canplaythrough', () => {
      setLoaded(true)
      if (onReady) onReady(audio)
    })
    audio.addEventListener('error', () => trySource(1))

    audioRef.current = audio

    // Attempt autoplay (browser may block this — handled by gesture in curtain)
    audio.play().then(() => {
      fadeIn(audio)
    }).catch(() => {
      // Will be triggered by user gesture instead
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const fadeIn = (audio) => {
    let vol = 0
    const id = setInterval(() => {
      vol = Math.min(vol + 0.02, 0.5)
      audio.volume = vol
      if (vol >= 0.5) clearInterval(id)
    }, 100)
  }

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().then(() => fadeIn(audioRef.current)).catch(() => {})
    }
  }, [shouldPlay])

  const toggle = () => {
    if (!audioRef.current) return
    if (muted) {
      audioRef.current.muted = false
      setMuted(false)
    } else {
      audioRef.current.muted = true
      setMuted(true)
    }
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-[1000] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
        boxShadow: '0 4px 15px rgba(212,175,55,0.5)',
      }}
      title={muted ? 'Unmute Music' : 'Mute Music'}
    >
      {muted
        ? <VolumeX size={18} className="text-maroon" color="#580B18" />
        : <Volume2 size={18} className="text-maroon" color="#580B18" />
      }
    </button>
  )
}

