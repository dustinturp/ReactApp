const Projects = () => {
    return (
        <div className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
                <div className="project" id="landmarks">
                    <h3><a href="http://landmarks.geostl.org/" target="_blank" rel="noopener noreferrer"> Landmarks Survey</a></h3>
                        <div className="prj-img" id="landmarks-img">
                        <div className="project-info">
                    
                            <p className="project-text">
                                A way for volunteers to collect data on 150 buildings without paper forms. 
                                Created a mobile collection instance of OpenDataKit for volunteers to fill out a form on their 
                                mobile devices and push the data to a central hub. The app is hosted on google app engine. 
                                Held a workshop to teach volunteers how to use the app.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <h3> <a href="https://github.com/dustinturp/STLCallsToService#readme" target="_blank" rel="noopener noreferrer"> Calls to Service</a></h3>
                    <div className="prj-img" id="calls_img">
                        <div className="project-info">
                            <p className="project-text" id="calls-to-service">
                                Compile monthly SLPD calls to service reports into annual reports and combine annual 
                                reports into a single csv file to be loaded into a  SQL database. 
                                Using Python  Pandas to structure and combine monthly files into a single file. 
                            </p>
                        </div>
                    </div>    
                </div>
                <div className="project">
                    <h3> <a href="https://github.com/dustinturp/Meet_Me_OutDoors_STL" target="_blank" rel="noopener noreferrer"> Meet me Outdoors Webmap</a></h3>
                    <div className="prj-img" id="meet-me-outdoors-img">
                        <div className="project-info">
                            <p className="project-text" id="meet-me-outdoors-text">
                                Create a web map for 50 places to explore the outdoors around St Louis. 
                                Used OpenLayers and an SDK to build a simple interface. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project">
                <h3> <a href="https://dustinturp.github.io/mod1_prj"> Run Buddy </a></h3>
                    <div className="prj-img" id="run-bud-img">
                        <div className="project-info">
                            <p className="project-text" id="run-bud-text">
                                 Class project. Create a mobile focused home page for Run Buddy. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <h3> <a href="https://github.com/dustinturp/stl-bicycle-and-pedestrian-crashes"> Pedestrian Crash Data </a></h3>
                    <div className="prj-img" id="pedestrian-img">
                        <div className="project-info">
                            <p className="project-text" id ="pedestrian-text">
                                Filtered from Highway Patrol Database on crashes showing data in St Louis 
                                involving pedestrians, bicycles and vehicles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;