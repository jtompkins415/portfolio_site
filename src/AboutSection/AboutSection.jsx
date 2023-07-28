import React, {useState, useRef, useEffect} from 'react';
import './AboutSection.css';


function AboutSection(){
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
   

    const handleOnLoad = () => {
        setIsImageLoaded(true);
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div>
            <section className={`about-container ${isVisible ? 'fade-in' : ''}`}>
                <div className='section-title'>
                    <h2>ABOUT</h2>
                </div>
                <div className={`content-container ${isVisible ? 'fade-in' : ''}`}>
                    <div className={`text-container ${isVisible ? 'fade-in' : ''}`}>
                        <p>As a frontend web developer, I am passionate about crafting unique and engaging online experiences that captivate audiences and drive results. Whether you need a sleek and modern website for your business, an eye-catching portfolio to showcase your work, or a dynamic e-commerce platform to boost sales, I've got you covered.</p>
                    </div>
                    <div className={`profile-image-container ${isVisible ? 'fade-in' : ''}`}>
                        <img className={isVisible ? 'fade-in' : ''}
                        src='src/assets/mountain_about.JPG' alt='profile-pic'
                        onLoad={handleOnLoad}
                        style= {{opacity: isImageLoaded ? 1:0}} />
                    </div>
                </div>
                <div className={`content-container ${isVisible ? 'fade-in' : ''}`}>
                    <div className={`text-container ${isVisible ? 'fade-in' : ''}`}>
                        <p>When I'm not helping build websites, I enjoy spending my time in nature, traveling to new destinations, and indulging in some great food & drink</p>
                    </div>
                    <div className={`profile-image-container ${isVisible ? 'fade-in' : ''}`}>
                        <img className={isVisible ? 'fade-in' : ''}
                        src='src/assets/mountain_about.JPG' alt='profile-pic'
                        onLoad={handleOnLoad}
                        style= {{opacity: isImageLoaded ? 1:0}} />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default AboutSection;