import './App.css'
import { useState } from 'react'
import { Strategic } from './components/why/strategic'
import { Services } from './components/services/Services'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Contact } from './components/contact-us/Contact'
import { Navbar } from './components/header/Navbar'
import { Team } from './components/team/Team'




function App() {
  return (
    <div> 
      <Navbar />
      <Header />
      <Strategic />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
