import './App.css';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import { AntDetailsCard, IAntDetails } from './ant-details-card';

const testAnts: IAntDetails[] = [
  {
    name: 'Dave',
    latitude: 51.32476
  },
  {
    name: 'Kim',
    latitude: 63.8795
  }
];

function App() {
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        ></script>
      </header>
      <h1>Ants...</h1>
      <AntDetailsCard name={'Dave'} latitude={51.38764} />
      <Map />
    </div>
  );
}

export default App;

{/* <link rel="stylesheet" type="text/css" href="../node_modules/leaflet/dist/leaflet.css" />
<script src="../node_modules/leaflet/dist/leaflet.js"></script> */}