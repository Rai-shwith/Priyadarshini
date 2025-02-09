import React from 'react'
import Background from './components/Background'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import NumberSection from './components/NumberSection'
import Education from './components/Education'
import Facilities from './components/Facilities'
import ContactUs from './components/ContactUs'
import AdmissionForm from './components/AdmissionForm'

const App = () => {
  return (
    <Background>
      <NavBar />
      <HeroSection />
      <NumberSection />
      <Education />
      <Facilities />
      <ContactUs />
      <AdmissionForm />
    </Background>
  )
}

export default App