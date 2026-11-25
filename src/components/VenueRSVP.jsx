import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation, Copy, Check, Phone, MessageCircle } from 'lucide-react'

const VENUE_NAME = 'Dehat, Rajnagar'
const FULL_ADDRESS = 'Vill + PO — Dehat, Block + PS — Rajnagar, Dist — Madhubani, Bihar'
const MAPS_URL = 'https://maps.app.goo.gl/4tsKtvSdjqRHzUPJA'
const WA_PHONE = '8507754988'
const WA_MSG = encodeURIComponent(
  '🌸 You are cordially invited to the Royal Wedding of Bipin Chandra Jha & Anjali Jha on 9th December 2026 at Dehat, Rajnagar, Madhubani, Bihar. #BipinWedsAnjali'
)

export default function VenueRSVP() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', count: 1, attending: 'yes' })
  const copyTimer = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_ADDRESS).then(() => {
      setCopied(true)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2500)
    })
  }

  const handleRsvpSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      style={{
        padding: '3rem 1.25rem 6rem',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* ===== LOCATION SECTION ===== */}
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
        LOCATION
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
          margin: '0 0 1.75rem',
          fontWeight: 700,
        }}
      >
        How to Reach
      </motion.h2>

      {/* Stylized Illustrated Map Card matching Frame 20 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '360px',
          margin: '0 auto 1.5rem',
          borderRadius: '24px',
          background: '#FDF7F2',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 12px 30px rgba(107, 15, 26, 0.08)',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={() => window.open(MAPS_URL, '_blank')}
      >
        {/* Soft Illustrated Map Background Graphic */}
        <div style={{ height: '170px', position: 'relative', background: '#F8F1EB', overflow: 'hidden' }}>
          <svg viewBox="0 0 400 200" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
            {/* Soft land shapes */}
            <path d="M-20 60 Q120 40 240 90 T420 50 L420 220 L-20 220 Z" fill="#EFE5DB" opacity="0.6" />
            <path d="M100 -20 Q240 30 350 -10 L420 -20 L420 80 Q260 40 100 80 Z" fill="#E8DDD3" opacity="0.5" />
            
            {/* Lake / Pond */}
            <ellipse cx="230" cy="110" rx="65" ry="32" fill="#D5E5E8" opacity="0.7" />

            {/* Roads */}
            <path d="M100 -10 Q140 100 180 180" stroke="#FFF" strokeWidth="12" fill="none" opacity="0.8" />
            <path d="M-10 130 Q160 120 410 110" stroke="#FFF" strokeWidth="10" fill="none" opacity="0.8" />

            {/* Dotted Route to Venue matching Frame 20 */}
            <path
              d="M110 150 Q180 140 240 125 Q280 115 320 80"
              stroke="#6B0F1A"
              strokeWidth="2.5"
              strokeDasharray="5 5"
              fill="none"
            />

            {/* Destination Pin */}
            <g transform="translate(310, 52)">
              <circle cx="10" cy="10" r="14" fill="#6B0F1A" opacity="0.15" />
              <path
                d="M10 2 C5.5 2 2 5.5 2 10 C2 15 10 24 10 24 C10 24 18 15 18 10 C18 5.5 14.5 2 10 2 Z"
                fill="#6B0F1A"
              />
              <circle cx="10" cy="9" r="3" fill="#FFF" />
            </g>
          </svg>

          {/* Floating Pill on Map: "Dehat, Rajnagar / Tap to open in Maps" */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(6px)',
              padding: '0.45rem 0.9rem',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              textAlign: 'left',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.78rem', fontWeight: 700, color: '#6B0F1A', margin: 0 }}>
              {VENUE_NAME}
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.62rem', color: '#888', margin: 0 }}>
              Tap to open in Google Maps ↗
            </p>
          </div>
        </div>
      </motion.div>

      {/* Venue Name & Address matching Frame 20 */}
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          color: '#6B0F1A',
          fontWeight: 700,
          margin: '0 0 0.4rem',
        }}
      >
        {VENUE_NAME}
      </h3>
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.82rem',
          color: '#6B0F1A',
          opacity: 0.8,
          maxWidth: '320px',
          margin: '0 auto 1.5rem',
          lineHeight: 1.5,
        }}
      >
        {FULL_ADDRESS}
      </p>

      {/* Two Buttons Side by Side matching Frame 20 */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
        {/* Solid Maroon Pill: GET DIRECTIONS */}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.75rem 1.4rem',
            borderRadius: '50px',
            backgroundColor: '#6B0F1A',
            color: '#FFFFFF',
            fontFamily: "'Cinzel', serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(107, 15, 26, 0.25)',
          }}
        >
          <Navigation size={13} />
          GET DIRECTIONS
        </a>

        {/* Outlined White Pill: COPY ADDRESS */}
        <button
          onClick={handleCopy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.75rem 1.4rem',
            borderRadius: '50px',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #6B0F1A',
            color: '#6B0F1A',
            fontFamily: "'Cinzel', serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          }}
        >
          {copied ? <Check size={13} color="#2E7D32" /> : <Copy size={13} />}
          {copied ? 'COPIED!' : 'COPY ADDRESS'}
        </button>
      </div>

      {/* ===== RSVP SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '360px',
          margin: '0 auto 3rem',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderRadius: '24px',
          border: '1.5px solid rgba(212, 175, 55, 0.35)',
          padding: '2rem 1.5rem',
          boxShadow: '0 12px 36px rgba(107, 15, 26, 0.08)',
        }}
      >
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.68rem',
            letterSpacing: '0.3em',
            color: '#8B1A2A',
            textTransform: 'uppercase',
            margin: '0 0 0.3rem',
            fontWeight: 600,
          }}
        >
          KINDLY RESPOND
        </p>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            color: '#6B0F1A',
            fontWeight: 700,
            margin: '0 0 1.5rem',
          }}
        >
          Will You Join Us?
        </h3>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form key="form" onSubmit={handleRsvpSubmit} style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '1.1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.72rem',
                    color: '#8B1A2A',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Satyam & Family"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(107, 15, 26, 0.25)',
                    background: '#FFF9F9',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.85rem',
                    color: '#4A0404',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.72rem',
                    color: '#8B1A2A',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: '4px',
                  }}
                >
                  NUMBER OF GUESTS
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={form.count}
                  onChange={(e) => setForm({ ...form, count: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(107, 15, 26, 0.25)',
                    background: '#FFF9F9',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.85rem',
                    color: '#4A0404',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.4rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.72rem',
                    color: '#8B1A2A',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: '6px',
                  }}
                >
                  ATTENDANCE
                </label>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.82rem',
                      color: form.attending === 'yes' ? '#6B0F1A' : '#777',
                      fontWeight: form.attending === 'yes' ? 600 : 400,
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={form.attending === 'yes'}
                      onChange={() => setForm({ ...form, attending: 'yes' })}
                      style={{ accentColor: '#6B0F1A' }}
                    />
                    Joyfully Attending 🎉
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '0.82rem',
                      color: form.attending === 'no' ? '#6B0F1A' : '#777',
                      fontWeight: form.attending === 'no' ? 600 : 400,
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === 'no'}
                      onChange={() => setForm({ ...form, attending: 'no' })}
                      style={{ accentColor: '#6B0F1A' }}
                    />
                    In Spirit Only 💐
                  </label>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '50px',
                  backgroundColor: '#6B0F1A',
                  color: '#FFF',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(107, 15, 26, 0.25)',
                }}
              >
                SUBMIT RSVP 🌸
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ padding: '1rem 0' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🙏</div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#6B0F1A', margin: '0 0 0.5rem' }}>
                Thank You, {form.name}!
              </h4>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', color: '#5C3838', lineHeight: 1.5, margin: 0 }}>
                {form.attending === 'yes'
                  ? 'Your warm blessings have been received. We look forward to celebrating with you!'
                  : 'We will miss your gracious presence, but your blessings are with us!'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ===== CONTACT & WHATSAPP FOOTER ===== */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '1.1rem',
            letterSpacing: '0.18em',
            color: '#B8860B',
            fontWeight: 700,
            margin: '0 0 1.25rem',
          }}
        >
          #BipinWedsAnjali
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {/* Call Phone */}
          <a
            href={`tel:+91${WA_PHONE}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.65rem 1.25rem',
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(107, 15, 26, 0.25)',
              color: '#6B0F1A',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
            }}
          >
            <Phone size={13} />
            +91 {WA_PHONE}
          </a>

          {/* WhatsApp Share */}
          <a
            href={`https://wa.me/?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.65rem 1.25rem',
              borderRadius: '50px',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            }}
          >
            <MessageCircle size={14} />
            Share on WhatsApp
          </a>
        </div>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.68rem',
            color: '#8B1A2A',
            opacity: 0.6,
            margin: 0,
          }}
        >
          With Best Compliments from Jha Parivar &amp; Relatives
        </p>
      </div>

      {/* Copied Toast Notification */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: `translateX(-50%) translateY(${copied ? '0' : '100px'})`,
          opacity: copied ? 1 : 0,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: '#6B0F1A',
          color: '#FFF2B2',
          padding: '0.65rem 1.5rem',
          borderRadius: '50px',
          fontFamily: "'Cinzel', serif",
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          zIndex: 99999,
          pointerEvents: 'none',
        }}
      >
        ✓ ADDRESS COPIED TO CLIPBOARD
      </div>
    </section>
  )
}
