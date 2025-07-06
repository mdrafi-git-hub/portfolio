import React from 'react'
import {Link} from "react-router-dom"
import './About.css'
import homeImage from '../../assets/homeImage.png'; 
import AboutMe from '../../assets/AboutMe.png'
import DropDown from '../DropDown/DropDown';
// import SocialMedia from '../SocialMedia/SocialMedia';



const journeyData = [
  {
    year: " June 2022",
    icon: "📈",
    title: "Digital Marketing Intern",
    description: "Started Carrer as a Intern and Learn Digital Marketing Modules."
  },
  {
    year: " Jan 2023 - Dec 2024",
    icon: "💻",
    title: "Digital Marketing Executive",
    description: "Worked on SEO, ads, landing pages, and Google Analytics.."
  },
  {
    year: " Jan- 2025",
    icon: "🚀",
    title: "Start Learning Web Technologies",
    description: "HTML, CSS. JAVASCRIPT, REACT JS, BOOSTRAP, TAILWIND CSS, GIT & GIT HUB"
  },
  {
    year: "2025",
    icon: "👨‍💻",
    title: "Job Ready",
    description: "Actively applying for React/Frontend Developer roles."
  }
];


const About = () => {
return (
  <>

   <div className="about-banner">
      
      <span className="icon icon-1">⚡</span>
      <span className="icon icon-2">💡</span>
      <span className="icon icon-3">💬</span>
      <h1 className="about-title">ABOUT ME</h1>
      <p className="about-breadcrumb">Home - About</p>
    </div>


    <div className="hero-container">
      <div className="hero-left">
        <h2>HELLO</h2>
        <h1>
          I AM_______ <span className="name">MAHAMMAD RAFI</span>
        </h1>
        <h3>ASPIRING REACT JS DEVELOPER</h3>
        <div className="buttons">
          {/* <button className="btn-primary">HIRE ME</button> */}
          <a href="/Frontend_Developer_Rafi.pdf" download>
  <button className="btn-primary">GET CV</button>
</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={homeImage} alt="" />

      </div>
    </div>

    <div className='about-section'>
      <div className='about-left'>
        <img src={AboutMe} alt="" />
      </div>
      <div className="about-right">
          <h2>LET’S INTRODUCE <br />  ABOUT MYSELF...... <br /> </h2>
          <p>
            Hi,  <strong>I’m Rafi Mahammad,</strong> a former <strong> Digital Marketing </strong> enthusiast who found his true passion in  <strong>Front-End Web Development.</strong>
          </p>
          <p>
            After gaining experience in the digital marketing field, I discovered my love for coding, designing interfaces, and building interactive web experiences. That passion led me to transform my career into web development, where I now specialize in  <strong>HTML, CSS, JavaScript, React.js, Boostrap, Tailwind, Git, Git Hub and Firebase.</strong>
          </p>
          <p>I enjoy bringing ideas to life in the browser and am always excited to learn new technologies, frameworks, and best practices. From creating responsive layouts to building user-centric components, I focus on writing clean, maintainable code and delivering smooth user experiences.</p>

          <p>I believe in continuous growth and am on a mission to build real-world projects that not only challenge my skills but also add value.</p>

          <p>Let’s create something impactful together! 💻🚀</p>
{/* <a href="/Frontend_Developer_Rafi.pdf" download>
  <button className="btn btn-primary">DOWNLOAD CV</button>
</a> */}

<a href="/Frontend_Developer_Rafi.pdf" download="Frontend_Developer_Rafi.pdf">
  <button className="btn btn-primary">DOWNLOAD CV</button>
</a>

        </div>
    </div>

    <div className="timeline-container">
        <h2 className="timeline-heading">🛤 My Journey</h2>
        <div className="timeline">
          {journeyData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-left">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-icon">{item.icon}</span>
              </div>
              <div className="timeline-right">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
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
      {/* <SocialMedia /> */}


      
    
    </>
  );
  
};



export default About;



