import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const photosData = [
  {
    src: '/images/couple.jpg',
    caption: 'A Love Written in the Stars 💫',
    date: 'Bipin & Anjali',
  },
  {
    src: '/images/bride.jpg',
    caption: 'She is the Melody to His Song 🌸',
    date: 'The Radiant Bride',
  },
  {
    src: '/images/groom.jpg',
    caption: 'He is the Rhythm of Her Heart 🎵',
    date: 'The Noble Groom',
  },
]

export default function PhotoStory() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.offsetWidth * 0.75 + 16
    const index = Math.round(el.scrollLeft / itemWidth)
    setActiveIdx(Math.min(Math.max(0, index), photosData.length - 1))
  }

  const scrollToIndex = (idx) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.offsetWidth * 0.75 + 16
    el.scrollTo({ left: idx * itemWidth, behavior: 'smooth' })
    setActiveIdx(idx)
  }

  return (
    <section
      style={{
        padding: '3rem 0 4rem',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '0.68rem',
          letterSpacing: '0.3em',
          color: '#8B1A2A',
          textTransform: 'uppercase',
          margin: '0 0 0.4rem',
          fontWeight: 600,
        }}
      >
        OUR MOMENTS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.8rem, 6.5vw, 2.3rem)',
          color: '#6B0F1A',
          margin: '0 0 2rem',
          fontWeight: 700,
        }}
      >
        Our Story
      </motion.h2>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          gap: '16px',
          padding: '0.5rem 1.5rem 1.5rem',
          alignItems: 'center',
        }}
      >
        {photosData.map((item, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 74vw',
              maxWidth: '280px',
              scrollSnapAlign: 'center',
              borderRadius: '16px',
              background: '#FFFFFF',
              boxShadow: '0 12px 30px rgba(107, 15, 26, 0.1), 0 2px 6px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              padding: '12px 12px 18px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              transform: i === 0 ? 'rotate(-1.5deg)' : i === 1 ? 'rotate(1deg)' : 'rotate(-1deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* Photo Box */}
            <div
              style={{
                width: '100%',
                height: '310px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#F7F7F7',
                marginBottom: '14px',
              }}
            >
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
            </div>

            {/* Polaroid Caption */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: '#6B0F1A',
                margin: '0 0 4px',
                lineHeight: 1.35,
              }}
            >
              {item.caption}
            </p>

            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: '#B8860B',
                margin: 0,
              }}
            >
              {item.date}
            </p>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '0.5rem' }}>
        {photosData.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            style={{
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              height: '6px',
              width: activeIdx === i ? '18px' : '6px',
              borderRadius: '3px',
              backgroundColor: activeIdx === i ? '#6B0F1A' : 'rgba(107, 15, 26, 0.2)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
