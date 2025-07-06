import React from 'react';
import './DropDown.css';

const faqData = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in frontend web development, primarily using React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, and responsive UI design. I focus on building clean, interactive, and user-friendly interfaces.I am currently learning backend development with Node.js and Express.js to become a full-stack developer, and I also gaining hands-on experience with Firebase for backend services like authentication and real-time database integration.'
           



  },
  {
    question: 'Can you handle full project development from start to deployment?',
    answer: 'Yes. I’ve built and deployed multiple end-to-end projects independently—including authentication, CRUD operations, API integration, and hosting using platforms like Vercel, Netlify, and Firebase Hosting.'
  },
  {
    question: 'What kind of real-world projects have you built?',
    answer: '1.Portfolio Website – Fully responsive with dropdowns, animations, and clean UI.2.Rentify – A property rental platform with Firebase backend.3.Recipe & Product Dashboards – Built with React and dynamic API data.4.ParentConnect – A school communication dashboard'
  },

  {
    question: 'How do you ensure code quality and maintainability?',
    answer: 'I follow clean code practices using modular components, meaningful naming conventions, and version control via Git. I also document my projects and structure them for scalability and easy team collaboration.'
  },

  {
    question: 'Are you open to full-time roles or internships?',
    answer: 'Absolutely! I’m currently seeking full-time opportunities or internships where I can contribute as a MERN Stack Developer and grow within a collaborative, fast-paced team.'
  },

];

const DropDown = () => {
  const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    icon.textContent = isVisible ? '+' : '−';
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">FAQs About My Skills</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span id={`icon-${index}`} className="icon">+</span>
          </button>
          <div className="faq-answer" id={`answer-${index}`} style={{ display: 'none' }}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
