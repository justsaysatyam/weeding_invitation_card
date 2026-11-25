import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  {
    emoji: '🍽️',
    name: 'Khaan Peen',
    hindi: 'खान पान',
    date: '07 December 2026',
    day: 'Sunday',
    time: 'Evening Onwards',
    venue: 'Jha Residence, Vill + PO Jagatpur\nMadhubani, Bihar',
    dress: 'Traditional Festive',
    dressColor: '#D4AF37',
    gradient: 'linear-gradient(135deg, #6B0F1A 0%, #4A0404 60%, #3D0303 100%)',
    desc: 'Warm pre-wedding feast',
  },
  {
    emoji: '🌼',
    name: 'Haldi & Mehendi',
    hindi: 'हल्दी & मेहंदी',
    date: '08 December 2026',
    day: 'Monday',
    time: '10:00 AM Onwards',
    venue: 'Jha Residence, Vill + PO Jagatpur\nMadhubani, Bihar',
    dress: 'Yellow / Green',
    dressColor: '#D4C137',
    gradient: 'linear-gradient(135deg, #5D3A00 0%, #7A4F00 60%, #9C6400 100%)',
    desc: 'Sacred beauty ceremony',
  },
  {
    emoji: '🐴',
    name: 'Baraat Prasthan',
    hindi: 'बारात प्रस्थान',
    date: '09 December 2026',
    day: 'Wednesday',
    time: 'Morning',
    venue: 'From: Vill + PO Jagatpur\nMadhubani, Bihar',
    dress: 'Royal Sherwani',
    dressColor: '#C0A060',
    gradient: 'linear-gradient(135deg, #1A0A6B 0%, #0F0F4A 60%, #030348 100%)',
    desc: 'The royal procession begins',
  },
  {
    emoji: '🪔',
    name: 'Shubh Vivah',
    hindi: 'शुभ विवाह',
    date: '09 December 2026',
    day: 'Wednesday',
    time: 'Shubh Muhurat',
    venue: 'Vill + PO Dehat, Block + PS Rajnagar\nDist Madhubani, Bihar',
    dress: 'Bridal / Sherwani',
    dressColor: '#FF6B9D',
    gradient: 'linear-gradient(135deg, #6B0F1A 0%, #8B1A2A 50%, #4A0404 100%)',
    desc: 'The sacred union ceremony',
  },
]

export default function FestivitiesCarousel() {
  const scrollRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const scrollTo = (idx) => {
    const container = scrollRef.current
    if (!container) return
    const cards = container.querySelectorAll('.festivity-card')
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setActiveIdx(idx)
    }
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const cardWidth = container.offsetWidth * 0.85 + 16
    const idx = Math.round(scrollLeft / cardWidth)
    setActiveIdx(Math.min(idx, events.length - 1))
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #4A0404 0%, #2D0202 50%, #4A0404 100%)',
      padding: '4rem 0 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background mandala */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.1)',
        pointerEvents: 'none',
      }}/>

      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '2rem', padding: '0 1.5rem' }}
      >
        <h2 className="font-cinzel" style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
          letterSpacing: '0.2em',
          color: '#D4AF37',
          margin: 0,
        }}>
          ✦ WEDDING FESTIVITIES ✦
        </h2>
        <p className="font-poppins" style={{
          fontSize: '0.8rem',
          color: 'rgba(243,229,171,0.7)',
          marginTop: '0.5rem',
          fontStyle: 'italic',
        }}>
          Swipe to explore all events
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
          gap: '1rem',
          padding: '0.5rem 1.5rem 1rem',
        }}
        className="snap-carousel-hide"
      >
        {events.map((event, i) => (
          <div
            key={i}
            className="festivity-card"
            style={{
              scrollSnapAlign: 'start',
              flex: '0 0 85vw',
              maxWidth: '340px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(212,175,55,0.3)',
              background: '#1A0101',
            }}
          >
            {/* Card header */}
            <div style={{
              background: event.gradient,
              padding: '1.75rem 1.5rem 1.5rem',
              textAlign: 'center',
              position: 'relative',
            }}>
              {/* Top gold line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              }}/>

              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{event.emoji}</div>

              <h3 className="font-cinzel" style={{
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                color: '#D4AF37',
                margin: '0 0 0.2rem',
                fontWeight: 700,
              }}>
                {event.name}
              </h3>
              <p className="font-playfair" style={{
                fontSize: '0.9rem',
                color: 'rgba(243,229,171,0.8)',
                margin: '0 0 0.5rem',
                fontStyle: 'italic',
              }}>
                {event.hindi}
              </p>
              <p className="font-poppins" style={{
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
                fontStyle: 'italic',
              }}>
                {event.desc}
              </p>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.25rem 1.5rem 1.5rem', background: '#1A0101' }}>
              {/* Date & Time pills */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.7rem',
                  background: 'rgba(212,175,55,0.15)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#D4AF37',
                  borderRadius: '20px',
                  padding: '0.3rem 0.75rem',
                  letterSpacing: '0.05em',
                }}>
                  📅 {event.date}
                </span>
                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.7rem',
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.3)',
                  color: '#F3E5AB',
                  borderRadius: '20px',
                  padding: '0.3rem 0.75rem',
                }}>
                  🕐 {event.time}
                </span>
              </div>

              {/* Venue */}
              <div style={{ marginBottom: '1rem' }}>
                <p className="font-poppins" style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(212,175,55,0.7)',
                  textTransform: 'uppercase',
                  margin: '0 0 0.3rem',
                }}>
                  Venue
                </p>
                <p className="font-poppins" style={{
                  fontSize: '0.8rem',
                  color: 'rgba(243,229,171,0.9)',
                  margin: 0,
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}>
                  {event.venue}
                </p>
              </div>

              {/* Dress code badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: `linear-gradient(135deg, ${event.dressColor}20, ${event.dressColor}10)`,
                border: `1px solid ${event.dressColor}50`,
                borderRadius: '20px',
                padding: '0.35rem 1rem',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: event.dressColor,
                }}/>
                <span style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  color: event.dressColor,
                  fontWeight: 600,
                }}>
                  Dress Code: {event.dress}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '0.5rem 0 1rem' }}>
        <button
          onClick={() => scrollTo(Math.max(0, activeIdx - 1))}
          disabled={activeIdx === 0}
          style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: activeIdx === 0 ? 'rgba(212,175,55,0.2)' : 'linear-gradient(135deg, #D4AF37, #B8860B)',
            border: '1px solid rgba(212,175,55,0.5)',
            color: activeIdx === 0 ? 'rgba(212,175,55,0.5)' : '#4A0404',
            cursor: activeIdx === 0 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <ChevronLeft size={18}/>
        </button>
        <button
          onClick={() => scrollTo(Math.min(events.length - 1, activeIdx + 1))}
          disabled={activeIdx === events.length - 1}
          style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: activeIdx === events.length - 1 ? 'rgba(212,175,55,0.2)' : 'linear-gradient(135deg, #D4AF37, #B8860B)',
            border: '1px solid rgba(212,175,55,0.5)',
            color: activeIdx === events.length - 1 ? 'rgba(212,175,55,0.5)' : '#4A0404',
            cursor: activeIdx === events.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <ChevronRight size={18}/>
        </button>
      </div>

      {/* Pagination dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: activeIdx === i ? '20px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: activeIdx === i
                ? 'linear-gradient(90deg, #D4AF37, #F3E5AB)'
                : 'rgba(212,175,55,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
