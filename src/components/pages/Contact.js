import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';

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





// import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import '../../App.css';

// // Imported helper to check if email is valid
// import { validateEmail } from '../../utils/helpers';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [sentMessage, setSentMessage] = useState('');

//   const form = useRef();
  

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     // e.target.name without the const variable.. makes it easy for preference
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   // Preventing the default behavior of the form submit
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     console.log("PASSED DEFAULT");
//     // Check if email is not valid or the userName is empty.
//     if (!validateEmail(email) || !name || !message) {
//       setErrorMessage('Email is invalid. Name and message fields must not be empty');
//       // Exit so user can correct error
//       console.log("PASSED validate");
//       console.log(form.current);
//       console.log("PASSED form.current");
//       emailjs.sendForm('gmail', 'react-portfolio', form.current, 'JCmN5K-bXTForhFDi')
//         .then((result) => {
//             // show the user a success message
//             console.log("PASSED success");
//             console.log(result.text);
//         }, (error) => {
//             // show the user an error
//             console.log("PASSED defeat");
//             console.log(error.text);
//         });
//     }


//     // const result="Email Sent!"
//     // const sendEmail = (e) => {
//     //   e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
//     //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     //     .then((result) => {
//     //         // show the user a success message
//     //         console.log("email sent!");
//     //     }, (error) => {
//     //         // show the user an error
//     //         console.log("email NOT sent!");
//     //     });
//     // };

//     // If successful, clear out fields for next entry.
//     setName('');
//     setMessage('');
//     setEmail('');
//     setErrorMessage('');
//   };

//   return (
//     <div id="contact" className='col page-container'>
//       <h1>Contact Me</h1>
//       <form 
//         ref={form}
//         className="form"
//         onSubmit={handleFormSubmit}>
//         <div>
//           <input
//             className='p-2 mb-2 border rounded-lg'
//             title="Required"
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <input
//             className='p-2 mb-2 border rounded-lg'
//             title="Required"
//             value={name}
//             name="name"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="Name"
//           />
//         </div>
//         <div>
//           <input
//             className='p-5 mb-2 border rounded-lg placeholder:-translate-y-9 placeholder:-translate-x-10'
//             title="Required"
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="Message" 
//           />
//         </div>
//         <button 
//           className='flex p-2 rounded-lg bg-[#CA929A] text-[#1f5c59] font-bold active:bg-[#d16071]'
//           type="submit" 
//           // onClick={handleFormSubmit}
//           >
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text font-bold mt-2">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;
