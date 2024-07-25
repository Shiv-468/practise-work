import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const GmailTask = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pj5sk3i', 'template_fqopjw9', form.current, {
        publicKey: 'I5zlC9x_2Zn9GxC9j',
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
    <section >


      <h2>Email js Task</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" /> <br />
        <label>Email</label>
        <input type="email" name="from_name" /> <br />
        <label>Message</label>
        <textarea name="message" /> <br />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};
export default GmailTask