// Contact.jsx
import React from 'react';
import './Contact.css';
import DropDown from '../DropDown/DropDown';

const Contact = () => {
  return (

    <>

     <div className="about-banner">
        <span className="icon icon-1">⚡</span>
        <span className="icon icon-2">💡</span>
        <span className="icon icon-3">💬</span>
        <h1 className="about-title">Contact Me</h1>
        <p className="about-breadcrumb">Home - Contact</p>
      </div>

    
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtitle">Feel free to contact me for any collaboration or project discussion.</p>

      <div className="contact-details">
        <div className="contact-card">
          <h3>Email</h3>
          <p>rafimohammad055@g <span>mail.com</span></p>
        </div>
        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 94929 19173</p>
        </div>
        <div className="contact-card">
          <h3>Location</h3>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </div>

    <DropDown />
    </>
  );
};



export default Contact;
