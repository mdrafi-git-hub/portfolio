import React from 'react';
import './Experince.css'; 
import DropDown from '../DropDown/DropDown';


const experienceData = [
  {
    title: 'Digital Marketing Intern',
    company: 'MK DIGITALMARE PVT LTD',
    period: 'Jun 2022 – ',
    description: 'Developed responsive web apps using React.js and Bootstrap. Integrated APIs and worked on reusable components.',
    tech: ['SEO', 'Google Ads', 'Facebook Ads',]
  },
  {
    title: 'Digital Marketing Excutive',
    company: 'MK DIGITALMARE PVT LTD',
    period: 'Jan 2023 – Dec 2024',
    description: 'Assisted in building client websites using HTML, CSS, and Firebase. Worked on UI improvements and bug fixes.',
    tech: ['On-Page SEO', 'OFF-Page SEO', 'Google Ads', 'Facebook Ads', 'Social Media Management']
  },
  {
    title: 'Freelance Project',
    company: 'SUDHA TOURS & TRAVELS Website',
    period: 'jan 2025 – jan 2025',
    description: 'Created a personal portfolio website with React and deployed it on Vercel.',
    tech: ['HTML', 'CSS', 'Boostrap', 'JavaScript']
  },
];

const Experience = () => {
  return (
    <>
      <div className="about-banner">
        <span className="icon icon-1">⚡</span>
        <span className="icon icon-2">💡</span>
        <span className="icon icon-3">💬</span>
        <h1 className="about-title">Experience</h1>
        <p className="about-breadcrumb">Home - Experience</p>
      </div>

    <div className='experience'>
      <h2>Experience:</h2>
      {/* <h3>Worked as Digital Marketing Excutive From 2023 to 2024</h3> */}
      </div>

      <div className="experience-timeline">
  <div className="experience-row">
    {experienceData.map((item, index) => (
      <React.Fragment key={index}>
        <div className="experience-card">
          <h2>{item.title}</h2>
          <h3>{item.company}</h3>
          <span className="exp-period">{item.period}</span>
          <p>{item.description}</p>
          <div className="exp-tech">
            {item.tech.map((tech, i) => (
              <span className="tech-badge" key={i}>{tech}</span>
            ))}
          </div>
        </div>
        {index !== experienceData.length - 1 && (
          <div className="arrow">&#10142;</div>
        )}
      </React.Fragment>
    ))}
  </div>
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


<DropDown />
    </>
  );
};

export default Experience;
