import Map from '../../../node_modules/ol/Map';
import View from '../../../node_modules/ol/View';
import TileLayer from '../../../node_modules/ol/layer/Tile';
import XYZ from '../../../node_modules/ol/source/XYZ';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

// const map = new ol.Map({
//     target: 'map',
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     view: new ol.View({
//       center: ol.proj.fromLonLat([37.41, 8.82]),
//       zoom: 4
//     })
//   });


// const StlMap = () => {
//     return (
//         <Map />
//     )
// }


const StlMap = () => {
    return (
        <div>
        <h2>My Map</h2>
        <div id="map" class="map"></div>
        <script type="text/javascript">
         {Map}
        </script>
        <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js"></script>
        </div>
    )
}

export default StlMap;