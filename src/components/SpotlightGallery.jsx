import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { GoldenDivider, MithilaLotus, PaisleyBorder, CornerOrnament } from './MithilaArt'

const photos = [
  { src: '/images/couple.jpg', alt: 'Bipin & Anjali — Together', caption: 'Bipin & Anjali' },
  { src: '/images/bride.jpg', alt: 'Anjali Jha — Bride', caption: 'Anjali Jha — Dulhan' },
  { src: '/images/groom.jpg', alt: 'Bipin Chandra Jha — Groom', caption: 'Bipin Chandra Jha — Dulha' },
]

export default function SpotlightGallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section
      className="relative py-16 overflow-hidden px-4"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F9F3E8 100%)' }}
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
            ROYAL SPOTLIGHT
          </p>
          <h2
            className="section-title"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '2.2rem' }}
          >
            Couple Gallery
          </h2>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#580B18', opacity: 0.55, marginTop: '4px' }}
          >
            Tap any photo to view full screen
          </p>
          <GoldenDivider className="mt-4" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative cursor-pointer group rounded-2xl overflow-hidden"
              style={{
                border: '1.5px solid rgba(212,175,55,0.4)',
                boxShadow: '0 6px 20px rgba(88,11,24,0.08)',
              }}
              onClick={() => setLightbox(photo)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                style={{ height: '240px' }}
              />
              {/* Bottom tag */}
              <div
                className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between"
                style={{ background: 'linear-gradient(to top, rgba(88,11,24,0.85) 0%, transparent 100%)' }}
              >
                <p
                  style={{ fontFamily: "'Great Vibes', cursive", color: '#F5E06A', fontSize: '1.4rem' }}
                >
                  {photo.caption}
                </p>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '9px',
                    color: '#D4AF37',
                    background: 'rgba(0,0,0,0.3)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    letterSpacing: '0.1em',
                  }}
                >
                  ⤢ Zoom
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldenDivider className="mb-4" />
          <p
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1rem', color: '#580B18', opacity: 0.75 }}
          >
            "May their love story be as eternal as the lotus in Mithila's sacred ponds."
          </p>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#D4AF37', letterSpacing: '0.15em', marginTop: '8px', opacity: 0.8 }}
          >
            #BipinWedsAnjali
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[800] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: 'spring', damping: 22 }}
              className="relative max-w-sm w-full"
              onClick={e => e.stopPropagation()}
            >
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ border: '2px solid rgba(212,175,55,0.6)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full object-cover"
                  style={{ maxHeight: '72vh' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(88,11,24,0.95), transparent)' }}
                >
                  <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2rem', color: '#F5E06A' }}>
                    {lightbox.caption}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8942A)', border: 'none' }}
              >
                <X size={16} color="#580B18" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-0 left-0 right-0 opacity-12 pointer-events-none rotate-180">
        <PaisleyBorder />
      </div>
      <div className="absolute bottom-0 left-0 right-0 opacity-12 pointer-events-none">
        <PaisleyBorder />
      </div>
    </section>
  )
}
