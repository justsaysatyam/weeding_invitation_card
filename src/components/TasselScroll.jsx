import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const TARGET_DATE = new Date('2026-12-09T07:00:00+05:30')

function calculateCountdown() {
  const diff = TARGET_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

export default function TasselScroll() {
  const [unrolled, setUnrolled] = useState(false)
  const [countdown, setCountdown] = useState(calculateCountdown())
  const dragY = useMotionValue(0)
  const tasselRotation = useTransform(dragY, [0, 150], [0, 15])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const triggerReveal = () => {
    if (unrolled) return
    setUnrolled(true)
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#6B0F1A', '#F8BBD0', '#FFF2B2', '#E91E63'],
    })
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 60 || info.point.y > 60) {
      triggerReveal()
    } else {
      dragY.set(0)
    }
  }

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bipin%20Weds%20Anjali%20Wedding&dates=20261209T013000Z/20261209T183000Z&details=Shubh%20Vivah%20of%20Bipin%20Chandra%20Jha%20and%20Anjali%20Jha.%20%23BipinWedsAnjali&location=Vill%20Dehat%2C%20Block%20Rajnagar%2C%20Madhubani%2C%20Bihar`

  return (
    <section
      style={{
        padding: '3.5rem 1.25rem 4rem',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Top Label matching Frame 08 */}
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
        SAVE THE DATE
      </motion.p>

      {/* Main Heading */}
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
        Pull to Reveal
      </motion.h2>

      {/* Scroll Wrapper */}
      <div style={{ maxWidth: '340px', margin: '0 auto', position: 'relative' }}>
        {/* Top 3D Golden Cylinder Rod */}
        <div
          style={{
            height: '16px',
            borderRadius: '8px',
            background: 'linear-gradient(180deg, #FAF0BE 0%, #D4AF37 35%, #AA771C 70%, #D4AF37 100%)',
            boxShadow: '0 4px 12px rgba(107, 15, 26, 0.15)',
            position: 'relative',
            zIndex: 3,
            margin: '0 12px',
          }}
        >
          {/* Left Finial Knob */}
          <div
            style={{
              position: 'absolute',
              left: '-14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '24px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #FFF2B2, #D4AF37, #8B6508)',
              boxShadow: '-2px 2px 6px rgba(0,0,0,0.2)',
            }}
          />
          {/* Right Finial Knob */}
          <div
            style={{
              position: 'absolute',
              right: '-14px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '24px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #FFF2B2, #D4AF37, #8B6508)',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
            }}
          />
        </div>

        {/* Unrolling Parchment Body */}
        <motion.div
          animate={{
            height: unrolled ? 'auto' : 0,
            opacity: unrolled ? 1 : 0,
          }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #FFFDF7 0%, #FCF8F0 50%, #FFFDF7 100%)',
            borderLeft: '1.5px solid #D4AF37',
            borderRight: '1.5px solid #D4AF37',
            margin: '0 20px',
            boxShadow: '0 12px 30px rgba(107, 15, 26, 0.1)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ padding: '2rem 1.5rem 2rem' }}>
            {/* Small Om symbol */}
            <p style={{ fontFamily: 'serif', color: '#D4AF37', fontSize: '1.1rem', margin: '0 0 0.5rem' }}>
              ॥ श्री गणेशाय नमः ॥
            </p>

            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.8rem',
                letterSpacing: '0.25em',
                color: '#8B1A2A',
                textTransform: 'uppercase',
                margin: '0 0 0.4rem',
              }}
            >
              WEDNESDAY
            </p>

            {/* Big 9 */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '4.5rem',
                fontWeight: 700,
                color: '#6B0F1A',
                lineHeight: 0.95,
                margin: '0.2rem 0',
              }}
            >
              9
            </h1>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '1.6rem',
                color: '#6B0F1A',
                margin: '0 0 0.2rem',
              }}
            >
              December
            </p>

            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1rem',
                letterSpacing: '0.15em',
                color: '#B8860B',
                margin: '0 0 1.25rem',
              }}
            >
              2026
            </p>

            <div style={{ width: '60px', height: '1px', background: '#D4AF37', margin: '0 auto 1.25rem', opacity: 0.6 }} />

            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.82rem',
                color: '#5C3838',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              <strong>Shubh Vivah &amp; Pheras</strong><br />
              Vill + PO Dehat, Block Rajnagar<br />
              Dist — Madhubani, Bihar
            </p>
          </div>
        </motion.div>

        {/* Bottom Roller Rod (moves down as parchment unrolls) */}
        <div
          style={{
            height: '14px',
            borderRadius: '7px',
            background: 'linear-gradient(180deg, #FAF0BE 0%, #D4AF37 35%, #AA771C 70%, #D4AF37 100%)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            position: 'relative',
            zIndex: 3,
            margin: '0 14px',
          }}
        >
          {/* Left Knob */}
          <div
            style={{
              position: 'absolute',
              left: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '15px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #FFF2B2, #D4AF37, #8B6508)',
            }}
          />
          {/* Right Knob */}
          <div
            style={{
              position: 'absolute',
              right: '-12px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '15px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #FFF2B2, #D4AF37, #8B6508)',
            }}
          />
        </div>

        {/* Hanging Silk Cord & Tassel matching Frame 08 & 10 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '-2px',
            cursor: unrolled ? 'default' : 'grab',
          }}
          onClick={triggerReveal}
        >
          {/* Silk cord */}
          <div
            style={{
              width: '2px',
              height: '26px',
              backgroundColor: '#6B0F1A',
            }}
          />

          {/* Draggable Tassel Ornament */}
          <motion.div
            drag={unrolled ? false : 'y'}
            dragConstraints={{ top: 0, bottom: 120 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{
              y: dragY,
              rotate: tasselRotation,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              touchAction: 'none',
            }}
            whileHover={!unrolled ? { scale: 1.08 } : {}}
            whileTap={!unrolled ? { scale: 0.95 } : {}}
          >
            {/* Gold bead */}
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #FFF2B2, #D4AF37, #8B6508)',
                marginBottom: '1px',
              }}
            />
            {/* Maroon bead cap */}
            <div
              style={{
                width: '16px',
                height: '12px',
                borderRadius: '8px 8px 3px 3px',
                backgroundColor: '#6B0F1A',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            />
            {/* Silk Threads Fringes */}
            <div style={{ display: 'flex', gap: '1.5px', marginTop: '1px' }}>
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '1.5px',
                    height: `${28 + (i % 3) * 3}px`,
                    backgroundColor: i % 2 === 0 ? '#6B0F1A' : '#D4AF37',
                    borderRadius: '1px',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Prompt text below tassel */}
          {!unrolled && (
            <motion.p
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.72rem',
                color: '#8B1A2A',
                marginTop: '0.6rem',
                letterSpacing: '0.04em',
              }}
            >
              Drag the tassel down
            </motion.p>
          )}
        </div>
      </div>

      {/* Countdown and Calendar Section matching Video Frame 10 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        style={{ marginTop: '2.5rem' }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.95rem',
            color: '#6B0F1A',
            margin: '0 0 1rem',
          }}
        >
          See you on Wednesday, 9 December 2026
        </p>

        {/* Clean Single Row Countdown matching Frame 10: 82 DAYS • 12 HRS • 49 MIN • 35 SEC */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontFamily: "'Playfair Display', serif",
            color: '#6B0F1A',
            fontSize: 'clamp(1rem, 4.2vw, 1.25rem)',
            fontWeight: 700,
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
          }}
        >
          <span>
            {countdown.days}{' '}
            <span style={{ fontSize: '0.65rem', fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#8B1A2A' }}>
              DAYS
            </span>
          </span>
          <span style={{ color: '#D4AF37' }}>•</span>
          <span>
            {String(countdown.hours).padStart(2, '0')}{' '}
            <span style={{ fontSize: '0.65rem', fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#8B1A2A' }}>
              HRS
            </span>
          </span>
          <span style={{ color: '#D4AF37' }}>•</span>
          <span>
            {String(countdown.mins).padStart(2, '0')}{' '}
            <span style={{ fontSize: '0.65rem', fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#8B1A2A' }}>
              MIN
            </span>
          </span>
          <span style={{ color: '#D4AF37' }}>•</span>
          <span>
            {String(countdown.secs).padStart(2, '0')}{' '}
            <span style={{ fontSize: '0.65rem', fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: '#8B1A2A' }}>
              SEC
            </span>
          </span>
        </div>

        {/* Add to Calendar Button matching Frame 10 */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.75rem 1.8rem',
            borderRadius: '50px',
            border: '1.5px solid #6B0F1A',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(4px)',
            color: '#6B0F1A',
            fontFamily: "'Cinzel', serif",
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(107, 15, 26, 0.08)',
            transition: 'all 0.25s ease',
          }}
        >
          <span>📅</span> ADD TO CALENDAR
        </a>
      </motion.div>
    </section>
  )
}
