import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Form.css";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iokalcb', 'template_cjb20no', form.current, {
        publicKey: 'X5HE4U0ugHKWZx37i',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='form'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='form-container'>
                <div className='form-info'>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                    type="text"
                    name="user_name"
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="user_email"
                    />
                </div>
            </div>

            <div className='form-container'>
                <div className='form-info'>
                    <label htmlFor="phone">Phone</label>
                    <input
                    type="tel"
                    name="user_phone"
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="company">Company (optional)</label>
                    <input
                    type="text"
                    name="user_company"
                    />
                </div>
            </div>

            <div className='form-info'>
                <label htmlFor="message">Message:</label>
                <textarea
                name="user_message"
                rows="5"
                ></textarea>
            </div>
            <button type="submit" >SEND MESSAGE</button>
        </form>

    </section>
  )
}
