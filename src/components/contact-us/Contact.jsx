import React from 'react';
import "./Contact.css";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Form } from './Form';

export const Contact = () => {
  return (
    <section id='contact'>

        <h3 className='contact-title' data-aos="zoom-in">CONTACT</h3>

        <div className='book-container' data-aos="slide-up">
            <div className='book-box'>
                <div className='book-text'>
                    <div className='line-color'></div>
                    <h4>Ready to elevate your legal <br />strategy + maximize your <br />potential?</h4>
                    <p>Connect with us to discover how <br />Elevo can become an integral part <br />of your business's success story.</p>
                </div>

                <div className='book-image'>
                    <img src='/src/assets/header.jpg' alt="" />
                    <div className='box-orange'></div>
                    <div className='box-orange2'></div>
                </div>
            </div>    
        </div>

        <div className='contact-section'>
            <div className='contact-container'>
                <h3>Contact Us:</h3>
                <div className='contact-info'>
                    <div className='contact-icon'>
                    <BsTelephone />
                    </div>
                    <div className='information'>
                        <span>440-522-0599</span>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='contact-icon'>
                        <FiMapPin />
                    </div>
                    <div className='information'>
                        <span>Cleveland, Ohio</span>
                    </div>
                </div>
            </div>

            <div className='contact-form'>              
                <h3>Stay informed…</h3>
                <p>Subscribe to our newsletter for insights and updates<br />
                on business, technology, public policy, and legal trends<br />
                that could impact your business.</p>              
                <Form />
            </div>
            
        </div>
    </section>
  )
}
