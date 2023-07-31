import { Link } from '@mui/material';
import './NavBar.css'
function NavBar(){


    return (
  
            <div className='navbar-container'>
                <div className='logo-container'>
                    <Link
                    href='/'
                    underline='none'
                    >
                      <img src='public/assets/logo_green.png'/>
                    </Link>
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
                  ><img className='nav-social-img' src='public/assets/github-mark/github-mark.png' alt='github-logo' width={45}/></Link>
                  <Link 
                  href='https://www.linkedin.com/in/jtompkins415/' 
                  className='nav-link-social'
                  underline='none'
                  ><img className='nav-social-img' src='public/assets/Black-linkedin-logo-design-on-transparent-background-PNG.png'  style={{ filter: 'hue-rotate(270deg)' }}/></Link>
                </div>
                
            </div>
     
    );
};

export default NavBar;