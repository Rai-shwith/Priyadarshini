import React from 'react'
import Background from './components/Background'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import NumberSection from './components/NumberSection'
import Education from './components/Education'
import Facilities from './components/Facilities'

const App = () => {
  return (
    <Background>
      <NavBar />
      <HeroSection />
      <NumberSection />
      <Education />
      <Facilities />
    </Background>
  )
}

export default App