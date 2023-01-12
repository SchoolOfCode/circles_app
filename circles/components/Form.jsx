import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Form = (e) => {
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_jvez7ga', form.current, 'UoqPUn7g9o7ZvWyKi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    //   e.target.reset()
  
    return (
        <form ref={form} onSubmit={sendEmail} className='flex h-screen justify-center items-center
        '>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  };

export default Form;