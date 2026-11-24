import { motion } from 'framer-motion'
import { GoldenDivider, MithilaLotus, PaisleyBorder, MithilaPeacock, CornerOrnament } from './MithilaArt'

const PortraitCard = ({ name, photo, role, roleHindi, description, delay = 0 }) => (
  <motion.div
    className="flex flex-col items-center w-full max-w-[260px] mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.85, delay, ease: 'easeOut' }}
  >
    {/* Arch portrait frame */}
    <div className="relative mb-6" style={{ width: '200px', height: '260px' }}>
      {/* Glow */}
      <div
        className="absolute -inset-2 blur-md opacity-35 rounded-t-full"
        style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E06A)' }}
      />
      {/* Outer gold border */}
      <div
        className="absolute -inset-1 rounded-t-full rounded-b-2xl"
        style={{ background: 'linear-gradient(145deg, #D4AF37, #F5E06A, #B8942A, #D4AF37)' }}
      />
      {/* Ivory gap */}
      <div className="absolute inset-[3px] rounded-t-full rounded-b-xl" style={{ background: '#FDFBF7' }} />
      {/* Inner accent */}
      <div
        className="absolute inset-[6px] rounded-t-full rounded-b-xl"
        style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.1), transparent)' }}
      />
      {/* Photo */}
      <div className="absolute inset-[6px] rounded-t-full rounded-b-xl overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="portrait-photo w-full object-cover object-top"
          style={{ height: '100%' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(88,11,24,0.28) 100%)' }}
        />
      </div>

      {/* Crown lotus */}
      <MithilaLotus size={24} className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 opacity-90" />
      {/* Side dots */}
      <div className="absolute top-10 -left-2 w-2 h-2 rounded-full" style={{ background: '#D4AF37' }} />
      <div className="absolute top-10 -right-2 w-2 h-2 rounded-full" style={{ background: '#D4AF37' }} />

      {/* Name tag ribbon */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full z-10"
        style={{ background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)' }}
      >
        <span style={{ fontFamily: "'Cinzel', serif", color: '#580B18', fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em' }}>
          {roleHindi}
        </span>
      </div>
    </div>

    {/* Text block */}
    <div className="text-center pt-5 px-2">
      <p style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '9px', letterSpacing: '0.25em', opacity: 0.55, marginBottom: '4px' }}>
        {role}
      </p>
      <h3
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '2.2rem',
          lineHeight: 1.2,
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {name}
      </h3>
      <p style={{ fontFamily: "'Poppins', sans-serif", color: '#3d0710', fontSize: '12px', lineHeight: 1.6, opacity: 0.72 }}>
        {description}
      </p>
    </div>
  </motion.div>
)

export default function BrideGroomShowcase() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDD8 50%, #FDFBF7 100%)' }}
    >
      {/* Background peacocks — hidden on mobile */}
      <div className="absolute top-8 right-2 opacity-[0.04] pointer-events-none hidden sm:block">
        <MithilaPeacock size={160} />
      </div>
      <div className="absolute bottom-8 left-2 opacity-[0.04] pointer-events-none hidden sm:block" style={{ transform: 'scaleX(-1)' }}>
        <MithilaPeacock size={160} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-2 mb-4">
            <CornerOrnament size={38} />
            <MithilaLotus size={34} />
            <CornerOrnament size={38} flip />
          </div>
          <p style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '10px', letterSpacing: '0.4em', marginBottom: '8px' }}>
            THE BELOVED COUPLE
          </p>
          <h2
            className="section-title"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '2.4rem' }}
          >
            Dulha &amp; Dulhan
          </h2>
          <GoldenDivider className="mt-4" />
        </motion.div>

        {/* Portraits */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10 justify-items-center">
          <PortraitCard
            name="Bipin Chandra Jha"
            photo="/images/groom.jpg"
            role="THE GROOM · DULHA"
            roleHindi="वर — Dulha"
            description="Adorned in royal saffron & his proud safa, Bipin carries the warmth of Mithila in his heart."
          />
          <PortraitCard
            name="Anjali Jha"
            photo="/images/bride.jpg"
            role="THE BRIDE · DULHAN"
            roleHindi="वधू — Dulhan"
            description="Resplendent in her bridal lehenga, Anjali brings the light of Dehat into every heart she touches."
            delay={0.2}
          />
        </div>

        {/* Bottom quote */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldenDivider className="mb-5" />
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '1.1rem', opacity: 0.75, padding: '0 16px' }}
          >
            "Two souls, one destiny — woven in the golden threads of Mithila heritage."
          </p>
          <div className="flex justify-center mt-3 gap-2 opacity-40">
            <MithilaLotus size={20} />
            <MithilaLotus size={20} />
            <MithilaLotus size={20} />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 opacity-15 pointer-events-none rotate-180"><PaisleyBorder /></div>
      <div className="absolute bottom-0 left-0 right-0 opacity-15 pointer-events-none"><PaisleyBorder /></div>
    </section>
  )
}
