import React from 'react';


function HeroBanner(){
    
    return (
        <div className='hero-container'>
            <div className='hero-title'>
                <h1>John Tompkins</h1>
                <h2>Web Developer</h2> 
            </div>
            <div className='hero-image-container'>
                <img src='src/assets/newProfPic.jpg' alt='profile-picture'/>
            </div>
            
        </div>
    )
};

export default HeroBanner;