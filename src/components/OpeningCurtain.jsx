import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MithilaLotus, CornerOrnament, GaneshaMotif } from './MithilaArt'

export default function OpeningCurtain({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleTap = () => {
    if (isOpening) return
    setIsOpening(true)
    onOpen()
  }

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center overflow-hidden"
      style={{ perspective: '1400px' }}
    >
      {/* ── LEFT ROYAL PALACE DOOR ── */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-20 flex flex-col justify-between p-4 sm:p-6"
        style={{
          background: 'linear-gradient(135deg, #3d0710 0%, #580B18 60%, #2b050b 100%)',
          boxShadow: 'inset -8px 0 25px rgba(0,0,0,0.6)',
          transformOrigin: 'left center',
          borderRight: '2px solid #D4AF37',
        }}
        animate={isOpening ? { rotateY: -105, opacity: 0 } : { rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <CornerOrnament size={60} className="opacity-75 self-start" />
        {/* Door carved lattice lines */}
        <div className="absolute inset-x-6 top-20 bottom-20 border border-gold/30 rounded-2xl flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-full h-full border border-gold/40 m-2 rounded-xl" />
        </div>
        <div className="self-start opacity-50">
          <MithilaLotus size={32} />
        </div>
      </motion.div>

      {/* ── RIGHT ROYAL PALACE DOOR ── */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 w-1/2 z-20 flex flex-col justify-between p-4 sm:p-6"
        style={{
          background: 'linear-gradient(225deg, #3d0710 0%, #580B18 60%, #2b050b 100%)',
          boxShadow: 'inset 8px 0 25px rgba(0,0,0,0.6)',
          transformOrigin: 'right center',
          borderLeft: '2px solid #D4AF37',
        }}
        animate={isOpening ? { rotateY: 105, opacity: 0 } : { rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <CornerOrnament size={60} flip className="opacity-75 self-end" />
        {/* Door carved lattice lines */}
        <div className="absolute inset-x-6 top-20 bottom-20 border border-gold/30 rounded-2xl flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-full h-full border border-gold/40 m-2 rounded-xl" />
        </div>
        <div className="self-end opacity-50">
          <MithilaLotus size={32} />
        </div>
      </motion.div>

      {/* ── CENTER ROYAL CREST & WAX SEAL ── */}
      <motion.div
        className="relative z-30 flex flex-col items-center text-center px-4 max-w-xs mx-auto"
        animate={isOpening ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Auspicious Ganesha at Seal Top */}
        <div className="mb-2">
          <GaneshaMotif size={52} className="mx-auto drop-shadow-md" />
        </div>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            color: '#D4AF37',
            fontSize: '9px',
            letterSpacing: '0.35em',
            marginBottom: '4px',
            fontWeight: 600,
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Glowing Golden Wax Seal */}
        <motion.div
          onClick={handleTap}
          className="wax-seal rounded-full flex flex-col items-center justify-center my-4 cursor-pointer select-none"
          style={{ width: '105px', height: '105px' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 900, fontSize: '1.7rem', lineHeight: 1 }}>B</span>
          <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 700, fontSize: '0.7rem', lineHeight: 1 }}>&amp;</span>
          <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontWeight: 900, fontSize: '1.7rem', lineHeight: 1 }}>A</span>
        </motion.div>

        <p
          style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.25em', opacity: 0.85 }}
        >
          THE JHA FAMILY
        </p>
        <p
          style={{ fontFamily: "'Poppins', sans-serif", color: '#F5E06A', fontSize: '9px', letterSpacing: '0.18em', opacity: 0.7, marginBottom: '10px' }}
        >
          CORDIALLY INVITES YOU TO
        </p>

        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: '#F5E06A',
            fontSize: '3rem',
            lineHeight: 1.1,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Bipin
        </h1>
        <p style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '10px', letterSpacing: '0.4em', margin: '2px 0' }}>
          WEDS
        </p>
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: '#F5E06A',
            fontSize: '3rem',
            lineHeight: 1.1,
            marginBottom: '10px',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Anjali
        </h1>

        <p style={{ fontFamily: "'Poppins', sans-serif", color: '#E8C84A', fontSize: '10px', letterSpacing: '0.2em', opacity: 0.85 }}>
          09 · DECEMBER · 2026
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.15em', opacity: 0.65, marginBottom: '20px' }}>
          Madhubani, Bihar
        </p>

        {/* Tap Button */}
        <motion.button
          onClick={handleTap}
          className="relative w-full rounded-full cursor-pointer select-none font-bold shadow-2xl transition-all"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            padding: '13px 22px',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
            color: '#580B18',
            border: 'none',
          }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(212,175,55,0.4)',
              '0 0 50px rgba(212,175,55,0.9), 0 0 80px rgba(212,175,55,0.3)',
              '0 0 20px rgba(212,175,55,0.4)',
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          ✦ Tap to Open Invitation ✦
        </motion.button>

        <p style={{ fontFamily: "'Poppins', sans-serif", color: '#D4AF37', fontSize: '9px', marginTop: '12px', opacity: 0.5, letterSpacing: '0.15em' }}>
          #BipinWedsAnjali
        </p>
      </motion.div>
    </div>
  )
}
