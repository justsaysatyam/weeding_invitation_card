import { useState, useRef } from 'react'

function GaneshaCrest() {
  return (
    <svg viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="goldGleam" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </radialGradient>
      </defs>
      {/* Outer circular dotted ring */}
      <circle cx="50" cy="50" r="44" stroke="url(#goldGleam)" strokeWidth="1.5" strokeDasharray="2 3" fill="none" opacity="0.8" />
      <circle cx="50" cy="50" r="40" stroke="url(#goldGleam)" strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Crown / Mukut */}
      <path d="M43 28 L50 16 L57 28 Z" fill="url(#goldGleam)" />
      <polygon points="50,14 47,24 53,24" fill="#FFF2B2" />
      
      {/* Ears */}
      <path d="M38 32 C26 30 26 46 38 48" stroke="url(#goldGleam)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M62 32 C74 30 74 46 62 48" stroke="url(#goldGleam)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Head & Trunk */}
      <path d="M42 30 C42 26 58 26 58 30 C58 38 48 42 48 54 C48 64 56 65 58 61" stroke="url(#goldGleam)" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Tilak */}
      <line x1="50" y1="26" x2="50" y2="34" stroke="#FFF2B2" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="36" r="1.5" fill="#C2185B" />

      {/* Tusk */}
      <line x1="43" y1="46" x2="47" y2="46" stroke="url(#goldGleam)" strokeWidth="2" strokeLinecap="round" />

      {/* Modak */}
      <circle cx="62" cy="56" r="3.5" fill="url(#goldGleam)" />
      <circle cx="62" cy="56" r="1.5" fill="#FFF2B2" />
    </svg>
  )
}

export default function BookCover({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)
  const [opened, setOpened] = useState(false)
  const clicked = useRef(false)

  const handleTap = () => {
    if (clicked.current) return
    clicked.current = true
    setIsOpening(true)
    onOpen()
    setTimeout(() => {
      setOpened(true)
    }, 1100)
  }

  if (opened) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #FFF6F8 0%, #FAF0F2 100%)',
        perspective: '1400px',
        overflow: 'hidden',
        padding: '1.5rem',
      }}
      onClick={handleTap}
    >
      {/* 3D Book Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          height: '490px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 1.1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease 0.9s',
          transformOrigin: 'left center',
          transform: isOpening ? 'rotateY(-140deg) scale(0.95)' : 'rotateY(0deg) scale(1)',
          opacity: isOpening ? 0.3 : 1,
          cursor: 'pointer',
          borderRadius: '16px',
          boxShadow: isOpening
            ? '0 30px 60px rgba(74, 4, 4, 0.2)'
            : '0 20px 50px rgba(107, 15, 26, 0.28), 0 0 0 1px rgba(212, 175, 55, 0.3)',
        }}
      >
        {/* Book Front Cover (Maroon with Gold Filigree) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #7A111E 0%, #5E0C17 40%, #4A0404 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            textAlign: 'center',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Gold Filigree Outer Border */}
          <div
            style={{
              position: 'absolute',
              inset: '12px',
              border: '1.5px solid rgba(212, 175, 55, 0.7)',
              borderRadius: '10px',
              pointerEvents: 'none',
            }}
          />
          {/* Gold Filigree Inner Border */}
          <div
            style={{
              position: 'absolute',
              inset: '18px',
              border: '1px solid rgba(243, 229, 171, 0.35)',
              borderRadius: '6px',
              pointerEvents: 'none',
            }}
          />

          {/* Corner Floral Ornaments */}
          <div style={{ position: 'absolute', top: '14px', left: '14px', width: '22px', height: '22px', borderTop: '2.5px solid #D4AF37', borderLeft: '2.5px solid #D4AF37' }} />
          <div style={{ position: 'absolute', top: '14px', right: '14px', width: '22px', height: '22px', borderTop: '2.5px solid #D4AF37', borderRight: '2.5px solid #D4AF37' }} />
          <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '22px', height: '22px', borderBottom: '2.5px solid #D4AF37', borderLeft: '2.5px solid #D4AF37' }} />
          <div style={{ position: 'absolute', bottom: '14px', right: '14px', width: '22px', height: '22px', borderBottom: '2.5px solid #D4AF37', borderRight: '2.5px solid #D4AF37' }} />

          {/* Spine Highlight on the Left */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '18px',
              background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(212,175,55,0.2) 50%, transparent 100%)',
              borderTopLeftRadius: '16px',
              borderBottomLeftRadius: '16px',
            }}
          />

          {/* Sacred Ganesha Emblem */}
          <div style={{ marginBottom: '1.25rem', transform: 'scale(1.05)' }}>
            <GaneshaCrest />
          </div>

          {/* Shloka */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '0.8rem',
              color: '#F3E5AB',
              letterSpacing: '0.12em',
              margin: '0 0 1rem',
              opacity: 0.9,
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          {/* SHUBH VIVAAH */}
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '1.9rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              lineHeight: 1.2,
              margin: '0 0 0.5rem',
              background: 'linear-gradient(135deg, #FFF2B2 0%, #D4AF37 50%, #FAF0BE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            SHUBH VIVAAH
          </h1>

          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '0.68rem',
              letterSpacing: '0.28em',
              color: 'rgba(243, 229, 171, 0.85)',
              textTransform: 'uppercase',
              margin: '0 0 1.2rem',
            }}
          >
            A Wedding Invitation
          </p>

          {/* Gold Decorative Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '120px', margin: '0 auto 1.2rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '10px' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
          </div>

          {/* Couple Names */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1.45rem',
              color: '#FFF5F7',
              margin: '0 0 0.4rem',
              letterSpacing: '0.04em',
            }}
          >
            Bipin &amp; Anjali
          </p>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(243, 229, 171, 0.8)',
              letterSpacing: '0.15em',
              margin: 0,
            }}
          >
            09 • 12 • 2026
          </p>

          {/* Subtle Tap to Open Prompt */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            <p
              className="animate-pulse-text"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: '#FFF2B2',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              ✦ TAP TO OPEN ✦
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
