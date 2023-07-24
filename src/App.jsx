import { useState } from 'react'
import './App.css';
import NavBar from './Navbar/Routes/NavBar';
import HeroBanner from './HeroBanner/HeroBanner';
import AboutSection from './AboutSection/AboutSection';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import ContactForm from './ContactForm.js/ContactForm';

function App() {
  

  return (
    <>
        <NavBar />
        <HeroBanner />
        <AboutSection />
        <ProjectContainer />
        <ContactForm />
    </>
  )
}

export default App;
