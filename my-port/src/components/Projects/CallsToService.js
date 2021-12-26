const CallsToService = () => {
  return (
    <div className="project">
      <h3>
        <a
          href="https://github.com/dustinturp/STLCallsToService#readme"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calls to Service
        </a>
      </h3>
      <div className="prj-img" id="calls_img">
        <div className="project-info">
          <p className="project-text" id="calls-to-service">
            Compile monthly SLPD calls to service reports into annual reports
            and combine annual reports into a single csv file to be loaded into
            a SQL database. Using Python Pandas to structure and combine monthly
            files into a single file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallsToService;
