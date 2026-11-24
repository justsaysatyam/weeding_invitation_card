import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function AashirvaadButton({ onShower }) {
  const [count, setCount] = useState(148)
  const [showToast, setShowToast] = useState(false)

  const handleBless = () => {
    setCount(prev => prev + 1)
    if (onShower) onShower()

    // Royal golden and marigold flower petal confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.85, x: 0.2 },
      colors: ['#D4AF37', '#F5E06A', '#F59E0B', '#15803D', '#580B18'],
      shapes: ['circle'],
      scalar: 1.2,
    })

    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      {/* Floating button on bottom-left */}
      <div className="fixed bottom-5 left-4 z-[990]">
        <motion.button
          onClick={handleBless}
          className="flex items-center gap-2 rounded-full px-4 py-2.5 shadow-xl select-none cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #580B18 0%, #7a1020 100%)',
            border: '2px solid #D4AF37',
            boxShadow: '0 6px 20px rgba(88,11,24,0.4), 0 0 15px rgba(212,175,55,0.4)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-lg">🌸</span>
          <div className="text-left">
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '10px',
                color: '#F5E06A',
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              आशीर्वाद दें
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '8px',
                color: '#D4AF37',
                opacity: 0.85,
              }}
            >
              {count} Blessings
            </p>
          </div>
        </motion.button>
      </div>

      {/* Blessing Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[1000] rounded-2xl p-4 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #3d0710 0%, #580B18 100%)',
              border: '1.5px solid #D4AF37',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🙏</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '11px',
                    color: '#F5E06A',
                    fontWeight: 700,
                  }}
                >
                  आपका आशीर्वाद प्राप्त हुआ!
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '10px',
                    color: '#F9F3E8',
                    opacity: 0.8,
                  }}
                >
                  वर-वधू बिपिन एवं अंजलि को आपका स्नेह प्राप्त हुआ। धन्यवाद!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

