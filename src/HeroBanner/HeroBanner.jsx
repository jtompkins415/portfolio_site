import React, {useState, useRef, useEffect} from 'react';
import './HeroBanner.css';

function HeroBanner(){
    const [isVisible, setIsVisible] = useState(false);
   
    useEffect(() => {
        setIsVisible(true);
    }, []);
   

    return (
        <div className={`hero-container ${isVisible ? 'fade-in' : ''}`}>
            <div className={`hero-title ${isVisible ? 'fade-in-title' : ''}`}>
                <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>John Tompkins</h1>
            </div>
            <div className={`verticle-line ${isVisible ? 'fade-in-line' : ''}`}></div>
            <div className={`hero-subtitle ${isVisible ? 'fade-in-subtitle' : ''}`}>
                 <h2>Frontend Developer</h2>
                <h2>Designer</h2> 
            </div>    
        </div>
    )
};

export default HeroBanner;