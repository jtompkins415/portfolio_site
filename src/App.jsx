import { useState } from 'react'
import './App.css';
import NavBar from './Navbar/Routes/NavBar';
import HeroBanner from './HeroBanner/HeroBanner';
import AboutSection from './AboutSection/AboutSection';

function App() {
  

  return (
    <>
        <NavBar />
        <HeroBanner />
        <AboutSection />
    </>
  )
}

export default App;
