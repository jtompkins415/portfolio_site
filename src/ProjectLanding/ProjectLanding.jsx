import {Button, Link} from '@mui/material';
import '../ProjectContainer/Project.css';

function ProjectLanding({projectObject}) {
    const {name, description, imgSrc, url} = projectObject;

    return (
        
             <div className="project-container">
            <div className="image-container">
                <img src={imgSrc} alt='project-snapshot'/>
            </div>
            <div className='description-container'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
                <Button variant='contained' style={{backgroundColor: '#009E8E', color: '#FFFFFF'}}>Learn More</Button>
        </div>  
                  
    );

};

export default ProjectLanding;

