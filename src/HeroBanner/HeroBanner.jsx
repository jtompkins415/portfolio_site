import React, {useState} from 'react';
import './HeroBanner.css';

function HeroBanner(){

    function handleLoad() {
        const container = document.getElementById('hero-container');
        container.onload = () => {
            container.classList.add('loaded')
        }
        console.log(container);
    }

    return (
        <div className='hero-container' onLoad={handleLoad}>
            <div className='hero-title'>
                <h1>John Tompkins.</h1>
                <h2>Web Developer</h2> 
            </div>    
        </div>
    )
};

export default HeroBanner;