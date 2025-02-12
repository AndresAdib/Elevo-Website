import React from 'react';
import "./Services.css";


export const Services = () => {
  return (
    <section id='services'>

      <h3 className='services-title' data-aos="zoom-in">SERVICES</h3>

      <div className='approach-container'>
        <p className='services-text' data-aos="fade-down">An innovative approach for entrepreneurs + growing companies with ELEVO.<br /></p>
        <div className='services-underline'></div>
        <p className='services-text2'> Aligning our success with the success of your business. <span>Satisfaction Guaranteed!</span></p>
        <div className='services-underline2'></div>
        {/*<div className='approach-boxes'>
          <div className='approach-box' data-aos="fade-up">
            <h4>a SMART investment</h4>
            <p>Proactive legal expertise
            and <br />strategic planning to safeguard<br />
            your company's future.<br /> Dedicated
            to the principle of <br />long-term
            relationships, not<br />
            just lawyers - but a
            partner in <br />strategic growth. </p>
          </div>
          <div className='approach-box' data-aos="fade-up">
            <h4>CUSTOMIZED flexibility</h4>
            <p>Whether it's a part-time interim<br />
            solution or a long-term strategic<br />
            engagement, we 
            adapt to your <br />evolving business
            landscape; along <br />with flexible
            pricing models to fit <br />your budget
            now and into <br />the future.</p>
          </div>
          <div className='approach-box' data-aos="fade-down">
            <h4>CLIENT-CENTERED approach</h4>
            <p>Not just a cost-saving <br />measure but an investment in<br />
            your company's future stability <br />and
            future. We invest the time <br />to know
            your business with a vested <br />interest in
            your success, setting a <br />foundation
            for sustainable growth.</p>
          </div>
        </div>*/}
      </div>

      {/*<p className='plus' data-aos="slide-down">+</p>*/}
      <h3 className='issues-text' data-aos="slide-up">Our Strategic Counsel assist with innovative decision-making<br />
        across a wide array of business and legal issues, including:
      </h3>

      <div className='services-container'>
        <div className='services-boxes'>
            <div className='services-box2' data-aos="fade-down"> 
              <h4 className='service2'>raising capital</h4>             
            </div>
            <div className='services-box' data-aos="slide-up">
              <h4 className='service'>business formation <br />strategy</h4>              
            </div>
            <div className='services-box2' data-aos="fade-down">
              <h4 className='service'>joint ventures <br />+ acquisitions</h4>              
            </div>
        </div>

        <div className='services-boxes'>
            <div className='services-box' data-aos="fade-down">
              <h4 className='service2'>Intellectual property</h4>              
            </div>
            <div className='services-box2' data-aos="slide-up">
              <h4 className='service'>contracts + commercial <br />transactions</h4>             
            </div>
            <div className='services-box' data-aos="fade-down">
              <h4 className='service2'>succession planning</h4>              
            </div>
        </div>

        <div className='services-boxes'>
            <div className='services-box2' data-aos="fade-down">
              <h4 className='service2'>hr + employment</h4>             
            </div>
            <div className='services-box' data-aos="slide-up">
              <h4 className='service'>government regulations<br />+ compliance</h4>              
            </div>
            <div className='services-box2' data-aos="fade-down">
              <h4 className='service'>technology integration <br />+ cyber security</h4>
            </div>
        </div>

        <div className='services-boxes'>
            <div className='services-box' data-aos="fade-down">  
              <h4 className='service'>international <br />transactions</h4>            
            </div>
            <div className='services-box2' data-aos="slide-up">
              <h4 className='service'>litigation management <br />+ resolution</h4>             
            </div>
            <div className='services-box' data-aos="fade-down">
              <h4 className='service'>real estate <br />development + expansion</h4>             
            </div>
        </div>

      </div>

    </section>
  )
}
