import React from 'react'
import homeImage from '../../assets/homeImage.png'; 
import AboutMe from '../../assets/AboutMe.png'

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


const projectData = [

  {
    title: "Sudha Tours and Travels",
    description: "My personal portfolio built using HTML, CSS, and JS.",
    image: "portfolio.png",
    techStack: ["HTML", "CSS", "JavaScript", "React", "React Boostrap", "Git", "GitHub"],
    liveLink: "https://sudhatoursandtravels.com/",
    githubLink: "https://sudhatoursandtravels.com/"
  },
  {
    title: "Rentify",
    description: "A rental app with owner/user dashboards using Firebase & React.js.",
    image: "rentify.png", 
    techStack: ["HTML",, "CSS", "JavaScript", "Boostrap", "Firebase"],
    liveLink: "https://mdrafi-git-hub.github.io/Rentify-Website/Index/index.html",
    githubLink: "https://github.com/mdrafi-git-hub/Rentify-Website"
  },
  

];


const experienceData = [
  {
    title: 'Digital Marketing Intern',
    company: 'MK DIGITALMARE PVT LTD',
    period: 'Dec 2022 – ',
    description: 'Developed responsive web apps using React.js and Bootstrap. Integrated APIs and worked on reusable components.',
    tech: ['SEO', 'Google Ads', 'Facebook Ads',]
  },
  {
    title: 'Digital Marketing Excutive',
    company: 'MK DIGITALMARE PVT LTD',
    period: 'Jun 2023 – Dec 2024',
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


const Home=()=>{
    return(
      
        <>

<div className="about-banner">
      
      <span className="icon icon-1">⚡</span>
      <span className="icon icon-2">💡</span>
      <span className="icon icon-3">💬</span>
      <h1 className="about-title">Home</h1>
      
    </div>


    <div className="hero-container">
      <div className="hero-left">
        <h2>HELLO</h2>
        <h1>
          I AM________________ <span className="name">MAHAMMAD RAFI</span>
        </h1>
        <h3>ASPIRING REACT JS DEVELOPER</h3>
        <div className="buttons">
         <a href="/Frontend_Developer_Rafi.pdf" download>
  <button className="btn-primary">HIRE ME</button>
</a>
<a href="/Frontend_Developer_Rafi.pdf" download>
          <button className="btn-outline">GET CV</button>
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
          <h2>LET’S <br /> INTRODUCE ABOUT <br /> MYSELF</h2>
          <p>
            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.
          </p>
          <p>
            Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.
          </p>
          <a href="/Frontend_Developer_Rafi.pdf" download>
          <button className="btn-primary">DOWNLOAD CV</button>
          </a>
        </div>
    </div>

    <div className='Skills'>
        <h1>Skills:</h1>

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



        <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
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



    )
}
export default Home;