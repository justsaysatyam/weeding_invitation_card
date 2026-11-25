import { motion } from 'framer-motion'

function SmallGanesha() {
  return (
    <svg viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="smGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#996515" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="26" stroke="#D4AF37" strokeWidth="1" fill="#FFF9F9" opacity="0.9" />
      <circle cx="30" cy="30" r="23" stroke="#D4AF37" strokeWidth="0.75" strokeDasharray="1.5 2" fill="none" opacity="0.6" />
      {/* Ganesha glyph */}
      <path d="M26 18 L30 11 L34 18 Z" fill="url(#smGold)" />
      <path d="M24 20 C16 19 16 29 24 30" stroke="#6B0F1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M36 20 C44 19 44 29 36 30" stroke="#6B0F1A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M26 20 C26 17 34 17 34 20 C34 26 27 28 27 36 C27 42 32 43 34 40" stroke="#6B0F1A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="22" r="1.5" fill="#D4AF37" />
    </svg>
  )
}

export default function HeroCouple() {
  return (
    <section
      id="invitation"
      style={{
        padding: '3rem 1.25rem 4rem',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Arch Card Container matching Video Frame 07 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{
          maxWidth: '380px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '180px 180px 24px 24px',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 12px 40px rgba(107, 15, 26, 0.08), inset 0 0 20px rgba(255, 255, 255, 0.9)',
          padding: '2.5rem 1.5rem 2.5rem',
          position: 'relative',
        }}
      >
        {/* Subtle Arch Outline */}
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            borderRadius: '172px 172px 18px 18px',
            border: '1px dashed rgba(212, 175, 55, 0.3)',
            pointerEvents: 'none',
          }}
        />

        {/* Ganesha Crest */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <SmallGanesha />
        </div>

        {/* TOGETHER WITH THEIR FAMILIES */}
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.68rem',
            letterSpacing: '0.3em',
            color: '#8B1A2A',
            textTransform: 'uppercase',
            margin: '0 0 1.5rem',
            fontWeight: 600,
          }}
        >
          Together With Their Families
        </p>

        {/* Groom */}
        <div style={{ marginBottom: '0.75rem' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 7.5vw, 2.5rem)',
              color: '#6B0F1A',
              fontWeight: 700,
              margin: '0 0 0.25rem',
              lineHeight: 1.15,
            }}
          >
            Bipin
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#8B1A2A',
              margin: '0 0 0.3rem',
            }}
          >
            Chandra Jha
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              color: '#7D5A5A',
              letterSpacing: '0.04em',
              margin: 0,
            }}
          >
            SON OF
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.78rem',
              color: '#5C3838',
              margin: '0.15rem 0 0',
              fontWeight: 500,
            }}
          >
            Shri &amp; Smt. Jha Parivar (Jagatpur)
          </p>
        </div>

        {/* Elegant & Ampersand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '0.9rem 0',
          }}
        >
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1.7rem',
              color: '#D4AF37',
              lineHeight: 1,
            }}
          >
            &amp;
          </span>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
        </div>

        {/* Bride */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 7.5vw, 2.5rem)',
              color: '#6B0F1A',
              fontWeight: 700,
              margin: '0 0 0.25rem',
              lineHeight: 1.15,
            }}
          >
            Anjali
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#8B1A2A',
              margin: '0 0 0.3rem',
            }}
          >
            Jha
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              color: '#7D5A5A',
              letterSpacing: '0.04em',
              margin: 0,
            }}
          >
            DAUGHTER OF
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.78rem',
              color: '#5C3838',
              margin: '0.15rem 0 0',
              fontWeight: 500,
            }}
          >
            Shri &amp; Smt. Jha Parivar (Dehat, Rajnagar)
          </p>
        </div>

        {/* Couple Photo in Arch Frame with Ken Burns Zoom */}
        <div
          style={{
            width: '210px',
            height: '270px',
            margin: '0 auto 1.5rem',
            borderRadius: '130px 130px 16px 16px',
            overflow: 'hidden',
            border: '2.5px solid #D4AF37',
            boxShadow: '0 8px 24px rgba(107, 15, 26, 0.15)',
            position: 'relative',
          }}
        >
          <motion.img
            src="/images/couple.jpg"
            alt="Bipin & Anjali"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
          {/* Subtle vignette gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 65%, rgba(107, 15, 26, 0.3) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Invitation Text */}
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: '0.92rem',
            color: '#6B0F1A',
            margin: '0 0 0.5rem',
            lineHeight: 1.5,
          }}
        >
          request the pleasure of your company<br />at their wedding celebrations
        </p>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            color: '#B8860B',
            fontWeight: 700,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          #BipinWedsAnjali
        </p>
      </motion.div>
    </section>
  )
}
