import { motion } from 'framer-motion'
import { GoldenDivider, MithilaLotus, PaisleyBorder, CornerOrnament } from './MithilaArt'

/* ══ Event data ══ */
const events = [
  {
    no: '01',
    date: '07 DEC',
    day: 'Sunday',
    year: '2026',
    title: 'Khaan Peen',
    hindi: 'खान पान',
    subtitle: 'Pre-Wedding Feast',
    emoji: '🍽️',
    accent: '#D4AF37',
    bg: 'linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(249,243,232,0.98) 100%)',
    border: 'rgba(212,175,55,0.45)',
    dot: '#D4AF37',
    description:
      'Join the Jha Family for a warm festive feast rooted in authentic Mithila hospitality. Begin the celebrations with love, laughter, and traditional delicacies.',
    tag: null,
    details: null,
  },
  {
    no: '02',
    date: '08 DEC',
    day: 'Monday',
    year: '2026',
    title: 'Haldi & Mehendi',
    hindi: 'हल्दी & मेहँदी',
    subtitle: 'Sacred Beauty Ceremony',
    emoji: '🌼',
    accent: '#F59E0B',
    bg: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(249,243,232,0.98) 100%)',
    border: 'rgba(245,158,11,0.5)',
    dot: '#F59E0B',
    description:
      'A vibrant morning of marigold yellow & mehendi green — where the bride glows with turmeric blessings and intricate henna artistry fills the air with fragrance.',
    tag: { label: 'Haldi · Mehendi', colors: ['#F59E0B', '#15803D'] },
    details: null,
  },
  {
    no: '03',
    date: '09 DEC',
    day: 'Wednesday',
    year: '2026',
    title: 'Baraat Prasthan',
    hindi: 'बारात प्रस्थान',
    subtitle: "Groom's Royal Procession",
    emoji: '🐴',
    accent: '#D4AF37',
    bg: 'linear-gradient(135deg, rgba(212,175,55,0.07) 0%, rgba(249,243,232,0.98) 100%)',
    border: 'rgba(212,175,55,0.45)',
    dot: '#D4AF37',
    description:
      'The royal baraat departs with dhol-nagara, shehnai, and roaring celebration. The groom sets off in grandeur from his ancestral home.',
    tag: null,
    details: {
      icon: '📍',
      label: 'Dulha Ka Ghar',
      address: 'Vill + PO — Jagatpur\nMadhubani, Bihar',
      mapUrl: null,
    },
  },
  {
    no: '04',
    date: '09 DEC',
    day: 'Wednesday',
    year: '2026',
    title: 'Shubh Vivah',
    hindi: 'शुभ विवाह',
    subtitle: 'Sacred Wedding Ceremony',
    emoji: '🪔',
    accent: '#D4AF37',
    bg: 'linear-gradient(135deg, rgba(88,11,24,0.06) 0%, rgba(249,243,232,0.99) 100%)',
    border: 'rgba(212,175,55,0.6)',
    dot: '#D4AF37',
    description:
      'Under a canopy of marigolds and sacred fire, Bipin & Anjali take their seven vows. Witness the most auspicious moment of their royal Mithila wedding.',
    tag: { label: '✦ MAIN WEDDING EVENT ✦', colors: ['#D4AF37', '#F5E06A'] },
    details: {
      icon: '📍',
      label: 'Dulhan Ka Ghar (Marriage Venue)',
      address: 'Vill + PO — Dehat, Block + PS — Rajnagar\nDist — Madhubani, Bihar',
      mapUrl: 'https://maps.app.goo.gl/4tsKtvSdjqRHzUPJA',
    },
    isMain: true,
  },
]

