import * as React from 'react';
import { Link } from '@mui/material';
import './NavBar.css'
function NavBar(){


    return (
  
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link
                    href='/'
                    underline='none'
                    >LOGO</Link>
                </div>
                <div className='navlink-container'>
                  <Link 
                  href='/' 
                  className='nav-link gold'
                  underline='none'
                  >Home</Link>
                  </div>
                <div className='navlink-container'>
                  <Link 
                  href='/about' 
                  className='nav-link orange'
                  underline='none'
                  >About</Link>
                  </div>
                  <div className='navlink-container'>
                  <Link 
                  href='/projects' 
                  className='nav-link blue'
                  underline='none'
                  >Projects</Link>
                  </div>
                  <div className='navlink-container'>
                  <Link 
                  href='/contacts' 
                  className='nav-link green'
                  underline='none'
                  >Contact</Link> 
                </div>
                <div className='navlink-container-social'>
                  <Link 
                  href='https://github.com/jtompkins415' className='nav-link-social' underline='none'
                  ><img src='src/assets/github-mark/github-mark.png' alt='github-logo' width={45}/></Link>
                  <Link 
                  href='https://www.linkedin.com/in/jtompkins415/' 
                  className='nav-link-social'
                  underline='none'
                  ><img className='nav-social-img' src='src/assets/Black-linkedin-logo-design-on-transparent-background-PNG.png' width={45} style={{ filter: 'hue-rotate(270deg)' }}/></Link>
                </div>
                
            </div>
     
    );
};

export default NavBar;