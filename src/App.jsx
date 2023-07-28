import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Navbar/Routes/NavBar';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  

  return (
    <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<Landing />} />
            <Route 
              path='/about'
              element={<About />} />
            <Route
              path='/projects'
              element={<Projects />} />
            <Route
              path='/contacts'
              element={<Contact />} />
          </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App;
