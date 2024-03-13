import './App.css';
import React, { useState } from 'react';
import { Strategic } from './components/why/strategic';
import { Services } from './components/services/Services';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Contact } from './components/contact-us/Contact';
import { Navbar } from './components/header/Navbar';
import { Team } from './components/team/Team'
import { Terms } from './components/terms&con/Terms';
import Privacy from './components/privacy/Privacy';




function App() {
  const [showTerms, setShowTerms] = useState(false); 
  const [showPolicy, setShowPolicy] = useState(false); 

  return (
    <div>
      {showTerms ? (
        <Terms onClose={() => setShowTerms(false)} />
      ) : (
      
      <>
        <Navbar />
        <Header />
        <Strategic />
        <Services />
        <Team />
        <Contact />
        <Footer onShowTerms={() => setShowTerms(true)}/>
      </>
      )}

    {showPolicy && (
        <Privacy onClose={() => setShowPolicy(false)} />
      )}
    </div>
    
  )
}

export default App
