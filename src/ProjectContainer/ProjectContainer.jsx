import Project from "./Project";
import { projectObjectArray } from "./projectObjectArray";
import './ProjectContainer.css';

function ProjectContainer(){

    return(
        <div className="main-container">
            <div className="title-container">
               <h2>Recent Projects</h2> 
            </div>
            <div className="project-content-container">
                <Project projectObject={projectObjectArray[0]} />
                <Project projectObject={projectObjectArray[1]} />
                <Project projectObject={projectObjectArray[2]} />
            </div>
        </div>
    )
}

export default ProjectContainer;