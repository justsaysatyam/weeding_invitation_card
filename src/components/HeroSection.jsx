import { motion } from 'framer-motion'
import Countdown from './Countdown'
import { GoldenDivider, PaisleyBorder, MithilaLotus, CornerOrnament } from './MithilaArt'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.18 } } }

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-10 pb-14 px-4"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F9F3E8 55%, #FDFBF7 100%)' }}
    >
      {/* Floating gold particles — hidden on mobile to avoid overflow */}
      {[
        { w: 6,  h: 6,  top: '12%', left:  '6%', dur: 7 },
        { w: 4,  h: 4,  top: '22%', right: '8%', dur: 5 },
        { w: 7,  h: 7,  top: '62%', left:  '4%', dur: 9 },
        { w: 4,  h: 4,  top: '70%', right: '7%', dur: 6 },
      ].map((p, i) => (
        <div
          key={i}
          className="floating-particle hidden sm:block absolute"
          style={{
            width: p.w, height: p.h,
            top: p.top, left: p.left, right: p.right,
            animationDuration: `${p.dur}s`,
            animationDelay: `${i * 0.6}s`,
            background: 'radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0) 70%)',
          }}
        />
      ))}

      {/* Top ornament row */}
      <div className="relative z-10 mb-5 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <CornerOrnament size={40} />
          <MithilaLotus size={38} />
          <CornerOrnament size={40} flip />
        </div>
        <p
          className="font-cinzel text-gold-gradient text-center"
          style={{ fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.3em' }}
        >
          — THE JHA FAMILY PRESENTS —
        </p>
      </div>

      {/* ── Couple Photo ── */}
      <div className="relative z-10 mb-7 w-full max-w-[300px] sm:max-w-[340px] mx-auto">
        {/* Glow aura */}
        <div
          className="absolute -inset-2 rounded-t-[160px] rounded-b-3xl opacity-50 blur-md"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)' }}
        />
        {/* Outer gold ring */}
        <div
          className="absolute -inset-1.5 rounded-t-[158px] rounded-b-3xl"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A, #D4AF37)' }}
        />
        {/* White gap */}
        <div className="absolute inset-0 rounded-t-[154px] rounded-b-2xl" style={{ background: '#FDFBF7' }} />
        {/* Inner accent */}
        <div
          className="absolute inset-0.5 rounded-t-[152px] rounded-b-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(245,224,106,0.1))' }}
        />

        {/* Photo */}
        <div
          className="portrait-arch relative overflow-hidden rounded-b-2xl"
          style={{ borderRadius: '52% 52% 14px 14px / 56% 56% 14px 14px' }}
        >
          <motion.img
            src="/images/couple.jpg"
            alt="Bipin Chandra Jha & Anjali Jha"
            className="w-full object-cover object-top couple-photo"
            style={{ height: '350px' }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror' }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(88,11,24,0.22) 100%)' }}
          />
        </div>

        {/* Crown lotus */}
        <MithilaLotus size={26} className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-90" />
      </div>

      {/* ── Typography ── */}
      <motion.div
        className="relative z-10 text-center w-full max-w-sm mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', letterSpacing: '0.28em', opacity: 0.65, marginBottom: '10px' }}
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="hero-name"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '3.2rem',
            lineHeight: 1.15,
            marginBottom: '4px',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 30%, #D4AF37 55%, #B8942A 80%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Bipin Chandra Jha
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', letterSpacing: '0.4em', fontSize: '14px', margin: '6px 0' }}
        >
          ✦ &amp; ✦
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="hero-name"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '3.2rem',
            lineHeight: 1.15,
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 30%, #D4AF37 55%, #B8942A 80%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Anjali Jha
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', letterSpacing: '0.22em', opacity: 0.65, marginBottom: '6px' }}
        >
          REQUEST THE HONOUR OF YOUR PRESENCE
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '1rem', opacity: 0.8, marginBottom: '20px' }}
        >
          09 December 2026 · Madhubani, Bihar
        </motion.p>

        <GoldenDivider className="mb-5" />

        {/* ── Countdown ── */}
        <motion.div variants={fadeUp}>
          {/* Title banner */}
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(88,11,24,0.9), rgba(122,16,32,0.8))', border: '1px solid rgba(212,175,55,0.4)' }}
          >
            <p
              style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.3em' }}
            >
              🕐 COUNTDOWN TO SHUBH VIVAH
            </p>
          </div>

          <Countdown targetDate="2026-12-09T07:00:00+05:30" />

          <p
            className="mt-2 text-center"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', opacity: 0.5, letterSpacing: '0.15em' }}
          >
            09 December 2026 · Dehat, Rajnagar, Madhubani
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '11px', marginTop: '16px', letterSpacing: '0.15em', opacity: 0.55 }}
        >
          #BipinWedsAnjali
        </motion.p>
      </motion.div>

      {/* Bottom paisley */}
      <div className="absolute bottom-0 left-0 right-0 opacity-25 pointer-events-none">
        <PaisleyBorder />
      </div>
    </section>
  )
}
