import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const functionsData = [
  {
    id: 'khaan-peen',
    title: 'Khaan Peen',
    hindi: 'खान पान एवं प्री-वेडिंग भोज',
    dateTime: 'SUN • 07 DEC • 6:00 PM ONWARDS',
    venue: 'Jha Residence, Vill + PO Jagatpur, Madhubani',
    headerBg: 'linear-gradient(135deg, #FF8C42 0%, #F57C00 100%)',
    image: '/images/fest_feast.jpg',
    dressCode: 'Traditional Festive',
    dressColor: '#F57C00',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#D35400" strokeWidth="2" fill="#FFE0B2" />
        <circle cx="20" cy="20" r="10" stroke="#E65100" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="16" cy="18" r="2.5" fill="#E65100" />
        <circle cx="24" cy="18" r="2.5" fill="#E65100" />
        <circle cx="20" cy="24" r="2.5" fill="#E65100" />
      </svg>
    ),
  },
  {
    id: 'haldi',
    title: 'Haldi & Mehendi',
    hindi: 'हल्दी एवं मेहंदी उत्सव',
    dateTime: 'MON • 08 DEC • 10:00 AM ONWARDS',
    venue: 'Jha Residence Courtyard, Vill Jagatpur, Madhubani',
    headerBg: 'linear-gradient(135deg, #FFD54F 0%, #FFB300 100%)',
    image: '/images/fest_haldi.jpg',
    dressCode: 'Wear Yellow / Green',
    dressColor: '#FBC02D',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
        <ellipse cx="20" cy="22" rx="14" ry="10" fill="#FFF9C4" stroke="#F57F17" strokeWidth="2" />
        <path d="M12 20 Q20 28 28 20" stroke="#F57F17" strokeWidth="2" fill="#FBC02D" />
        <circle cx="20" cy="16" r="4" fill="#F57F17" />
        <circle cx="16" cy="14" r="2" fill="#FBC02D" />
        <circle cx="24" cy="14" r="2" fill="#FBC02D" />
      </svg>
    ),
  },
  {
    id: 'baraat',
    title: 'Baraat Prasthan',
    hindi: 'शाही बारात प्रस्थान',
    dateTime: 'WED • 09 DEC • MORNING 9:00 AM',
    venue: 'From Jagatpur to Dehat, Block Rajnagar',
    headerBg: 'linear-gradient(135deg, #3F51B5 0%, #1A237E 100%)',
    image: '/images/fest_baraat.jpg',
    dressCode: 'Royal Sherwani / Kurta',
    dressColor: '#3F51B5',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
        <circle cx="20" cy="20" r="16" fill="#E8EAF6" stroke="#1A237E" strokeWidth="2" />
        <path d="M14 26 L18 16 L24 16 L27 22 L22 26 Z" fill="#3F51B5" />
        <circle cx="24" cy="14" r="3" fill="#D4AF37" />
        <path d="M26 12 L30 8" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'vivah',
    title: 'Shubh Vivah',
    hindi: 'पाणिग्रहण संस्कार एवं सात फेरे',
    dateTime: 'WED • 09 DEC • SHUBH MUHURAT',
    venue: 'Vill + PO Dehat, Block Rajnagar, Dist Madhubani',
    headerBg: 'linear-gradient(135deg, #8B1A2A 0%, #4A0404 100%)',
    image: '/images/fest_vivah.jpg',
    dressCode: 'Bridal & Traditional Silk',
    dressColor: '#8B1A2A',
    icon: (
      <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
        <circle cx="20" cy="20" r="16" fill="#FFEBEE" stroke="#8B1A2A" strokeWidth="2" />
        <path d="M12 28 L28 28 L24 24 L16 24 Z" fill="#D4AF37" />
        <path d="M20 12 C18 16 15 18 18 24 C20 22 23 20 20 12 Z" fill="#E53935" />
        <circle cx="20" cy="19" r="2.5" fill="#FFD54F" />
      </svg>
    ),
  },
]

export default function FestivitiesCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.offsetWidth * 0.82 + 16
    const index = Math.round(el.scrollLeft / itemWidth)
    setActiveIdx(Math.min(Math.max(0, index), functionsData.length - 1))
  }

  const scrollToIndex = (idx) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const itemWidth = el.offsetWidth * 0.82 + 16
    el.scrollTo({ left: idx * itemWidth, behavior: 'smooth' })
    setActiveIdx(idx)
  }

  return (
    <section
      style={{
        padding: '3.5rem 0 4rem',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Top Label matching Frame 14 */}
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
        SWIPE THROUGH THE CELEBRATIONS
      </motion.p>

      {/* Main Heading matching Frame 14 */}
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
        Wedding Festivities
      </motion.h2>

      {/* Horizontal Snap Carousel matching Video Frame 14 & 15 */}
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
        }}
      >
        {functionsData.map((f, i) => (
          <div
            key={f.id}
            style={{
              flex: '0 0 82vw',
              maxWidth: '310px',
              scrollSnapAlign: 'center',
              borderRadius: '24px',
              background: '#FFFFFF',
              boxShadow: '0 12px 36px rgba(107, 15, 26, 0.08), 0 2px 8px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              textAlign: 'center',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Rich Illustrated Top Banner with Circular Floating Icon */}
            <div
              style={{
                background: f.headerBg,
                height: '145px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {f.image && (
                <img
                  src={f.image}
                  alt={f.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              )}
              {/* Soft bottom vignette overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 100%)',
                }}
              />
              {/* Floating circular icon badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2.5px solid #FFF',
                  zIndex: 2,
                }}
              >
                {f.icon}
              </div>
            </div>

            {/* Card Content */}
            <div style={{ padding: '2.2rem 1.25rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  color: '#8B1A2A',
                  fontWeight: 600,
                  margin: '0 0 0.5rem',
                }}
              >
                {f.dateTime}
              </p>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.45rem',
                  color: '#6B0F1A',
                  fontWeight: 700,
                  margin: '0 0 0.2rem',
                }}
              >
                {f.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: '0.85rem',
                  color: '#B8860B',
                  margin: '0 0 0.75rem',
                }}
              >
                {f.hindi}
              </p>

              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.78rem',
                  color: '#666',
                  lineHeight: 1.45,
                  margin: '0 0 1.25rem',
                }}
              >
                {f.venue}
              </p>

              {/* Styled Dress Code Badge matching Frame 14 */}
              <div
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.45rem 1rem',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '5px',
                    backgroundColor: f.dressColor,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.72rem',
                    color: '#444',
                    fontWeight: 500,
                  }}
                >
                  <strong style={{ color: '#222' }}>DRESS CODE:</strong> {f.dressCode}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination indicators matching Frame 14 */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', margin: '0.75rem 0 0.5rem' }}>
        {functionsData.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              height: '6px',
              width: activeIdx === i ? '20px' : '6px',
              borderRadius: '3px',
              backgroundColor: activeIdx === i ? '#6B0F1A' : 'rgba(107, 15, 26, 0.2)',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Swipe prompt matching Frame 14 */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          color: '#8B1A2A',
          opacity: 0.7,
          margin: '0.5rem 0 0',
        }}
      >
        &lt;&gt; SWIPE TO SEE EVERY FUNCTION &lt;&gt;
      </p>
    </section>
  )
}
