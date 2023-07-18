import * as React from 'react';
import { Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../assets/colorTheme';
import './NavBar.css'
function NavBar(){


    return (
        <ThemeProvider theme={theme}>
            <div className='navbar-container'>
                <div className='logo-container'>
                    <span>(Logo Here)</span>
                </div>
                <div className='navlink-container'>
                  <Link 
                  href='#' 
                  className='nav-link'
                  underline='none'
                  >About</Link>
                  </div>
                  <div className='navlink-container'>
                  <Link 
                  href='#' 
                  className='nav-link'
                  underline='none'
                  >Projects</Link>
                  </div>
                  <div className='navlink-container'>
                  <Link 
                  href='#' 
                  className='nav-link'
                  underline='none'
                  >Contact</Link> 
                </div>
                <div className='navlink-container-social'>
                  <Link 
                  href='https://github.com/jtompkins415' className='nav-link-social' underline='none'
                  ><img src='src/assets/github-mark/github-mark-white.png' alt='github-logo' width={45}/></Link>
                  <Link 
                  href='https://www.linkedin.com/in/jtompkins415/' 
                  className='nav-link-social'
                  underline='none'
                  ><img className='nav-social-img' src='src/assets/LinkedIn_logo.png' width={45} style={{ filter: 'hue-rotate(270deg)' }}/></Link>
                </div>
                
            </div>
        </ThemeProvider>
    );
};

export default NavBar;