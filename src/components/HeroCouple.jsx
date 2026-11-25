import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' },
  viewport: { once: true, margin: '-80px' },
})

export default function HeroCouple() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #FFF5F5 0%, #FCE4EC 50%, #FFF5F5 100%)',
      padding: '4rem 1.5rem 5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold paisley border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, #F3E5AB, #D4AF37, transparent)',
      }}/>

      {/* Background mandala watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.08)',
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px', height: '300px',
        borderRadius: '50%',
        border: '1px solid rgba(212,175,55,0.1)',
        pointerEvents: 'none',
      }}/>

      {/* TOGETHER WITH THEIR FAMILIES */}
      <motion.p
        className="font-cinzel"
        {...fadeUp(0)}
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.35em',
          color: '#B8860B',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}
      >
        ✦ Together With Their Families ✦
      </motion.p>

      {/* Groom */}
      <motion.div {...fadeUp(0.1)} style={{ marginBottom: '0.5rem' }}>
        <h2 className="font-playfair" style={{
          fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
          color: '#4A0404',
          margin: 0,
          fontWeight: 700,
        }}>
          Bipin Chandra Jha
        </h2>
        <p className="font-poppins" style={{
          fontSize: '0.8rem',
          color: '#6B0F1A',
          opacity: 0.8,
          margin: '0.25rem 0 0',
          letterSpacing: '0.03em',
        }}>
          S/o Shri &amp; Smt. Jha Parivar, Vill Jagatpur, Madhubani
        </p>
      </motion.div>

      {/* Ornate & separator */}
      <motion.div {...fadeUp(0.2)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', margin: '1.25rem 0',
      }}>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }}/>
        <span className="font-playfair" style={{
          fontSize: '2rem', color: '#D4AF37',
          fontStyle: 'italic', lineHeight: 1,
        }}>&amp;</span>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #D4AF37, transparent)' }}/>
      </motion.div>

      {/* Bride */}
      <motion.div {...fadeUp(0.3)} style={{ marginBottom: '2rem' }}>
        <h2 className="font-playfair" style={{
          fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
          color: '#4A0404',
          margin: 0,
          fontWeight: 700,
        }}>
          Anjali Jha
        </h2>
        <p className="font-poppins" style={{
          fontSize: '0.8rem',
          color: '#6B0F1A',
          opacity: 0.8,
          margin: '0.25rem 0 0',
          letterSpacing: '0.03em',
        }}>
          D/o Shri &amp; Smt. Jha Parivar, Vill Dehat, Rajnagar, Madhubani
        </p>
      </motion.div>

      {/* Couple Photo in Arch Frame */}
      <motion.div
        {...fadeUp(0.4)}
        whileHover={{ scale: 1.03 }}
        style={{
          display: 'inline-block',
          position: 'relative',
          margin: '0 auto 2rem',
        }}
      >
        {/* Arch frame */}
        <div style={{
          borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
          border: '4px solid #D4AF37',
          boxShadow: '0 0 0 2px #4A0404, 0 0 0 7px #D4AF37, 0 0 40px rgba(212,175,55,0.5)',
          overflow: 'hidden',
          width: 'clamp(220px, 65vw, 300px)',
          height: 'clamp(280px, 80vw, 380px)',
          position: 'relative',
        }}>
          <img
            src="/images/couple.jpg"
            alt="Bipin & Anjali"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
          {/* Vignette overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(74,4,4,0.2) 100%)',
          }}/>
        </div>

        {/* Gold glow behind arch */}
        <div style={{
          position: 'absolute', inset: '-8px',
          borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}/>
      </motion.div>

      {/* Request text */}
      <motion.div {...fadeUp(0.5)}>
        <p className="font-poppins" style={{
          fontSize: '0.9rem',
          color: '#4A0404',
          opacity: 0.8,
          fontStyle: 'italic',
          margin: '0 0 0.5rem',
          letterSpacing: '0.02em',
        }}>
          request the pleasure of your company at their
        </p>
        <h3 className="font-cinzel" style={{
          fontSize: 'clamp(1.4rem, 5vw, 2rem)',
          background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #D4AF37)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          letterSpacing: '0.15em',
        }}>
          SHUBH VIVAH
        </h3>
      </motion.div>

      {/* Bottom gold border */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px',
        background: 'linear-gradient(90deg, transparent, #D4AF37, #F3E5AB, #D4AF37, transparent)',
      }}/>
    </section>
  )
}
