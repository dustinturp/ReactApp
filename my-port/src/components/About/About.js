// import Map from '../../../node_modules/ol/Map';
// import View from '../../../node_modules/ol/View';
// import TileLayer from '../../../node_modules/ol/layer/Tile';
// import XYZ from '../../../node_modules/ol/source/XYZ';

// new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new XYZ({
//         url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//       })
//     })
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2
//   })
// });




const About = () => {
    return (
        <div>
            <div className="map-container">
            </div>
            <h2 className="section-title">About Me</h2>
            <div>
            <p className="about-me-text">Front end web developer bringing a <i>spatial</i> set of skills to development from my background in GIS, python, and SQL DBA. 
                    I am currently pursuing a full stack certificate from Washington University building skills in BootStrap, CSS, HTML, JavaScript, JQuery, MySQL, and React. 
                    I have a passion for civic engagement projects and helping others learn. 

                    <br/>
                    I enjoy spending time on my bike, attending community events, making maps, 
                    traveling, and trying new recipes. Let’s connect on linked in.</p>
            </div>
        </div>
    )
};


export default About;