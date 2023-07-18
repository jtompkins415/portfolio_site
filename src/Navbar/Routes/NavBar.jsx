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
                    <span>Logo</span>
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
                  href='#' className='nav-link-social' underline='none'
                  >GITHUB LINK</Link>
                  <Link 
                  href='#' 
                  className='nav-link-social'
                  underline='none'
                  >LINKEDIN LINK</Link>
                </div>
                
            </div>
        </ThemeProvider>
    );
};

export default NavBar;