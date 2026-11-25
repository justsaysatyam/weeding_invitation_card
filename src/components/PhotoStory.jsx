import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const photos = [
  {
    src: '/images/couple.jpg',
    caption: 'A Love Written in Stars 💫',
    rotate: '-2deg',
    alt: 'Bipin & Anjali together',
  },
  {
    src: '/images/bride.jpg',
    caption: 'She is the Melody 🌸',
    rotate: '1.5deg',
    alt: 'Anjali - The Bride',
  },
  {
    src: '/images/groom.jpg',
    caption: 'He is the Rhythm 🎵',
    rotate: '-1deg',
    alt: 'Bipin - The Groom',
  },
]

export default function PhotoStory() {
  const scrollRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const handleScroll = () => {
    const c = scrollRef.current
    if (!c) return
    const idx = Math.round(c.scrollLeft / (c.offsetWidth * 0.75 + 16))
    setActiveIdx(Math.min(idx, photos.length - 1))
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFF5F5 0%, #FCE4EC 50%, #FFF5F5 100%)',
      padding: '4rem 0 3rem',
      textAlign: 'center',
    }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ marginBottom: '2.5rem', padding: '0 1.5rem' }}
      >
        <h2 className="font-playfair" style={{
          fontSize: 'clamp(1.5rem, 6vw, 2.2rem)',
          color: '#4A0404',
          fontStyle: 'italic',
          margin: '0 0 0.5rem',
        }}>
          Our Story
        </h2>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          maxWidth: '250px', margin: '0 auto',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }}/>
          <span style={{ color: '#D4AF37', fontSize: '1rem' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}/>
        </div>
        <p className="font-poppins" style={{
          fontSize: '0.8rem',
          color: '#6B0F1A',
          opacity: 0.7,
          margin: '0.75rem 0 0',
          fontStyle: 'italic',
        }}>
          Swipe through our journey ♥
        </p>
      </motion.div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          gap: '1.5rem',
          padding: '1rem 2rem 2rem',
          alignItems: 'center',
        }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: '0deg' }}
            style={{
              scrollSnapAlign: 'center',
              flex: '0 0 72vw',
              maxWidth: '280px',
              transform: `rotate(${photo.rotate})`,
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
          >
            {/* Polaroid card */}
            <div style={{
              background: 'white',
              padding: '0.75rem 0.75rem 2.5rem',
              boxShadow: '0 8px 30px rgba(74,4,4,0.2), 0 2px 8px rgba(0,0,0,0.1), 0 0 0 1px rgba(212,175,55,0.3)',
              borderRadius: '2px',
            }}>
              <div style={{
                width: '100%',
                paddingTop: '125%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1px',
              }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                {/* Soft overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 70%, rgba(255,245,245,0.1) 100%)',
                }}/>
              </div>

              {/* Caption */}
              <p className="font-playfair" style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: '#4A0404',
                margin: '0.6rem 0 0',
                textAlign: 'center',
                lineHeight: 1.4,
              }}>
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
        {photos.map((_, i) => (
          <div
            key={i}
            style={{
              width: activeIdx === i ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: activeIdx === i
                ? 'linear-gradient(90deg, #D4AF37, #B8860B)'
                : 'rgba(212,175,55,0.35)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
