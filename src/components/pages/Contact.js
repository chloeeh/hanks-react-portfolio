import React, { useState } from 'react';
import '../../App.css';

// Imported helper to check if email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    // e.target.name without the const variable.. makes it easy for preference
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Preventing the default behavior of the form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if email is not valid or the userName is empty.
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Email is invalid. Name and message fields must not be empty');
      // Exit so user can correct error
      return;
    }

    // If successful, clear out fields for next entry.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div id="contact" className='col page-container'>
      <h1>Contact Me</h1>
      <form className="form">
        <div>
          <input
            className='p-2 mb-2 border rounded-lg'
            title="Required"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className='p-2 mb-2 border rounded-lg'
            title="Required"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            className='p-5 mb-2 border rounded-lg placeholder:-translate-y-9 placeholder:-translate-x-10'
            title="Required"
            value={message}
            name="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message" 
          />
        </div>
        <button 
          className='flex p-2 rounded-lg bg-[#CA929A] text-[#1f5c59] font-bold active:bg-[#d16071]'
          type="submit" 
          onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text font-bold mt-2">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
