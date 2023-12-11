import React, { useRef } from 'react'
import './Contact.css'
import facebookIcon from '../../Assets/facebook-icon.png'
import linkedinIcon from '../../Assets/linkedin.png'
import instagramIcon from '../../Assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6gw82m', 'template_rvpp60c', form.current, '3gEowPT69lYAZmHeO')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <section className='contactPage'>
        <h1 className='contactHeading'>Contact Me</h1>
        <span className="contactDescription">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='user_name' />
            <input type="email" className="email" placeholder='Your Email' name='user_email' />
            <textarea name="message" className='msg' rows="5" placeholder='Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                <img src={facebookIcon} alt="" className="link" />
                <a href="https://www.linkedin.com/in/muhammad-bilal-762475252/" target='_blank' rel='noreferrer'><img src={linkedinIcon} alt="" className="link" /></a>
                <img src={instagramIcon} alt="" className="link" />
            </div>
        </form>
      
    </section>
  )
}

export default Contact
