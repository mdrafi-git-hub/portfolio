import React from 'react';
import './Skills.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import htmlLogo from '../../assets/HTMLLOGO.png';
import cssLogo from '../../assets/CSSLOGO1.png';
import jsLogo from '../../assets/JSLOGO1.jpg'
import react1logo from '../../assets/REACT1LOGO.png'
import BoostrapLogo from '../../assets/BOOSTRAPLOGO.png'
import tailwindLogo from'../../assets/TAILWINDCSSLOGO.png'
import gitLogo from '../../assets/GITLOGO.png'
import githubLogo from '../../assets/GITHUBLOGO1.jpg'
import wordpressLogo from '../../assets/WORDPRESSLOGO2.png'
import seoLogo from '../../assets/SEOLOGO.png'




import DropDown from '../DropDown/DropDown'; 

const skillsData = [
  {
    title: 'HTML',
    image: htmlLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },
  {
    title: 'CSS',
    image: cssLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },
  {
    title: 'JAVASCRIPT',
    image: jsLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },
  {
    title: 'REACT JS',
    image: react1logo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },{
    title: 'BOOOSTRAP',
    image: BoostrapLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },{
    title: 'TAILWINDCSS',
    image: tailwindLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },{
    title: 'GIT',
    image: gitLogo,
    description: 'HTML is the structure of web pages. It defines content and layout using tags.'
  },
  {
    title: 'GITHUB',
    image: githubLogo,
    description: 'CSS is used for styling HTML content to make it visually appealing.'
  },
  {
    title: 'WORDPRESS',
    image: wordpressLogo,
    description: 'JS adds interactivity to web pages like clicks, animations, logic, and more.'
  },
  {
    title: 'SEO',
    image: seoLogo,
    description: 'React is a JavaScript library for building dynamic user interfaces with components.'
  }
];

const Skills = () => {
  return (
    <>
      <div className="about-banner">
        <span className="icon icon-1">⚡</span>
        <span className="icon icon-2">💡</span>
        <span className="icon icon-3">💬</span>
        <h1 className="about-title">Skills</h1>
        <p className="about-breadcrumb">Home - Skills</p>
      </div>

      <div className='Skills'>
        <h1>Skills:</h1>
        {/* <span>Knowledge in HTML, CSS, JS and React JS</span> */}
      </div>

      <div className="card-container">
        {skillsData.map((skill, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card style={{ width: '100%', padding: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                  <Card.Img variant="top" src={skill.image} />
                  <Card.Body>
                    <Card.Title>{skill.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
              <div className="flip-card-back">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* <div className="contact-container">
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
    </div> */}

    

      {/* ✅ DropDown Component */}
      <DropDown />
    </>
  );
};

export default Skills;




