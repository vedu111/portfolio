import React, { useRef } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';

const Contacts = () => {

  const form = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Message sent successfully');
        e.target.reset();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dagadkhairvedant@gmail.com</h5>
            <a href="mailto:dagadkhairvedant@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendMessage}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
