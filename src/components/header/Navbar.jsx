import React from 'react';
import "./Navbar.css";

export const Navbar = () => {
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });  

  return (
    <section id='navbar' data-aos="fade-down">

      <div className='nav-container'>
        
        <img src='/src/assets/ELEVOlogo-white.png' alt="" />
        
        <div className="menu">
          <a href='#header'>HOME</a>
          <a href='#why'>WHY</a>
          <a href='#services'>SERVICES</a>
          <a href='#prueba'>TEAM</a>
          <a href='#contact'>CONTACT</a>
        </div>
      </div>

    </section>
  )
}