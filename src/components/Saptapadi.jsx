import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoldenDivider, MithilaLotus, CornerOrnament, RoyalDiya } from './MithilaArt'

const VOWS = [
  {
    step: '१',
    sanskrit: 'ॐ एकमिषे विष्णुस्त्वान्वेतु',
    title: 'प्रथम पद — पोषण एवं सुव्यवस्था',
    meaning: 'जीवन में भोजन, स्वास्थ्य और पोषण की परिपूर्णता के लिए साथ चलेंगे।',
    english: 'Together we shall nurture our home with nourishment and health.',
  },
  {
    step: '२',
    sanskrit: 'ॐ द्वे ऊर्जे विष्णुस्त्वान्वेतु',
    title: 'द्वितीय पद — आत्मिक व शारीरिक शक्ति',
    meaning: 'सुख-दुःख में एक-दूसरे की आंतरिक व बाह्य शक्ति बनकर खड़े रहेंगे।',
    english: 'Together we shall share emotional, physical and spiritual strength.',
  },
  {
    step: '३',
    sanskrit: 'ॐ त्रीणि रायस्पोषाय विष्णुस्त्वान्वेतु',
    title: 'तृतीय पद — समृद्धि एवं धर्म-पालन',
    meaning: 'धर्मानुसार जीवनयापन और परिवार की उन्नति में परस्पर सहयोग करेंगे।',
    english: 'Together we shall earn prosperity with righteous virtue and diligence.',
  },
  {
    step: '४',
    sanskrit: 'ॐ चत्वारि मायोभवाय विष्णुस्त्वान्वेतु',
    title: 'चतुर्थ पद — आनंद एवं सामंजस्य',
    meaning: 'परिवार में प्रेम, सम्मान, आनंद और मधुर सामंजस्य बनाए रखेंगे।',
    english: 'Together we shall cultivate harmony, mutual respect and joyful laughter.',
  },
  {
    step: '५',
    sanskrit: 'ॐ पञ्च पशुभ्यो विष्णुस्त्वान्वेतु',
    title: 'पञ्चम पद — वंशवृद्धि एवं संस्कार',
    meaning: 'आने वाली पीढ़ियों को उत्तम संस्कार, ज्ञान और प्रेम प्रदान करेंगे।',
    english: 'Together we shall bless and guide our family with noble values.',
  },
  {
    step: '६',
    sanskrit: 'ॐ षडृतुभ्यो विष्णुस्त्वान्वेतु',
    title: 'षष्ठ पद — हर ऋतु में साथ',
    meaning: 'जीवन के हर मौसम और उतार-चढ़ाव में सदैव एक-दूसरे के संग रहेंगे।',
    english: 'Together we shall weather every season of life side by side in love.',
  },
  {
    step: '७',
    sanskrit: 'ॐ सखे सप्तापदा भव',
    title: 'सप्तम पद — शाश्वत मित्रता व समर्पण',
    meaning: 'हम जन्म-जन्मांतर के सच्चे सखा और जीवनसाथी बनकर रहेंगे।',
    english: 'We are lifelong soulmates, true companions, and eternal friends.',
  },
]

export default function Saptapadi() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      className="relative py-16 overflow-hidden px-4"
      style={{ background: 'linear-gradient(180deg, #FDFBF7 0%, #F5EDD8 50%, #FDFBF7 100%)' }}
    >
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <RoyalDiya size={30} />
            <MithilaLotus size={32} />
            <RoyalDiya size={30} />
          </div>
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              color: '#D4AF37',
              fontSize: '10px',
              letterSpacing: '0.4em',
              marginBottom: '6px',
            }}
          >
            SACRED SEVEN VOWS
          </p>
          <h2
            className="section-title"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              color: '#580B18',
              fontSize: '2.2rem',
            }}
          >
            सप्तपदी — Seven Vows
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: '#580B18',
              fontSize: '11px',
              opacity: 0.65,
              marginTop: '4px',
            }}
          >
            The eternal promises binding Bipin &amp; Anjali for seven lifetimes
          </p>
          <GoldenDivider className="mt-4" />
        </motion.div>

        {/* 7 Vows Step Numbers Selector */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mb-6">
          {VOWS.map((vow, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 select-none"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '13px',
                fontWeight: 700,
                background:
                  activeStep === i
                    ? 'linear-gradient(135deg, #D4AF37 0%, #F5E06A 50%, #B8942A 100%)'
                    : 'rgba(212,175,55,0.12)',
                color: activeStep === i ? '#580B18' : '#D4AF37',
                border: activeStep === i ? '2px solid #580B18' : '1px solid rgba(212,175,55,0.35)',
                boxShadow: activeStep === i ? '0 4px 14px rgba(212,175,55,0.5)' : 'none',
                transform: activeStep === i ? 'scale(1.12)' : 'scale(1)',
              }}
            >
              {vow.step}
            </button>
          ))}
        </div>

        {/* Selected Vow Card Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="event-card rounded-2xl p-6 relative overflow-hidden text-center"
              style={{
                background: 'linear-gradient(135deg, #FDFBF7 0%, #F9F3E8 100%)',
                border: '1.5px solid rgba(212,175,55,0.5)',
                boxShadow: '0 8px 30px rgba(88,11,24,0.08)',
              }}
            >
              {/* Corner filigrees */}
              <CornerOrnament size={40} className="absolute top-2 left-2 opacity-35" />
              <CornerOrnament size={40} flip className="absolute top-2 right-2 opacity-35" />

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: 'linear-gradient(135deg, rgba(88,11,24,0.08), rgba(212,175,55,0.15))',
                  color: '#580B18',
                  letterSpacing: '0.1em',
                }}
              >
                वचन संख्या {VOWS[activeStep].step}
              </span>

              {/* Sanskrit Mantra */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  color: '#580B18',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                {VOWS[activeStep].sanskrit}
              </h3>

              {/* Title */}
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#D4AF37',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                }}
              >
                {VOWS[activeStep].title}
              </p>

              {/* Hindi Meaning */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: '#3d0710',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  opacity: 0.85,
                  marginBottom: '8px',
                }}
              >
                "{VOWS[activeStep].meaning}"
              </p>

              {/* English */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  color: '#580B18',
                  fontSize: '11.5px',
                  opacity: 0.65,
                }}
              >
                — {VOWS[activeStep].english}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Quick navigation arrows */}
          <div className="flex justify-between items-center mt-3 px-2">
            <button
              onClick={() => setActiveStep(prev => (prev === 0 ? 6 : prev - 1))}
              className="text-xs font-cinzel font-bold text-gold hover:underline cursor-pointer"
              style={{ color: '#D4AF37' }}
            >
              ← पिछला वचन
            </button>
            <span
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px', color: '#580B18', opacity: 0.5 }}
            >
              {activeStep + 1} of 7
            </span>
            <button
              onClick={() => setActiveStep(prev => (prev === 6 ? 0 : prev + 1))}
              className="text-xs font-cinzel font-bold text-gold hover:underline cursor-pointer"
              style={{ color: '#D4AF37' }}
            >
              अगला वचन →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

