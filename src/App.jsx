import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import OpeningCurtain from './components/OpeningCurtain'
import PetalShower from './components/PetalShower'
import AudioPlayer from './components/AudioPlayer'
import HeroSection from './components/HeroSection'
import BrideGroomShowcase from './components/BrideGroomShowcase'
import Timeline from './components/Timeline'
import VenueSection from './components/VenueSection'
import SpotlightGallery from './components/SpotlightGallery'
import Footer from './components/Footer'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [petalActive, setPetalActive] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const handleOpen = () => {
    // Trigger petal shower
    setPetalActive(true)
    // Trigger audio play (user gesture bypass)
    setPlayAudio(true)
    // Unlock scroll
    document.body.classList.remove('locked')
    // Open invitation after brief petal moment
    setTimeout(() => setOpened(true), 200)
    // Stop petal shower after 6 seconds
    setTimeout(() => setPetalActive(false), 7000)
  }

  return (
    <div className="relative min-h-screen font-poppins" style={{ background: '#FDFBF7' }}>
      {/* Petal shower overlay */}
      <PetalShower active={petalActive} />

      {/* Floating audio control */}
      <AudioPlayer shouldPlay={playAudio} />

      {/* Opening curtain */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="curtain"
            exit={{
              clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 50% 0% 50%)', 'inset(0% 100% 0% 0%)'],
              opacity: [1, 1, 0],
              transition: { duration: 1.2, ease: 'easeInOut' }
            }}>
            <OpeningCurtain onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main invitation content */}
      <AnimatePresence>
        {opened && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}>
            <HeroSection />
            <BrideGroomShowcase />
            <Timeline />
            <VenueSection />
            <SpotlightGallery />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
