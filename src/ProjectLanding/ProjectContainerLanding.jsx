import ProjectLanding from "./ProjectLanding";
import { projectObjectArray } from "../ProjectContainer/projectObjectArray";
import './ProjectContainerLanding.css';
import FadeInSection from "../FadeInSection/FadeInSection";

function ProjectContainerLanding(){

    return(
        <>
        <FadeInSection>
            <div className='landing-main-container'>
            <div className="landing-title-container">
                <div className="landing-project-shape-red" style={{
                    width: '200px',
                    marginLeft: '6rem'
                }}></div>
                <h2>Recent Projects</h2>
                <div className="landing-project-shape-red"></div> 
            </div>
            <div className="landing-project-content-container">
                <ProjectLanding projectObject={projectObjectArray[1]} />
                <ProjectLanding projectObject={projectObjectArray[0]} />
                <ProjectLanding projectObject={projectObjectArray[2]} />
            </div>
        </div>
        </FadeInSection>
        </>
        
    )
}

export default ProjectContainerLanding;
