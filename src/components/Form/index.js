import React, { useState } from 'react';
import './style.css';

import { validateEmail } from '../../utils/helpers';

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
      <p>Hello {name}</p>
      <form className="form">
        <input value={name} name="name" onChange={handleInputChange} type="text" placeholder="Name" />
        <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" />
        <input value={message} name="message" onChange={handleInputChange} type="textarea" placeholder="Message" />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
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
