import React from 'react';
import './AboutSection.css';


function AboutSection(){

    return (
        <div>
            <section className='about-container'>
                <div className='section-title'>
                    <h1>ABOUT</h1>
                </div>
                <div className='content-container'>
                <div className='text-container'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex, quidem earum reprehenderit perspiciatis architecto cupiditate odio, accusamus ut officiis culpa reiciendis fugiat sint neque. Architecto a eum ad vel!</p>
                </div>
                <div className='image-container'>
                    <img src='src/assets/newProfPic.jpg' alt='profile-pic' />
                </div>
                </div>
            </section>
        </div>
    )
};

export default AboutSection;