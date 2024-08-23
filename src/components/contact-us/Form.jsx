import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FcCheckmark } from "react-icons/fc";
import "./Form.css";

export const Form = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formFields = form.current.elements;
    const errors = {};
    let hasErrors = false;

    for (let field of formFields) {
      if (field.type !== 'submit' && field.value.trim() === '') {
        errors[field.name] = 'Este campo es obligatorio';
        hasErrors = true;
        field.classList.add('error'); 
      } else {
        field.classList.remove('error'); 
      }
    }

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    setIsSubmitting(true);


    emailjs.sendForm('service_iokalcb', 'template_cjb20no', form.current, {
        publicKey: 'X5HE4U0ugHKWZx37i',
      })
      .then(
        () => {
          setEnviado(true);
          form.current.reset();
          // console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => setIsSubmitting(false));
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
                    className={errors.user_name ? 'error' : ''}
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="user_email"
                    className={errors.user_email ? 'error' : ''}
                    />
                </div>
            </div>

            <div className='form-container'>
                <div className='form-info'>
                    <label htmlFor="phone">Phone</label>
                    <input
                    type="tel"
                    name="user_phone"
                    className={errors.user_phone ? 'error' : ''}
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="company">Company</label>
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
                className={errors.user_message ? 'error' : ''}
                ></textarea>

            </div>

            <div className='success-container'>
              {enviado && <p className='success-message'><FcCheckmark />SUCCESS!</p>}
            </div>
            
            <button type="submit" disabled={isSubmitting} >SEND MESSAGE</button>
        </form>

    </section>
  )
}
