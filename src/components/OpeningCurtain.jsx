import { motion, AnimatePresence } from 'framer-motion'
import { MithilaLotus, CornerOrnament } from './MithilaArt'

export default function OpeningCurtain({ onOpen }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[500] flex items-center justify-center overflow-hidden safe-top safe-bottom"
        style={{ background: 'radial-gradient(ellipse at center, #7a1020 0%, #580B18 40%, #3d0710 100%)' }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        {/* Shimmer lines */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${i * 7}%`,
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              }}
            />
          ))}
        </div>

        {/* Border frame */}
        <div
          className="absolute inset-3 pointer-events-none opacity-25"
          style={{ border: '1px solid #D4AF37' }}
        />
        <div
          className="absolute inset-5 pointer-events-none opacity-15"
          style={{ border: '1px solid #D4AF37' }}
        />

        {/* Corner ornaments */}
        <CornerOrnament size={55} className="absolute top-3 left-3 opacity-60" />
        <CornerOrnament size={55} flip className="absolute top-3 right-3 opacity-60" />
        <CornerOrnament size={55} className="absolute bottom-3 left-3 opacity-60" style={{ transform: 'rotate(270deg)' }} />
        <CornerOrnament size={55} flip className="absolute bottom-3 right-3 opacity-60" style={{ transform: 'rotate(90deg)' }} />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-xs mx-auto">

          {/* Wax seal */}
          <motion.div
            className="wax-seal rounded-full flex flex-col items-center justify-center mb-5 cursor-pointer select-none"
            style={{ width: '100px', height: '100px' }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 700, fontSize: '1.6rem', lineHeight: 1 }}>B</span>
            <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 700, fontSize: '0.65rem', lineHeight: 1 }}>&amp;</span>
            <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 700, fontSize: '1.6rem', lineHeight: 1 }}>A</span>
          </motion.div>

          {/* Lotus */}
          <MithilaLotus size={34} className="mb-3 opacity-75" />

          <p style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.3em', marginBottom: '6px', opacity: 0.85 }}>
            THE JHA FAMILY
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: '#E8C84A', fontSize: '9px', letterSpacing: '0.2em', opacity: 0.6, marginBottom: '14px' }}>
            CORDIALLY INVITES YOU TO
          </p>

          <h1
            style={{ fontFamily: "'Great Vibes', cursive", color: '#F5E06A', fontSize: '3.2rem', lineHeight: 1.1 }}
          >
            Bipin
          </h1>
          <p style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '11px', letterSpacing: '0.4em', margin: '2px 0' }}>
            WEDS
          </p>
          <h1
            style={{ fontFamily: "'Great Vibes', cursive", color: '#F5E06A', fontSize: '3.2rem', lineHeight: 1.1, marginBottom: '14px' }}
          >
            Anjali
          </h1>

          <p style={{ fontFamily: "'Poppins', sans-serif", color: '#E8C84A', fontSize: '10px', letterSpacing: '0.2em', opacity: 0.75, marginBottom: '4px' }}>
            09 · DECEMBER · 2026
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.15em', opacity: 0.55, marginBottom: '24px' }}>
            Madhubani, Bihar
          </p>

          {/* CTA */}
          <motion.button
            onClick={onOpen}
            className="relative w-full max-w-[260px] rounded-full cursor-pointer select-none"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '12px',
              letterSpacing: '0.18em',
              fontWeight: 700,
              padding: '14px 20px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
              color: '#580B18',
              border: 'none',
              outline: 'none',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(212,175,55,0.4)',
                '0 0 50px rgba(212,175,55,0.9), 0 0 80px rgba(212,175,55,0.3)',
                '0 0 20px rgba(212,175,55,0.4)',
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileTap={{ scale: 0.96 }}
          >
            ✦ Tap to Open Invitation ✦
          </motion.button>

          <p style={{ fontFamily: "'Poppins', sans-serif", color: '#D4AF37', fontSize: '9px', marginTop: '14px', opacity: 0.4, letterSpacing: '0.15em' }}>
            #BipinWedsAnjali
          </p>
        </div>

        {/* Bottom lotus */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 opacity-40">
          <MithilaLotus size={24} />
          <MithilaLotus size={24} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
