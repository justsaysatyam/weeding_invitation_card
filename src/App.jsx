import { useState } from 'react'
import BookCover from './components/BookCover'
import PetalShower from './components/PetalShower'
import AudioPlayer from './components/AudioPlayer'
import HeroCouple from './components/HeroCouple'
import TasselScroll from './components/TasselScroll'
import FestivitiesCarousel from './components/FestivitiesCarousel'
import PhotoStory from './components/PhotoStory'
import VenueRSVP from './components/VenueRSVP'

export default function App() {
  const [bookOpened, setBookOpened] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const handleOpen = () => {
    setPlayAudio(true)
    setTimeout(() => setBookOpened(true), 1400)
  }

  return (
    <>
      {/* Always-on falling rose petals */}
      <PetalShower />

      {/* Floating audio toggle */}
      <AudioPlayer shouldPlay={playAudio} />

      {/* Book cover — shown until opened */}
      {!bookOpened && <BookCover onOpen={handleOpen} />}

      {/* Main invitation content */}
      {bookOpened && (
        <main>
          <HeroCouple />
          <TasselScroll />
          <FestivitiesCarousel />
          <PhotoStory />
          <VenueRSVP />
        </main>
      )}
    </>
  )
}
