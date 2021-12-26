const Pedestrian = () => {
  return (
    <div className="project">
      <h3>
        {" "}
        <a href="https://github.com/dustinturp/stl-bicycle-and-pedestrian-crashes">
          {" "}
          Pedestrian Crash Data{" "}
        </a>
      </h3>
      <div className="prj-img" id="pedestrian-img">
        <div className="project-info">
          <p className="project-text" id="pedestrian-text">
            Filtered from Highway Patrol Database on crashes showing data in St
            Louis involving pedestrians, bicycles and vehicles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pedestrian;
