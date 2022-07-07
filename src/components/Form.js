import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Name is required');
      return;
    }

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!message) {
      setErrorMessage('Message is required');
      return;
    }

    alert(`Hello ${name}. We'll be in touch shortly.`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form id="contact-form">
        <label for="contactName" id="label-contactName">
          Your Name:
        </label>
        <input id="input-contactName" required="" value={name} name="name" onChange={handleInputChange} type="text" placeholder="Name" />
        <label for="contactEmail" id="label-contactEmail">
          Your Email:
        </label>
        <input id="input-contactEmail" required="" value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" />
        <label for="contactMessage" id="label-contactMessage">
          Your Message:
        </label>
        <input id="input-contactMessage" value={message} name="message" onChange={handleInputChange} type="textarea" placeholder="Message" />
        <input type="submit" id="label-send" value="Send Your Message" onClick={handleFormSubmit} className="btn-wrapper" />
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
