import {useRef, useState, useEffect} from 'react';
import './FadeInSection.css';

function FadeInSection(props){

    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    setIsVisible(entry.isIntersecting);
                } else {
                    setIsVisible(false)
                }
            })
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, [])

    return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
    );
};

export default FadeInSection;