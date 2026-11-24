import { motion } from 'framer-motion'
import { GoldenDivider, MithilaLotus, PaisleyBorder, MandalaRing, MithilaPeacock } from './MithilaArt'

/* ── Contact number ── */
const PHONE = '8507754988'            // 10-digit Indian number
const PHONE_DISPLAY = '+91 85077 54988'
const WA_NUMBER = `91${PHONE}`       // WhatsApp international format

const WHATSAPP_MSG = encodeURIComponent(
  `🌸 *#BipinWedsAnjali* 🌸\n\n` +
  `आप सादर आमंत्रित हैं!\n` +
  `You are cordially invited to the Royal Wedding of\n\n` +
  `💍 *Bipin Chandra Jha* weds *Anjali Jha*\n\n` +
  `📅 *07–09 December 2026*\n` +
  `📍 Dehat, Rajnagar, Madhubani, Bihar\n\n` +
  `🗺️ Venue: https://maps.app.goo.gl/4tsKtvSdjqRHzUPJA\n\n` +
  `📞 Contact: ${PHONE_DISPLAY}\n\n` +
  `With warm blessings of the Jha Family 🙏\n` +
  `✨ #BipinWedsAnjali`
)

export default function Footer() {
  return (
    <footer
      className="relative py-14 overflow-hidden safe-bottom"
      style={{ background: 'radial-gradient(ellipse at center, #7a1020 0%, #580B18 40%, #3d0710 100%)' }}
    >
      {/* Background mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <MandalaRing size={500} opacity={1} />
      </div>

      {/* Horizontal shimmer lines */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        {[20, 35, 50, 65, 80].map(top => (
          <div
            key={top}
            className="absolute w-full h-px"
            style={{ top: `${top}%`, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-sm mx-auto px-5 text-center">

        {/* Peacock pair */}
        <div className="flex justify-center gap-6 mb-5 opacity-25">
          <MithilaPeacock size={55} />
          <MithilaPeacock size={55} />
        </div>

        <MithilaLotus size={42} className="mx-auto mb-4 opacity-75" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* From */}
          <p
            style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.4em', opacity: 0.75, marginBottom: '8px' }}
          >
            WITH LOVE & BLESSINGS FROM
          </p>
          <h3
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '3rem', color: '#F5E06A', marginBottom: '4px' }}
          >
            The Jha Family
          </h3>
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#E8C84A', opacity: 0.65, marginBottom: '20px' }}
          >
            Jagatpur &amp; Dehat, Madhubani, Bihar
          </p>

          <GoldenDivider className="mb-5" />

          {/* Blessing card */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.22)' }}
          >
            <p
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '14px', color: '#F9F3E8', opacity: 0.88, lineHeight: 1.7, marginBottom: '10px' }}
            >
              🙏 परिवार की ओर से आप सभी को हार्दिक शुभकामनाएं।
            </p>
            <p
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#F9F3E8', opacity: 0.65, lineHeight: 1.6, marginBottom: '10px' }}
            >
              With warm blessings of the entire Jha family, we joyfully invite you to grace this sacred occasion with your presence and heartfelt blessings.
            </p>
            <p
              style={{ fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.15em', color: '#D4AF37' }}
            >
              — JHA PARIVAR 🌸
            </p>
          </div>

          {/* Hashtag */}
          <p
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.6rem', color: '#D4AF37', marginBottom: '20px' }}
          >
            #BipinWedsAnjali
          </p>

          {/* Date quick-glance */}
          <div className="flex justify-center gap-4 mb-7 flex-wrap">
            {[
              { date: '07 DEC', event: 'Khaan Peen' },
              { date: '08 DEC', event: 'Haldi & Mehendi' },
              { date: '09 DEC', event: 'Shubh Vivah' },
            ].map(({ date, event }) => (
              <div key={date} className="text-center">
                <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '12px', color: '#D4AF37' }}>{date}</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '9px', color: '#F9F3E8', opacity: 0.5 }}>{event}</div>
              </div>
            ))}
          </div>

          {/* ── Contact Section ── */}
          <div
            className="rounded-2xl p-5 mb-5"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1.5px solid rgba(212,175,55,0.3)' }}
          >
            <p
              style={{ fontFamily: "'Cinzel', serif", color: '#D4AF37', fontSize: '9px', letterSpacing: '0.3em', marginBottom: '12px' }}
            >
              📞 CONTACT JHA FAMILY
            </p>

            {/* Phone call button */}
            <a
              href={`tel:+91${PHONE}`}
              className="flex items-center justify-center gap-3 rounded-full mb-3 transition-transform hover:scale-105 active:scale-95"
              style={{
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)',
                boxShadow: '0 4px 16px rgba(212,175,55,0.35)',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>📞</span>
              <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: '14px', color: '#580B18', letterSpacing: '0.08em' }}>
                {PHONE_DISPLAY}
              </span>
            </a>

            {/* WhatsApp direct ─ chat with number */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full transition-transform hover:scale-105 active:scale-95"
              style={{
                padding: '11px 20px',
                background: 'rgba(37,211,102,0.15)',
                border: '1.5px solid rgba(37,211,102,0.4)',
              }}
            >
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#25D366', fontWeight: 600 }}>
                Chat on WhatsApp
              </span>
            </a>
          </div>

          {/* ── Share Button ── */}
          <a
            href={`https://wa.me/?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full w-full justify-center transition-all hover:scale-105 active:scale-95"
            style={{
              padding: '14px 24px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              boxShadow: '0 6px 25px rgba(37,211,102,0.35)',
              marginBottom: '24px',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Share Invitation on WhatsApp
          </a>

          <GoldenDivider className="mb-4" />

          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px', color: '#D4AF37', opacity: 0.35, letterSpacing: '0.08em' }}
          >
            Made with ❤️ for Bipin &amp; Anjali · December 2026
          </p>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 opacity-18 pointer-events-none rotate-180">
        <PaisleyBorder color="#D4AF37" />
      </div>
    </footer>
  )
}
