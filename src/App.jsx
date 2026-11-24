import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import OpeningCurtain from './components/OpeningCurtain'
import PetalShower from './components/PetalShower'
import AudioPlayer from './components/AudioPlayer'
import HeroSection from './components/HeroSection'
import BrideGroomShowcase from './components/BrideGroomShowcase'
import Timeline from './components/Timeline'
import Saptapadi from './components/Saptapadi'
import VenueSection from './components/VenueSection'
import SpotlightGallery from './components/SpotlightGallery'
import AashirvaadButton from './components/AashirvaadButton'
import Footer from './components/Footer'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [petalActive, setPetalActive] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const handleOpen = () => {
    // 1. Trigger golden petal shower
    setPetalActive(true)
    // 2. Trigger audio playback via user gesture
    setPlayAudio(true)
    // 3. Unlock document scrolling
    document.body.classList.remove('locked')
    // 4. Reveal content smoothly after 3D palace door opening swing
    setTimeout(() => setOpened(true), 1100)
    // 5. Calm down petal shower after 8 seconds
    setTimeout(() => setPetalActive(false), 8000)
  }

  const triggerAashirvaadShower = () => {
    setPetalActive(true)
    setTimeout(() => setPetalActive(false), 5000)
  }

  return (
    <div className="relative min-h-screen font-poppins" style={{ background: '#FDFBF7' }}>
      {/* Golden flower petal shower overlay */}
      <PetalShower active={petalActive} />

      {/* Floating royal audio player */}
      <AudioPlayer shouldPlay={playAudio} />

      {/* 3D Grand Royal Palace Darwaza Door Opening Reveal */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="curtain"
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <OpeningCurtain onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Website */}
      <AnimatePresence>
        {opened && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* 1. Auspicious Shlokas + Couple Arch + Ticking Countdown + Calendar CTA */}
            <HeroSection />

            {/* 2. Bride & Groom Royal Portraits */}
            <BrideGroomShowcase />

            {/* 3. Four-Day Wedding Functions Timeline */}
            <Timeline />

            {/* 4. Saptapadi — Seven Sacred Vows of Mithila */}
            <Saptapadi />

            {/* 5. Venue Guide & Jagatpur to Rajnagar Baraat Route Directions */}
            <VenueSection />

            {/* 6. Spotlight Lightbox Photo Gallery */}
            <SpotlightGallery />

            {/* 7. Jha Family Blessings & Direct Phone/WhatsApp Contact */}
            <Footer />

            {/* 8. Interactive Floating "आशीर्वाद दें" (Shower Petals) Action Button */}
            <AashirvaadButton onShower={triggerAashirvaadShower} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
