import React from 'react'
import Background from './components/Background'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <Background>
      <NavBar />
      <HeroSection />
    </Background>
  )
}

export default App