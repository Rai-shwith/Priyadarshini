import React from 'react'
import Background from './components/Background'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import NumberSection from './components/NumberSection'

const App = () => {
  return (
    <Background>
      <NavBar />
      <HeroSection />
      <NumberSection />
    </Background>
  )
}

export default App