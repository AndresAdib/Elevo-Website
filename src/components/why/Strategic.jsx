import React from 'react';
import "./Strategic.css";


export const Strategic = () => {
  return (
    <section id='why'>

      <h3 className='why-title' data-aos="zoom-in">WHY</h3>
      <div className='process'>              
        <div className='process-box'>
          <div className='why-conteiner' data-aos="fade-down">
            <h5>At ELEVO...</h5> 
            <p>We specialize in providing top-tier general counsel
            and business advisory services
            tailored to the unique needs of
            your company. Delivering
            innovative and sophisticated
            legal counsel and strategy to
            growing companies.</p>
          </div>
        </div>
        <div className='process-box'>
          <div className='image-container'>
            <div className='welcome' data-aos="fade-in">
              <h2>WELCOME to ELEVO</h2>
              <h3>Lawyers + Entrepreneurs </h3>
            </div>
            <img src='/src/assets/Strategic.jfif' className='image-process'/>
          </div>
        </div>
        <div className='process-box'>
          <div className='why-conteiner2' data-aos="fade-down">
            <h5>We aren't <br />just legal experts…</h5> 
            <p>We are also entrepreneurs,
            business owners and strategists.
            So, we get it. Our's is a client-centric 
            approach and innovative business model
            that is changing the game in legal
            services.</p>
          </div>
        </div>
      </div>

      <div className='question' data-aos="fade-up">
        <h4 >Why Strategic General Counsel? </h4>
        <div className='why-underline'></div>
        <p>In a rapidly changing business landscape, agility and expertise are paramount. Our Strategic General Counsel
        provide your business <br />with the seasoned legal and business expertise it needs to navigate growth, risk, and opportunities  in these dynamic times. <span className='bold'>Why Choose ELEVO?</span></p>
      </div>

      <div className='business'>
        <div className='business-contain'>
          <h4 data-aos="fade-up">Strategic Expertise:</h4>
          <div className='business-text' data-aos="fade-down">
            <p>Gain a seasoned C-suite business
            and legal professional as your
            strategic partner, offering a wealth
            of experience and the flexibility to meet your business's evolving needs 
            </p>
          </div>
        </div>
        <div className='business-contain'>
          <h4 data-aos="fade-up">Cost-Effective Solutions:</h4>
            <div className='business-text' data-aos="fade-down">
              <p>Access to top-tier expertise without
              the full-time executive cost
              or unnecessary “billable hours”.
              Our model is tailored to fit your
              budget while ensuring your legal needs are fully met.
              </p>
            </div>
        </div>
        <div className='business-contain'>
          <h4 data-aos="fade-up">Business-Centric Approach: </h4>
            <div className='business-text' data-aos="fade-down">
              <p>Unlike traditional law firms, we integrate deeply with your team, understanding your 
                business inside and out to provide informed, strategic advice. 
              </p>
            </div>
        </div>
        <div className='business-contain'>
          <h4 data-aos="fade-up">Flexible Engagement:</h4>
            <div className='business-text' data-aos="fade-down">
              <p>Full-time or part-time, on-site or remote—our service models flex to fit your business's needs and culture.
              </p>
            </div>
        </div>
      </div>

    </section>
  )
}
