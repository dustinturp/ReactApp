const Landmark = () => {
  return (
    <div className="project" id="landmarks">
      <h3>
        <a
          href="http://landmarks.geostl.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Landmarks Survey
        </a>
      </h3>
      <div className="prj-img" id="landmarks-img">
        <div className="project-info">
          <p className="project-text">
            A way for volunteers to collect data on 150 buildings without paper
            forms. Created a mobile collection instance of OpenDataKit for
            volunteers to fill out a form on their mobile devices and push the
            data to a central hub. The app is hosted on google app engine. Held
            a workshop to teach volunteers how to use the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landmark;
