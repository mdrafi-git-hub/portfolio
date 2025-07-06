import React from 'react'
import CustomNavbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experince from './Components/Experince/Experince';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home.jsx/Home';


import { Route, Routes} from 'react-router-dom';



const App = () => {
  return (
    <>
      <CustomNavbar />
      {/* <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="experince" element={<Experince />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes> */}

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/experince" element={<Experince />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      
    </>
  )
}

export default App;




