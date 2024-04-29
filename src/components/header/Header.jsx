import React from 'react';
import "./Header.css";


export const Header = () => {
  return (
    <section id='header' data-aos="fade-in">

      <div className='header-container'>
        <div className='header-title' data-aos="slide-up">
          <h1>Elevate your Business <br /><span className='text2'>with ELEVO</span></h1>
        </div>
        <div className='header-title3' data-aos="slide-up">
          <h1>Strategic Counsel for the <br /><span className='text2'>Modern Business</span></h1>
        </div>
      </div>

      {/* <div className='header-container3'>
        <div className='header-title3' data-aos="slide-up">
          <h1>Elevate your Business <br /><span className='text2'>with ELEVO</span></h1>
        </div>
      </div>  */}

      <div className='header-container2'>
        <div className='header-title2' data-aos="slide-right">
          <h2>Combining experience and advanced technology to drive more value.</h2>
        </div>
      </div>
      
    </section>
  )
}
