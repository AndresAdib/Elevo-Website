import './App.css'
import { useState } from 'react'
import { Welcome } from './components/welcome/welcome'
import { Strategic } from './components/strategic/strategic'
import { Services } from './components/services/Services'
import { Testimonials } from './components/testimonials/Testimonials'
import { AboutUs } from './components/about-us/AboutUs'
import { Footer } from './components/footer/Footer'



function App() {
  return (
    <div>
      <section id='header'>
        <div className='contain'>
          <div className='title'>
            <h1>ELEVO</h1>
          </div>
            <h2>Strategic Counsel + Advisory </h2>
        </div>
      </section>  

      <Welcome />
      <Strategic />
      <Services />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