/* ══ Single Event Card ══ */
const EventCard = ({ event, index }) => (
  <motion.div
    className="relative w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
  >
    {/* ── Date badge + connecting line layout ── */}
    <div className="flex gap-0">
      {/* Left column: date badge + vertical line */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '72px' }}>
        {/* Date circle */}
        <div
          className="relative flex-shrink-0 flex flex-col items-center justify-center rounded-full z-10"
          style={{
            width: '64px',
            height: '64px',
            background: event.isMain
              ? 'linear-gradient(145deg, #3d0710, #580B18)'
              : 'linear-gradient(145deg, #D4AF37, #F5E06A, #B8942A)',
            boxShadow: event.isMain
              ? '0 0 0 3px #D4AF37, 0 4px 20px rgba(88,11,24,0.4)'
              : '0 0 0 3px #FDFBF7, 0 4px 20px rgba(212,175,55,0.5)',
          }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: 1,
              color: event.isMain ? '#D4AF37' : '#580B18',
            }}
          >
            {event.date.split(' ')[0]}
          </span>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '7px',
              letterSpacing: '0.08em',
              color: event.isMain ? '#D4AF37' : '#580B18',
              opacity: 0.85,
              marginTop: '2px',
            }}
          >
            {event.date.split(' ')[1]} {event.year}
          </span>
        </div>
        {/* Vertical connector line */}
        {index < events.length - 1 && (
          <div
            className="flex-1 w-0.5 mt-2 mb-0"
            style={{
              minHeight: '40px',
              background: 'linear-gradient(180deg, #D4AF37 0%, rgba(212,175,55,0.3) 100%)',
            }}
          />
        )}
      </div>

      {/* Right column: event card */}
      <div className="flex-1 ml-3 mb-5">
        {/* Top row: emoji + titles */}
        <div
          className="event-card relative overflow-hidden"
          style={{
            background: event.bg,
            border: `1.5px solid ${event.border}`,
            borderRadius: '18px',
            padding: '16px',
          }}
        >
          {/* Top shimmer line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${event.accent}, transparent)` }}
          />

          {/* Event number watermark */}
          <div
            className="absolute top-2 right-3 opacity-[0.07]"
            style={{ fontFamily: "'Cinzel', serif", fontSize: '3rem', fontWeight: 900, color: event.accent, lineHeight: 1 }}
          >
            {event.no}
          </div>

          {/* Header: emoji + name + hindi */}
          <div className="flex items-start gap-3 mb-3">
            {/* Emoji circle */}
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full text-xl"
              style={{
                width: '44px',
                height: '44px',
                background: `linear-gradient(135deg, ${event.accent}22, ${event.accent}11)`,
                border: `1.5px solid ${event.border}`,
                flexShrink: 0,
              }}
            >
              {event.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontWeight: 700,
                    color: '#580B18',
                    fontSize: '15px',
                    lineHeight: 1.3,
                  }}
                >
                  {event.title}
                </h3>
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '1.4rem',
                    color: event.accent,
                    lineHeight: 1,
                  }}
                >
                  {event.hindi}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '10px',
                  color: '#580B18',
                  opacity: 0.55,
                  marginTop: '3px',
                  letterSpacing: '0.08em',
                }}
              >
                {event.day} · {event.subtitle}
              </p>
            </div>
          </div>

          {/* Haldi color bar */}
          {event.tag && event.tag.colors.length === 2 && event.no === '02' && (
            <div className="flex gap-1 mb-3 rounded-full overflow-hidden h-1.5">
              <div className="flex-1 rounded-full" style={{ background: '#F59E0B' }} />
              <div className="flex-1 rounded-full" style={{ background: '#15803D' }} />
              <div className="flex-1 rounded-full" style={{ background: '#F59E0B' }} />
            </div>
          )}

          {/* Description */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12.5px',
              color: '#3d0710',
              opacity: 0.78,
              lineHeight: 1.65,
              marginBottom: event.details ? '12px' : '0',
            }}
          >
            {event.description}
          </p>

          {/* Address / venue details */}
          {event.details && (
            <div
              className="rounded-xl p-3"
              style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.25)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '9px',
                  color: '#D4AF37',
                  letterSpacing: '0.15em',
                  marginBottom: '4px',
                  fontWeight: 600,
                }}
              >
                {event.details.icon} {event.details.label}
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '12px',
                  color: '#580B18',
                  opacity: 0.85,
                  whiteSpace: 'pre-line',
                  lineHeight: 1.5,
                }}
              >
                {event.details.address}
              </p>
              {event.details.mapUrl && (
                <a
                  href={event.details.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '11px',
                    padding: '8px 18px',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
                    color: '#580B18',
                    letterSpacing: '0.08em',
                    boxShadow: '0 3px 12px rgba(212,175,55,0.35)',
                  }}
                >
                  🗺️ Open in Google Maps
                </a>
              )}
            </div>
          )}

          {/* Main event badge */}
          {event.isMain && (
            <div
              className="mt-3 inline-flex items-center gap-1 rounded-full"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                padding: '5px 14px',
                background: 'linear-gradient(135deg, #D4AF37, #F5E06A)',
                color: '#580B18',
              }}
            >
              ✦ MAIN WEDDING EVENT ✦
            </div>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

/* ══ Main Section ══ */
export default function Timeline() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #FDF5E6 55%, #FDFBF7 100%)' }}
    >
      <div className="relative z-10 max-w-lg mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
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
            THE GRAND CELEBRATIONS
          </p>
          <h2
            className="section-title"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#580B18', fontSize: '2.3rem' }}
          >
            Wedding Functions
          </h2>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", color: '#580B18', fontSize: '12px', opacity: 0.55, marginTop: '6px' }}
          >
            A four-day royal Mithila celebration
          </p>
          <GoldenDivider className="mt-4" />
        </motion.div>

        {/* Event cards */}
        <div className="relative">
          {events.map((event, i) => (
            <EventCard key={i} event={event} index={i} />
          ))}

          {/* Terminal lotus */}
          <div className="flex justify-center mt-2">
            <MithilaLotus size={36} />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 opacity-12 pointer-events-none rotate-180">
        <PaisleyBorder />
      </div>
      <div className="absolute bottom-0 left-0 right-0 opacity-12 pointer-events-none">
        <PaisleyBorder />
      </div>
    </section>
  )
}
