import ProjectLanding from "./ProjectLanding";
import { projectObjectArray } from "../ProjectContainer/projectObjectArray";
import '../ProjectContainer/ProjectContainer.css'

function ProjectContainerLanding(){

    return(
        <div className="main-container">
            <div className="title-container">
                <div className="project-shape-red" style={{
                    width: '200px',
                    marginLeft: '6rem'
                }}></div>
                <h2>Recent Projects</h2>
                <div className="project-shape-red"></div> 
            </div>
            <div className="project-content-container">
                <ProjectLanding projectObject={projectObjectArray[1]} />
                <ProjectLanding projectObject={projectObjectArray[0]} />
                <ProjectLanding projectObject={projectObjectArray[2]} />
            </div>
        </div>
    )
}

export default ProjectContainerLanding;
