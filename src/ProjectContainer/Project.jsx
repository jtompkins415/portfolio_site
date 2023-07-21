import { Button, Link } from "@mui/material";
import './Project.css';

function Project({projectObject}) {

    const {name, description, techStack, imgSrc, url} = projectObject;

    return(
        <div className="project-container">
            <div className="image-container">
                <img src={imgSrc} alt='project-snapshot'/>
            </div>
            <div className='description-container'>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="icon-container">
                    <h4>TECH STACK:</h4>
                    {techStack.map((tech, index) => (<p key={index}>{tech}</p>))}  
                </div>
            </div>
                <Button variant='contained'>Learn More</Button>
        </div>
    )
};

export default Project;
