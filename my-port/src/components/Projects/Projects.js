import Landmark from "./Landmark";
import CallsToService from "./CallsToService"
import MeetOutdoors from "./MeetOutdoors";
import RunBuddy from "./RunBuddy";
import Pedestrian from "./Pedestrian";

const Projects = () => {
    return (
        <div className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
                <Landmark />
                <CallsToService />
                <MeetOutdoors />
                <RunBuddy />
                <Pedestrian />
            </div>
        </div>
    )
}

export default Projects;