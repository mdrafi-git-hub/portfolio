import React from 'react'
import './Projects.css'
import DropDown from '../DropDown/DropDown';

const projectData = [

  {
    title: "Rentify",
    description: "A rental app with owner/user dashboards using Firebase & React.js.",
    image: "rentify.png", 
    techStack: ["JavaScript", "Firebase", "CSS", "HTML" , "Boostrap"],
    liveLink: "https://mdrafi-git-hub.github.io/Rentify-Website/Index/index.html",
    githubLink: "https://github.com/mdrafi-git-hub/Rentify-Website"},
{
    title: "Portfolio Website",
    description: "My personal portfolio built using HTML, CSS, and JS.",
    image: "portfolio.png",
    techStack: ["HTML", "CSS", "JavaScript", "React", "React Boostrap", "Git", "GitHub"],
    liveLink: "",
    githubLink: "#"
  },
  {
    title: "Sudha Tours and Travles",
    description: "My personal portfolio built using HTML, CSS, and JS.",
    image: "portfolio.png",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://sudhatoursandtravels.com/",
    githubLink: "https://sudhatoursandtravels.com/",
  },
];

const project = {
  liveLink: "https://mdrafi-git-hub.github.io/Rentify-Website/Index/index.html",
  githubLink: "https://github.com/mdrafi-git-hub/Rentify-Website"
};

const Projects = () => {
  return ( 
    <>
    <div className="about-banner">
      
      <span className="icon icon-1">⚡</span>
      <span className="icon icon-2">💡</span>
      <span className="icon icon-3">💬</span>
      <h1 className="about-title">Projects</h1>
      <p className="about-breadcrumb">Home - Projects</p>
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
<DropDown />
    </>
  )
}

export default Projects;