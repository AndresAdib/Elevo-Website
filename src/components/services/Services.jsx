import React from 'react';
import "./Services.css";


export const Services = () => {
  return (
    <section id='services'>

      <h3 className='services-title' data-aos="zoom-in">SERVICES</h3>

      <div className='approach-container'>
        <p className='services-text' data-aos="fade-down">An innovative approach for entrepreneurs + growing companies with ELEVO.</p>
        <div className='services-underline'></div>
        <div className='approach-boxes'>
          <div className='approach-box' data-aos="fade-up">
            <h4>a SMART investment</h4>
            <p>Invest in proactive legal expertise<br />
            and strategic planning to safeguard<br />
            your company's future. Dedicated<br />
            to the principle of long-term<br />
            relationships, our SGCs are not<br />
            just advisors—they are your<br />
            partners in strategic growth. </p>
          </div>
          <div className='approach-box' data-aos="fade-down">
            <h4>CLIENT-CENTERED approach</h4>
            <p>Our SGC services are not just a cost-<br />saving measure but an investment in<br />
            your company's future stability and<br />
            success. We spend the time to know<br />
            your business with a vested interest in<br />
            your success and setting the foundation<br />
            for sustainable growth.</p>
          </div>
          <div className='approach-box' data-aos="fade-up">
            <h4>CUSTOMIZED flexibility</h4>
            <p>Whether it's a part-time interim<br />
            solution or a long-term strategic<br />
            partnership, our SGC services<br />
            adapt to your evolving business<br />
            landscape. Along with flexible<br />
            pricing models to fit your budget<br />
            now and into the future.</p>
          </div>
        </div>
      </div>

      <p className='plus' data-aos="slide-down">+</p>
      <h3 className='issues-text' data-aos="slide-up">Our Strategic General Counsel assist with innovative decision-making<br />
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
