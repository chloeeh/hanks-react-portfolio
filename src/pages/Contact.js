import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'react-portfolio', form.current, 'O4OdZxcmxN_OcYbsS')
      .then((result) => {
          console.log(result.text);
          console.log("SENT");
      }, (error) => {
          console.log(error.text);
          console.log("ERROR");
      });
      e.target.reset();
  };

  return (
    <div id="contact" className='col page-container'>         
      <h1>Contact Me</h1>
      <form 
        className='w-[80%] md:w-[50%]'
        ref={form} 
        onSubmit={sendEmail}
      >
        <div>
          <input 
            className='p-2 mb-2 border rounded-lg'
            type="text" 
            name="name" 
            title="Required"
            placeholder="Name"
          />
        </div>
        <div>
          <input 
            className='p-2 mb-2 border rounded-lg'
            type="email" 
            name="email" 
            title="Required"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea 
            className='w-full p-2.5 border rounded-lg'
            name="message" 
            placeholder='Message'
            />
        </div>
        <button 
          className='flex p-2 rounded-lg bg-[#CA929A] text-[#1f5c59] font-bold active:bg-[#d16071]'
          type="submit" 
          value="Send"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;