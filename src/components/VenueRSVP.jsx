import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Copy, Check, Phone, MessageCircle } from 'lucide-react'

const ADDRESS = 'Vill + PO — Dehat, Block + PS — Rajnagar, Dist — Madhubani, Bihar'
const MAPS_URL = 'https://maps.app.goo.gl/4tsKtvSdjqRHzUPJA'
const WA_NUMBER = '918507754988'
const WA_MSG = encodeURIComponent('🌸 You\'re cordially invited to the Shubh Vivah of Bipin Chandra Jha & Anjali Jha on 9th December 2026 at Dehat, Rajnagar, Madhubani, Bihar. #BipinWedsAnjali')

export default function VenueRSVP() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', guests: 1, attending: 'yes' })
  const toastTimer = useRef(null)

  const copyAddress = () => {
    navigator.clipboard.writeText(ADDRESS).then(() => {
      setCopied(true)
      clearTimeout(toastTimer.current)
      toastTimer.current = setTimeout(() => setCopied(false), 2500)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    setSubmitted(true)
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #4A0404 0%, #2D0202 60%, #4A0404 100%)',
      padding: '4rem 1.5rem 5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background rings */}
      <div style={{
        position: 'absolute', top: '20%', right: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.1)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '10%', left: '-80px',
        width: '250px', height: '250px', borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.08)',
        pointerEvents: 'none',
      }}/>

      {/* ===== VENUE SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(212,175,55,0.3)',
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          marginBottom: '2rem',
          maxWidth: '480px',
          margin: '0 auto 2rem',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', justifyContent: 'center' }}>
          <MapPin size={20} color="#D4AF37"/>
          <h2 className="font-cinzel" style={{
            fontSize: '1rem',
            letterSpacing: '0.15em',
            color: '#D4AF37',
            margin: 0,
          }}>
            WEDDING VENUE
          </h2>
        </div>

        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          marginBottom: '1.25rem',
        }}/>

        <p className="font-poppins" style={{
          fontSize: '0.9rem',
          color: 'rgba(243,229,171,0.9)',
          lineHeight: 1.8,
          margin: '0 0 1.5rem',
          textAlign: 'center',
        }}>
          Vill + PO — Dehat<br/>
          Block + PS — Rajnagar<br/>
          Dist — Madhubani, Bihar
        </p>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
              color: '#4A0404',
              border: '2px solid #B8860B',
              borderRadius: '50px',
              padding: '0.65rem 1.25rem',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            <MapPin size={14}/>
            Get Directions
          </a>

          <button
            onClick={copyAddress}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              background: copied ? 'rgba(212,175,55,0.2)' : 'transparent',
              color: '#D4AF37',
              border: '2px solid rgba(212,175,55,0.5)',
              borderRadius: '50px',
              padding: '0.65rem 1.25rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            {copied ? <Check size={14}/> : <Copy size={14}/>}
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>
      </motion.div>

      {/* ===== RSVP SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(212,175,55,0.3)',
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          maxWidth: '480px',
          margin: '0 auto 2.5rem',
          backdropFilter: 'blur(8px)',
        }}
      >
        <h2 className="font-cinzel" style={{
          fontSize: '1rem',
          letterSpacing: '0.15em',
          color: '#D4AF37',
          margin: '0 0 0.5rem',
          textAlign: 'center',
        }}>
          🙏 KINDLY RESPOND
        </h2>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          marginBottom: '1.5rem',
        }}/>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
            >
              {/* Guest Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label className="font-poppins" style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  color: 'rgba(212,175,55,0.8)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={{
                    background: 'rgba(255,245,245,0.08)',
                    border: '1.5px solid rgba(212,175,55,0.4)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    width: '100%',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.85rem',
                    color: '#F3E5AB',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                  }}
                />
              </div>

              {/* Number of Guests */}
              <div style={{ marginBottom: '1rem' }}>
                <label className="font-poppins" style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  color: 'rgba(212,175,55,0.8)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Number of Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={form.guests}
                  onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
                  style={{
                    background: 'rgba(255,245,245,0.08)',
                    border: '1.5px solid rgba(212,175,55,0.4)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    width: '100%',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.85rem',
                    color: '#F3E5AB',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Attending */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="font-poppins" style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  color: 'rgba(212,175,55,0.8)',
                  marginBottom: '0.6rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Will you attend?
                </label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['yes', 'no'].map(val => (
                    <label key={val} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.85rem',
                      color: form.attending === val ? '#D4AF37' : 'rgba(243,229,171,0.6)',
                      transition: 'color 0.3s',
                    }}>
                      <input
                        type="radio"
                        name="attending"
                        value={val}
                        checked={form.attending === val}
                        onChange={e => setForm(f => ({ ...f, attending: e.target.value }))}
                        style={{ accentColor: '#D4AF37' }}
                      />
                      {val === 'yes' ? '✅ Yes, Joyfully!' : '❌ Regretfully No'}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
                  color: '#4A0404',
                  fontFamily: 'Cinzel, serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  border: '2px solid #B8860B',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                Send RSVP 🌸
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              style={{ textAlign: 'center', padding: '1.5rem 0' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🙏</div>
              <h3 className="font-playfair" style={{
                fontSize: '1.3rem',
                color: '#D4AF37',
                fontStyle: 'italic',
                margin: '0 0 0.75rem',
              }}>
                Thank You, {form.name}!
              </h3>
              <p className="font-poppins" style={{
                fontSize: '0.85rem',
                color: 'rgba(243,229,171,0.8)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {form.attending === 'yes'
                  ? 'We look forward to celebrating with you! Your presence will make our special day even more memorable. 💕'
                  : 'We\'ll miss you, but we\'ll keep you in our hearts and prayers on this special day. 🌸'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ===== FOOTER ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', paddingTop: '1rem' }}
      >
        {/* Hashtag */}
        <p className="font-playfair" style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.4rem, 5vw, 2rem)',
          fontStyle: 'italic',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '0 0 1.5rem',
        }}>
          #BipinWedsAnjali
        </p>

        {/* Divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          maxWidth: '250px', margin: '0 auto 1.5rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5))' }}/>
          <span style={{ color: '#D4AF37' }}>✦</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(212,175,55,0.5), transparent)' }}/>
        </div>

        {/* Contact buttons */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <a
            href="tel:+918507754988"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.8rem',
              color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.4)',
              borderRadius: '50px',
              padding: '0.5rem 1.25rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <Phone size={14}/>
            +91 85077 54988
          </a>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.8rem',
              color: '#4A0404',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              borderRadius: '50px',
              padding: '0.5rem 1.25rem',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            <MessageCircle size={14}/>
            Share on WhatsApp
          </a>
        </div>

        {/* Credit */}
        <p className="font-poppins" style={{
          fontSize: '0.7rem',
          color: 'rgba(243,229,171,0.4)',
          margin: 0,
          letterSpacing: '0.05em',
        }}>
          Made with ❤️ for Bipin & Anjali
        </p>
      </motion.div>

      {/* Copied toast */}
      <div className={`toast ${copied ? 'visible' : ''}`}>
        ✓ Address Copied!
      </div>
    </section>
  )
}
