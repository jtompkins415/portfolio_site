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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex, quidem earum reprehenderit perspiciatis architecto cupiditate odio, accusamus ut officiis culpa reiciendis fugiat sint neque. Architecto a eum ad vel!</p>
                    </div>
                    <div className={`profile-image-container ${isVisible ? 'fade-in' : ''}`}>
                        <img className={isVisible ? 'fade-in' : ''}
                        src='src/assets/newProfPic.jpg' alt='profile-pic'
                        onLoad={handleOnLoad}
                        style= {{opacity: isImageLoaded ? 1:0}} />
                    </div>
                </div>
            </section>
        </div>
    )
};

export default AboutSection;