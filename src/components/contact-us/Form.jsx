import React from 'react';
import { useState } from 'react';
import "./Form.css";

export const Form = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, msg: '' });

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', msg: data.message });
      } else {
        setStatus({ type: 'error', msg: data.message });
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setStatus({ type: 'error', msg: 'Error al enviar la solicitud' });
    }
  };

  return (
    <section id='form'>
        <form onSubmit={onFormSubmit}>
            <div className='form-container'>
                <div className='form-info'>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formState.fullName}
                    onChange={onFormChange}
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={onFormChange}
                    />
                </div>
            </div>

            <div className='form-container'>
                <div className='form-info'>
                    <label htmlFor="phone">Phone</label>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formState.phone}
                    onChange={onFormChange}
                    />
                </div>
                <div className='form-info'>
                    <label htmlFor="company">Company(optional)</label>
                    <input
                    type="text"
                    name="company"
                    id="company"
                    value={formState.company}
                    onChange={onFormChange}
                    />
                </div>
            </div>

            <div className='form-info'>
                <label htmlFor="message">Message:</label>
                <textarea
                name="message"
                id="message"
                rows="5"
                value={formState.message}
                onChange={onFormChange}
                ></textarea>
            </div>
            <button type="submit">SEND MESSAGE</button>
        </form>
      {status.type && <p>{status.msg}</p>}
    </section>
  )
}
