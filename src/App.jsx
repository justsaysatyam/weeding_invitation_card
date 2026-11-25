import { useState } from 'react'
import FloralBorders from './components/FloralBorders'
import PetalShower from './components/PetalShower'
import AudioPlayer from './components/AudioPlayer'
import BookCover from './components/BookCover'
import HeroCouple from './components/HeroCouple'
import TasselScroll from './components/TasselScroll'
import FestivitiesCarousel from './components/FestivitiesCarousel'
import PhotoStory from './components/PhotoStory'
import VenueRSVP from './components/VenueRSVP'

export default function App() {
  const [playAudio, setPlayAudio] = useState(false)

  const handleOpenBook = () => {
    setPlayAudio(true)
    // Ensure document body is free to scroll
    document.body.style.overflow = ''
    document.body.classList.remove('locked')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #FFF6F8 0%, #FAF0F2 50%, #FFF6F8 100%)', position: 'relative' }}>
      {/* Decorative Floral Garlands at Top Corners */}
      <FloralBorders />

      {/* Gentle Floating Rose Petals */}
      <PetalShower />

      {/* Floating Sound Equalizer / Music Player */}
      <AudioPlayer shouldPlay={playAudio} />

      {/* 3D Interactive Book Cover (Flips open on tap) */}
      <BookCover onOpen={handleOpenBook} />

      {/* Main Wedding Invitation Page */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroCouple />
        <TasselScroll />
        <FestivitiesCarousel />
        <PhotoStory />
        <VenueRSVP />
      </main>
    </div>
  )
}
