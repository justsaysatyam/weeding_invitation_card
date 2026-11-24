import { motion } from 'framer-motion'
import Countdown from './Countdown'
import { GoldenDivider, PaisleyBorder, MithilaLotus, CornerOrnament, GaneshaMotif, RoyalDiya } from './MithilaArt'

const CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
  'Bipin Weds Anjali (#BipinWedsAnjali)'
)}&dates=20261209T133000Z/20261209T193000Z&details=${encodeURIComponent(
  'Royal Mithila Wedding Ceremony of Bipin Chandra Jha & Anjali Jha. Hosted with love and blessings by the Jha Family. Venue: Vill+PO Dehat, Rajnagar, Madhubani, Bihar.'
)}&location=${encodeURIComponent(
  'Vill + PO - Dehat, Block + PS - Rajnagar, Dist - Madhubani, Bihar'
)}`

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.16 } } }

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-8 pb-14 px-4"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F9F3E8 55%, #FDFBF7 100%)' }}
    >
      {/* ── 1. Auspicious Ganesh Vandana & Vedic Shloka ── */}
      <motion.div
        className="relative z-10 w-full max-w-sm mx-auto mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <RoyalDiya size={34} />
          <GaneshaMotif size={56} className="drop-shadow-sm" />
          <RoyalDiya size={34} />
        </div>

        <p
          style={{
            fontFamily: "'Cinzel', serif",
            color: '#580B18',
            fontSize: '11px',
            letterSpacing: '0.3em',
            fontWeight: 700,
            marginBottom: '4px',
          }}
        >
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Traditional Sanskrit Shloka */}
        <div
          className="rounded-xl px-4 py-2 mx-auto inline-block"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(245,224,106,0.06))',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              color: '#580B18',
              fontSize: '11px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
          </p>
        </div>

        <p
          className="mt-3 font-cinzel text-gold-gradient"
          style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.3em' }}
        >
          — THE JHA FAMILY PRESENTS —
        </p>
      </motion.div>

      {/* ── 2. Couple Photo with Royal Kundan / Gold Jewelry Arch ── */}
      <div className="relative z-10 mb-6 w-full max-w-[290px] sm:max-w-[330px] mx-auto">
        {/* Outer Kundan Glow */}
        <div
          className="absolute -inset-2.5 rounded-t-[160px] rounded-b-3xl opacity-40 blur-md"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)' }}
        />
        {/* Double Gold Filigree Border */}
        <div
          className="absolute -inset-1.5 rounded-t-[158px] rounded-b-3xl"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A, #D4AF37)',
            boxShadow: '0 8px 30px rgba(88,11,24,0.18)',
          }}
        />
        <div className="absolute inset-0 rounded-t-[154px] rounded-b-2xl" style={{ background: '#FDFBF7' }} />

        {/* 4 Corner Kundan Jewels */}
        <div className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full z-20 shadow-md" style={{ background: 'radial-gradient(circle, #F5E06A, #D4AF37)' }} />
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full z-20 shadow-md" style={{ background: 'radial-gradient(circle, #F5E06A, #D4AF37)' }} />
        <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 rounded-full z-20 shadow-md" style={{ background: 'radial-gradient(circle, #F5E06A, #D4AF37)' }} />
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full z-20 shadow-md" style={{ background: 'radial-gradient(circle, #F5E06A, #D4AF37)' }} />

        {/* Photo Container */}
        <div
          className="portrait-arch relative overflow-hidden rounded-b-2xl"
          style={{ borderRadius: '52% 52% 14px 14px / 56% 56% 14px 14px' }}
        >
          <motion.img
            src="/images/couple.jpg"
            alt="Bipin Chandra Jha & Anjali Jha"
            className="w-full object-cover object-top couple-photo"
            style={{ height: '340px' }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(88,11,24,0.25) 100%)' }}
          />
        </div>

        {/* Crown lotus */}
        <MithilaLotus size={26} className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-95" />
      </div>

      {/* ── 3. Typography & Couple Names ── */}
      <motion.div
        className="relative z-10 text-center w-full max-w-sm mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', letterSpacing: '0.28em', opacity: 0.65, marginBottom: '8px' }}
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
          style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', letterSpacing: '0.4em', fontSize: '14px', margin: '4px 0' }}
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
            marginBottom: '10px',
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
          style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', letterSpacing: '0.22em', opacity: 0.65, marginBottom: '4px' }}
        >
          REQUEST THE HONOUR OF YOUR PRESENCE
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '1rem', opacity: 0.85, marginBottom: '18px' }}
        >
          09 December 2026 · Madhubani, Bihar
        </motion.p>

        <GoldenDivider className="mb-5" />

        {/* ── 4. Live Ticking Countdown Timer ── */}
        <motion.div variants={fadeUp}>
          <div
            className="inline-block px-4 py-1.5 rounded-full mb-3"
            style={{ background: 'linear-gradient(135deg, rgba(88,11,24,0.92), rgba(122,16,32,0.85))', border: '1px solid rgba(212,175,55,0.45)' }}
          >
            <p
              style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.3em', fontWeight: 600 }}
            >
              ⏳ COUNTDOWN TO SHUBH VIVAH
            </p>
          </div>

          <Countdown targetDate="2026-12-09T07:00:00+05:30" />

          {/* ── 5. Add to Google Calendar 1-Tap CTA ── */}
          <div className="mt-4">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '10px',
                letterSpacing: '0.12em',
                padding: '9px 20px',
                background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)',
                color: '#580B18',
                boxShadow: '0 4px 14px rgba(212,175,55,0.35)',
              }}
            >
              📅 Save the Date in Calendar
            </a>
          </div>

          <p
            className="mt-3 text-center"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '10px', opacity: 0.5, letterSpacing: '0.15em' }}
          >
            Dehat, Rajnagar, Madhubani · #BipinWedsAnjali
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom paisley border */}
      <div className="absolute bottom-0 left-0 right-0 opacity-25 pointer-events-none">
        <PaisleyBorder />
      </div>
    </section>
  )
}
