import { motion } from 'framer-motion'
import { GoldenDivider, MithilaLotus, PaisleyBorder, CornerOrnament } from './MithilaArt'

export default function VenueSection() {
  return (
    <section
      className="relative py-16 overflow-hidden px-4"
      style={{ background: 'linear-gradient(180deg, #3d0710 0%, #580B18 45%, #3d0710 100%)' }}
    >
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-2 mb-3">
            <CornerOrnament size={38} />
            <MithilaLotus size={34} />
            <CornerOrnament size={38} flip />
          </div>
          <p
            style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '10px', letterSpacing: '0.4em', marginBottom: '8px' }}
          >
            FIND YOUR WAY
          </p>
          <h2
            className="section-title"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#F9F3E8', fontSize: '2.2rem' }}
          >
            Venue &amp; Route Guide
          </h2>
          <GoldenDivider className="mt-4" />
        </motion.div>

        {/* Venue Cards */}
        <div className="space-y-6">
          {/* Baraat Departure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0.05) 100%)',
              border: '1.5px solid rgba(212,175,55,0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
            />

            <div className="flex items-start gap-3.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)',
                  boxShadow: '0 3px 12px rgba(212,175,55,0.3)',
                }}
              >
                🐴
              </div>
              <div className="flex-1 min-w-0">
                <p
                  style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.25em', color: '#D4AF37', marginBottom: '4px' }}
                >
                  BARAAT DEPARTURE · 09 DEC 2026
                </p>
                <h3
                  style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.1rem', color: '#F9F3E8', marginBottom: '2px' }}
                >
                  Baraat Prasthan
                </h3>
                <p
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.6rem', color: '#D4AF37', marginBottom: '10px' }}
                >
                  Dulha Ka Ghar
                </p>
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <p
                    style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.15em', color: '#D4AF37', marginBottom: '4px', fontWeight: 600 }}
                  >
                    📍 GROOM'S RESIDENCE
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#F9F3E8', opacity: 0.9 }}>
                    Vill + PO — Jagatpur
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#F9F3E8', opacity: 0.9 }}>
                    Madhubani, Bihar
                  </p>
                </div>
                <p
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#D4AF37', opacity: 0.75, fontStyle: 'italic', marginTop: '10px' }}
                >
                  Procession departs with dhol &amp; celebrations 🎉
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connector Arrow */}
          <div className="flex flex-col items-center gap-1 py-1">
            <span style={{ color: '#D4AF37', fontSize: '1.3rem', lineHeight: 1 }}>↓</span>
            <p
              style={{ fontFamily: "'Cinzel', serif", fontSize: '8px', letterSpacing: '0.2em', color: '#D4AF37', opacity: 0.7 }}
            >
              BARAAT PROCESSION TRAVELS TO DULHAN'S VILLAGE
            </p>
          </div>

          {/* Wedding Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl p-5 sm:p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(245,224,106,0.08) 100%)',
              border: '2px solid rgba(212,175,55,0.65)',
              boxShadow: '0 8px 36px rgba(0,0,0,0.4)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #F5E06A, transparent)' }}
            />

            <div className="flex items-start gap-3.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #F5E06A, #B8942A)',
                  boxShadow: '0 0 16px rgba(212,175,55,0.45)',
                }}
              >
                🪔
              </div>
              <div className="flex-1 min-w-0">
                <p
                  style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.25em', color: '#D4AF37', marginBottom: '4px' }}
                >
                  WEDDING CEREMONY · 09 DEC 2026
                </p>
                <h3
                  style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '1.1rem', color: '#F9F3E8', marginBottom: '2px' }}
                >
                  Shubh Vivah
                </h3>
                <p
                  style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.6rem', color: '#D4AF37', marginBottom: '10px' }}
                >
                  Dulhan Ka Ghar
                </p>
                <div
                  className="rounded-xl p-3 mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)' }}
                >
                  <p
                    style={{ fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.15em', color: '#D4AF37', marginBottom: '4px', fontWeight: 600 }}
                  >
                    📍 MARRIAGE VENUE (DULHAN HOUSE)
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#F9F3E8', opacity: 0.9 }}>
                    Vill + PO — Dehat
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#F9F3E8', opacity: 0.9 }}>
                    Block + PS — Rajnagar
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#F9F3E8', opacity: 0.9 }}>
                    Dist — Madhubani, Bihar
                  </p>
                </div>

                {/* Google Maps CTA */}
                <a
                  href="https://maps.app.goo.gl/4tsKtvSdjqRHzUPJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-md"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    padding: '10px 20px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
                    color: '#580B18',
                    boxShadow: '0 4px 16px rgba(212,175,55,0.4)',
                  }}
                >
                  🗺️ Open in Google Maps
                </a>

                <p
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#D4AF37', opacity: 0.75, fontStyle: 'italic', marginTop: '12px' }}
                >
                  Sacred wedding mandap under marigold canopy ✨
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 opacity-15 pointer-events-none rotate-180">
        <PaisleyBorder color="#D4AF37" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 opacity-15 pointer-events-none">
        <PaisleyBorder color="#D4AF37" />
      </div>
    </section>
  )
}
