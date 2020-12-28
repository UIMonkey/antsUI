import './App.css';
import Map from './Map';
import AntDetailsCard from './ant-details-card';
import React from 'react';
import { Ant, Colony, IAnt } from './ant';
import { SearchBox } from './search';

interface AppState {
  selectedAnt: IAnt;
  ants: IAnt[];
}

function generateAnts(numberOfAnts: number): IAnt[] {
    let antArray = Array.from({length: numberOfAnts}, (value, key): Ant => {
      // Bounding box Lat: 50 - 51, Lng: 3-5 
      let lng = (Math.random() * 10) + 3;
      let lat = (Math.random() * 6) + 48;
      let colonyEnum = Object.keys(Colony);
      let colonyIndex = Math.floor(Math.random() * colonyEnum.length);
      let newAnt = new Ant(`Ant${key}`, 100, 0, Colony.Green);
      newAnt.location.longitude = lng;
      newAnt.location.latitude = lat;
      return newAnt;
    });
    return antArray;
}

class App extends React.Component<{}, AppState> {

  constructor(props: AppState) {
    super(props);
    let ants = generateAnts(100);
    this.state = {
      selectedAnt: ants[0],
      ants
    }
    this.selectAnt = this.selectAnt.bind(this);
  }

  selectAnt(mouseEvent: L.LeafletMouseEvent) {
    // Get the name of the ant that was selected
    let selectedAntName = mouseEvent.target.options['title'];
    // Find the ant within the store
    let select = this.state.ants.find((ant: IAnt) => {
      return ant.name === selectedAntName;
    });
    if (select) {
      this.setState({ selectedAnt: select });
    }
  }

  render() {
    return <div className="App">
      <Map ants={this.state.ants} selectAnt={this.selectAnt} />
      <div className="map-overlay">
        <h1>Ants...</h1>
        <SearchBox></SearchBox>
        <AntDetailsCard {...this.state.selectedAnt} />
      </div>
    </div>
  }
}

export default App;
