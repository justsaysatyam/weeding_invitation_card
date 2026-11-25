import { useState, useRef, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Countdown from './Countdown'

export default function TasselScroll() {
  const [revealed, setRevealed] = useState(false)
  const [dragging, setDragging] = useState(false)
  const dragY = useMotionValue(0)
  const constraintsRef = useRef(null)

  const tasselOpacity = useTransform(dragY, [0, 150], [1, 0.5])
  const hintOpacity = useTransform(dragY, [0, 80], [1, 0])
  const scrollHeight = useTransform(dragY, [100, 180], [0, 1])

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#F3E5AB', '#FCE4EC', '#4A0404', '#F8BBD0', '#fff'],
    })
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#FCE4EC'],
      })
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#4A0404'],
      })
    }, 300)
  }

  const handleDragEnd = (e, info) => {
    if (info.offset.y > 130 && !revealed) {
      setRevealed(true)
      fireConfetti()
    } else {
      dragY.set(0)
    }
    setDragging(false)
  }

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bipin%20Weds%20Anjali&dates=20261209T013000Z/20261209T133000Z&location=Dehat%2C+Rajnagar%2C+Madhubani%2C+Bihar`

  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFF5F5 0%, #FFF8DC 50%, #FFF5F5 100%)',
      padding: '4rem 1.5rem 5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Section title */}
      <motion.h2
        className="font-cinzel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
          letterSpacing: '0.2em',
          color: '#4A0404',
          marginBottom: '2.5rem',
        }}
      >
        ✦ THE WEDDING DATE ✦
      </motion.h2>

      {/* Rod */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          height: '12px',
          background: 'linear-gradient(90deg, #B8860B, #D4AF37, #F3E5AB, #D4AF37, #B8860B)',
          borderRadius: '6px',
          margin: '0 auto',
          maxWidth: '340px',
          boxShadow: '0 2px 12px rgba(212,175,55,0.5), 0 4px 24px rgba(74,4,4,0.1)',
          position: 'relative',
        }}
      >
        {/* Rod end caps */}
        <div style={{
          position: 'absolute', left: '-8px', top: '50%', transform: 'translateY(-50%)',
          width: '16px', height: '20px', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, #F3E5AB, #B8860B)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}/>
        <div style={{
          position: 'absolute', right: '-8px', top: '50%', transform: 'translateY(-50%)',
          width: '16px', height: '20px', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, #F3E5AB, #B8860B)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        }}/>
      </motion.div>

      {/* Silk cord */}
      <div style={{
        width: '3px',
        height: revealed ? '0' : '40px',
        background: 'linear-gradient(180deg, #D4AF37, #B8860B)',
        margin: '0 auto',
        transition: 'height 0.5s ease',
      }}/>

      {/* Draggable tassel */}
      {!revealed && (
        <div ref={constraintsRef} style={{ position: 'relative', margin: '0 auto', width: '80px', touchAction: 'none' }}>
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 200 }}
            dragElastic={0.1}
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            style={{
              y: dragY,
              opacity: tasselOpacity,
              cursor: dragging ? 'grabbing' : 'grab',
              touchAction: 'none',
            }}
            animate={!dragging ? { rotate: [-3, 3, -3] } : {}}
            transition={!dragging ? { repeat: Infinity, duration: 2.5, ease: 'easeInOut' } : {}}
          >
            {/* Tassel top cap */}
            <div style={{
              width: '40px', height: '16px',
              background: 'linear-gradient(180deg, #D4AF37, #B8860B)',
              borderRadius: '8px 8px 0 0',
              margin: '0 auto',
              boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
            }}/>
            {/* Tassel body */}
            <div style={{
              width: '50px',
              background: 'linear-gradient(180deg, #B8860B, #D4AF37)',
              borderRadius: '0 0 25px 25px',
              margin: '0 auto',
              padding: '0.75rem 0.5rem 0',
              display: 'flex', flexWrap: 'wrap', gap: '2px', justifyContent: 'center',
            }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{
                  width: '3px',
                  height: `${20 + Math.random() * 20}px`,
                  background: `linear-gradient(180deg, #D4AF37, #F3E5AB, #B8860B)`,
                  borderRadius: '0 0 2px 2px',
                  opacity: 0.8 + Math.random() * 0.2,
                }}/>
              ))}
            </div>
            {/* Hint text */}
            <motion.p
              style={{ opacity: hintOpacity }}
              className="font-cinzel"
              css={{ opacity: hintOpacity }}
            >
              {/* using inline style instead */}
            </motion.p>
          </motion.div>

          {/* Pull hint */}
          <motion.div
            style={{ opacity: hintOpacity, pointerEvents: 'none' }}
            className="font-cinzel"
          >
            <p style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#B8860B',
              marginTop: '0.75rem',
              textAlign: 'center',
              pointerEvents: 'none',
              userSelect: 'none',
            }}>
              ↓ PULL TO REVEAL ↓
            </p>
          </motion.div>
        </div>
      )}

      {/* Revealed scroll */}
      {revealed && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0, originY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(180deg, #FFF8DC 0%, #FFFFF0 50%, #FFF8DC 100%)',
            border: '2px solid #D4AF37',
            borderTop: '4px solid #B8860B',
            borderRadius: '0 0 16px 16px',
            padding: '2rem 1.5rem 2.5rem',
            margin: '0 auto',
            maxWidth: '400px',
            boxShadow: '0 12px 40px rgba(74,4,4,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
            transformOrigin: 'top center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Scroll top rolled edge */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '8px',
            background: 'linear-gradient(180deg, #D4AF37, transparent)',
            opacity: 0.3,
          }}/>

          {/* Confetti celebration emoji */}
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎊</div>

          {/* Date */}
          <h2 className="font-playfair" style={{
            fontSize: 'clamp(1.4rem, 5vw, 2rem)',
            color: '#4A0404',
            margin: '0 0 0.25rem',
            fontStyle: 'italic',
            fontWeight: 700,
          }}>
            Wednesday
          </h2>
          <h1 className="font-cinzel" style={{
            fontSize: 'clamp(2rem, 8vw, 3rem)',
            background: 'linear-gradient(135deg, #D4AF37, #B8860B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 0.25rem',
            fontWeight: 900,
            letterSpacing: '0.05em',
          }}>
            9 December
          </h1>
          <p className="font-cinzel" style={{
            fontSize: '1.4rem',
            color: '#6B0F1A',
            margin: '0 0 1rem',
            letterSpacing: '0.1em',
          }}>
            2026
          </p>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1rem 0',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }}/>
            <span style={{ color: '#D4AF37', fontSize: '1rem' }}>🕯️</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}/>
          </div>

          {/* Venue */}
          <p className="font-poppins" style={{
            fontSize: '0.85rem',
            color: '#4A0404',
            margin: '0 0 0.25rem',
            fontWeight: 600,
          }}>
            🏛️ Shubh Muhurat Venue
          </p>
          <p className="font-poppins" style={{
            fontSize: '0.8rem',
            color: '#6B0F1A',
            margin: '0 0 1.5rem',
            lineHeight: 1.6,
          }}>
            Vill + PO — Dehat, Block + PS — Rajnagar<br/>
            Dist — Madhubani, Bihar
          </p>

          {/* Live Countdown */}
          <Countdown />

          {/* Add to Calendar */}
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              textDecoration: 'none',
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
              color: '#4A0404',
              border: '2px solid #B8860B',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              boxShadow: '0 4px 15px rgba(212,175,55,0.4)',
              cursor: 'pointer',
            }}
          >
            📅 Add to Google Calendar
          </a>
        </motion.div>
      )}
    </section>
  )
}
