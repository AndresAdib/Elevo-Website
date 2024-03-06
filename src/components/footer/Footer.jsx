import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }); 

  return (
    <section id='footer'>

      <div className='footer-container'>
        <div className='footer-social'>
          <img src="/src/assets/ELEVOlogo-white.png" alt="" />
        </div>

        <div className='info'>
          <div className='footer-link'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#why">Why</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#prueba">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-text'>
        <p>© ELEVO ADVISORS, LLC. All rights reserved | <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> | Privacy Policy</p>
      </div>

    </section>
  )
}
