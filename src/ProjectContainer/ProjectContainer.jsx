import {useState, useRef, useEffect} from 'react';
import Project from "./Project";
import { projectObjectArray } from "./projectObjectArray";
import './ProjectContainer.css';

function ProjectContainer(){
    const [isVisible, setIsVisible] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
   

    const handleOnLoad = () => {
        setIsImageLoaded(true);
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return(
        <div className={`main-container ${isVisible ? 'fade-in' : ''}`}>
            <div className={`title-container ${isVisible ? 'fade-in' : ''}`}>
               <h2>Projects</h2> 
            </div>
            <div className={`project-content-container ${isVisible ? 'fade-in' : ''}`}>
                <Project projectObject={projectObjectArray[0]} handleOnLoad={handleOnLoad} />
                <Project projectObject={projectObjectArray[1]} handleOnLoad={handleOnLoad} />
                <Project projectObject={projectObjectArray[2]} handleOnLoad={handleOnLoad} />
            </div>
        </div>
    )
}

export default ProjectContainer;