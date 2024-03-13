import React from 'react';
import "./Header.css";


export const Header = () => {
  return (
    <section id='header' data-aos="fade-in">

      <div className='header-container'>
        <div className='header-title' data-aos="slide-up">
          <h1>Elevate your Business <br /><span className='text2'>with ELEVO</span></h1>
        </div>
      </div>
      <div className='header-container2'>
        <div className='header-title2' data-aos="slide-right">
          <h2>Strategic Counsel for<br /><span className='growing'>Growing Companies</span></h2>
        </div>
      </div>
      

    </section>
  )
}
