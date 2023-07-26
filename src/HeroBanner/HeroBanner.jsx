import React, {useState, useRef, useEffect} from 'react';
import './HeroBanner.css';

function HeroBanner(){

   

    return (
        <div className={'hero-container'}>
            <div className='hero-title'>
                <h1>John Tompkins</h1>
            </div>
            <div className='hero-subtitle'>
                 <h2>Web Developer</h2>
                <h2>Designer</h2> 
            </div>    
        </div>
    )
};

export default HeroBanner;