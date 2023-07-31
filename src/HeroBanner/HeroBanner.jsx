import React, {useState, useEffect} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './HeroBanner.css';

function HeroBanner(){
    const [isVisible, setIsVisible] = useState(false);
   
    useEffect(() => {
        setIsVisible(true);
    }, []);
   

    return (
        <div className='hero-banner-container'>
            <div className={`hero-container ${isVisible ? 'fade-in' : ''}`}>
                <div className={`hero-title ${isVisible ? 'fade-in-title' : ''}`}>
                    <h1 className={`hero-title ${isVisible ? 'fade-in-title' : ''}`}>John Tompkins</h1>
                </div>
                <div className={`hero-subtitle ${isVisible ? 'fade-in-subtitle' : ''}`}>
                    <h2>Frontend Developer</h2>
                    <div className={`horizontal-line ${isVisible ? 'fade-in-line' : ''}`}></div> 
                </div>
                <div className={`hero-img-container ${isVisible ? 'fade-in-img' : ''}`}>
                    <img src='src/assets/newProfPic.jpg'/>
                </div>
            </div>
            <div className={`hero-icon-container ${isVisible ? 'fade-in-icon' : ''}`}>
                <ArrowDropDownIcon style={{fontSize: '4rem'}} />
            </div>  
        </div>
       
    )
};

export default HeroBanner;