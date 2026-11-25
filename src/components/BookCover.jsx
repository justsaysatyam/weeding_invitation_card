import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GaneshaIcon() {
  return (
    <svg viewBox="0 0 120 120" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3E5AB"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </radialGradient>
      </defs>
      {/* Head/Crown */}
      <ellipse cx="60" cy="45" rx="28" ry="30" fill="url(#gGold)" opacity="0.95"/>
      {/* Crown spikes */}
      <polygon points="60,8 55,22 65,22" fill="#D4AF37"/>
      <polygon points="45,12 42,26 52,24" fill="#D4AF37"/>
      <polygon points="75,12 78,26 68,24" fill="#D4AF37"/>
      {/* Ears */}
      <ellipse cx="30" cy="48" rx="12" ry="16" fill="#D4AF37"/>
      <ellipse cx="90" cy="48" rx="12" ry="16" fill="#D4AF37"/>
      <ellipse cx="30" cy="48" rx="8" ry="11" fill="#B8860B" opacity="0.3"/>
      <ellipse cx="90" cy="48" rx="8" ry="11" fill="#B8860B" opacity="0.3"/>
      {/* Eyes */}
      <circle cx="50" cy="40" r="5" fill="#4A0404"/>
      <circle cx="70" cy="40" r="5" fill="#4A0404"/>
      <circle cx="51" cy="39" r="2" fill="white"/>
      <circle cx="71" cy="39" r="2" fill="white"/>
      {/* Third eye */}
      <ellipse cx="60" cy="32" rx="4" ry="2.5" fill="#D4AF37" stroke="#B8860B" strokeWidth="0.5"/>
      {/* Trunk */}
      <path d="M60 60 Q40 70 45 85 Q50 95 55 90" stroke="#D4AF37" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="60" cy="90" rx="22" ry="20" fill="url(#gGold)" opacity="0.9"/>
      {/* Arms */}
      <line x1="40" y1="80" x2="25" y2="95" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
      <line x1="80" y1="80" x2="95" y2="95" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round"/>
      {/* Hands with items */}
      <circle cx="22" cy="97" r="6" fill="#D4AF37" opacity="0.8"/>
      <circle cx="98" cy="97" r="6" fill="#D4AF37" opacity="0.8"/>
      {/* Navel */}
      <circle cx="60" cy="88" r="4" fill="#B8860B" opacity="0.4"/>
      {/* Anklet dots */}
      <circle cx="45" cy="108" r="2" fill="#D4AF37"/>
      <circle cx="55" cy="110" r="2" fill="#D4AF37"/>
      <circle cx="65" cy="110" r="2" fill="#D4AF37"/>
      <circle cx="75" cy="108" r="2" fill="#D4AF37"/>
    </svg>
  )
}

export default function BookCover({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const hasClicked = useRef(false)

  const handleClick = () => {
    if (hasClicked.current) return
    hasClicked.current = true
    setOpening(true)
    setTimeout(() => onOpen(), 1400)
  }

  return (
    <div className="book-scene" onClick={handleClick}>
      {/* Book cover */}
      <div className={`book-cover ${opening ? 'opening' : ''}`} style={{
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(139,26,42,0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 70%, rgba(107,15,26,0.6) 0%, transparent 50%),
          linear-gradient(135deg, #6B0F1A 0%, #4A0404 30%, #3D0303 50%, #4A0404 70%, #6B0F1A 100%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}>
        {/* Leather texture overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 10px)`,
          pointerEvents: 'none',
        }}/>

        {/* Gold border - outer */}
        <div style={{
          position: 'absolute', inset: '12px',
          border: '2px solid rgba(212,175,55,0.5)',
          borderRadius: '4px',
          pointerEvents: 'none',
        }}/>
        {/* Gold border - inner */}
        <div style={{
          position: 'absolute', inset: '20px',
          border: '1px solid rgba(212,175,55,0.3)',
          borderRadius: '2px',
          pointerEvents: 'none',
        }}/>

        {/* Corner ornaments */}
        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: i < 2 ? '10px' : 'auto',
            bottom: i >= 2 ? '10px' : 'auto',
            left: i % 2 === 0 ? '10px' : 'auto',
            right: i % 2 === 1 ? '10px' : 'auto',
            width: '50px', height: '50px',
            border: `2px solid rgba(212,175,55,0.6)`,
            borderRadius: i === 0 ? '0 0 50% 0' : i === 1 ? '0 0 0 50%' : i === 2 ? '0 50% 0 0' : '50% 0 0 0',
            pointerEvents: 'none',
          }}/>
        ))}

        {/* Left spine binding */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '28px',
          background: 'linear-gradient(90deg, #2D0202, #4A0404)',
          borderRight: '2px solid rgba(212,175,55,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: '2px', height: '60%', background: 'linear-gradient(180deg, transparent, #D4AF37, transparent)' }}/>
        </div>

        {/* Content */}
        <div style={{ textAlign: 'center', padding: '0 2.5rem', paddingLeft: '3.5rem', zIndex: 1 }}>
          {/* Ganesha */}
          <div style={{ marginBottom: '1rem' }}>
            <GaneshaIcon />
          </div>

          {/* Om symbol */}
          <div style={{
            fontSize: '1.2rem', color: '#D4AF37', marginBottom: '0.5rem',
            fontFamily: 'serif', opacity: 0.8,
          }}>
            ॥ ॐ गणेशाय नमः ॥
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.75rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }}/>
            <div style={{ color: '#D4AF37', fontSize: '1rem' }}>✦</div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}/>
          </div>

          {/* SHUBH VIVAAH */}
          <h1 className="font-cinzel animate-shimmer" style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            letterSpacing: '0.15em',
            margin: '0.25rem 0',
            lineHeight: 1.1,
          }}>
            SHUBH VIVAAH
          </h1>

          {/* Couple names */}
          <div style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
            color: '#F3E5AB',
            margin: '0.5rem 0',
            fontStyle: 'italic',
            letterSpacing: '0.08em',
          }}>
            Bipin ♦ Anjali
          </div>

          {/* Date */}
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.85rem',
            color: 'rgba(243,229,171,0.8)',
            letterSpacing: '0.2em',
            marginTop: '0.5rem',
          }}>
            9TH DECEMBER 2026
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }}/>
            <div style={{ color: '#D4AF37', fontSize: '1rem' }}>❋</div>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}/>
          </div>

          {/* Tap prompt */}
          {!opening && (
            <div className="animate-pulse-text" style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.75rem',
              color: 'rgba(243,229,171,0.9)',
              letterSpacing: '0.3em',
              marginTop: '1.5rem',
              textTransform: 'uppercase',
            }}>
              ✦ TAP TO OPEN ✦
            </div>
          )}

          {opening && (
            <div style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.75rem',
              color: 'rgba(243,229,171,0.9)',
              letterSpacing: '0.2em',
              marginTop: '1.5rem',
              animation: 'fadeIn 0.3s ease',
            }}>
              🌸 Opening...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
