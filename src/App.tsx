import './App.css';
import 'leaflet/dist/leaflet.css';
import Map from './Map';
import AntDetailsCard from './ant-details-card';
import { testAnts } from './ant-data';
import React from 'react';
import L from 'leaflet';
import { IAnt } from './ant';

interface AppState {
  selectedAnt: IAnt;
  ants: IAnt[];
}

class App extends React.Component<{}, AppState> {

  constructor(props: AppState) {
    super(props);
    this.state = {
      selectedAnt: testAnts[0],
      ants: testAnts
    }
    this.selectAnt = this.selectAnt.bind(this);
  }

  selectAnt(mouseEvent: L.LeafletMouseEvent) {
    // Get the name of the ant that was selected
    let selectedAntName = mouseEvent.target.options['title'];
    // Find the ant within the store
    let select = testAnts.find((ant: IAnt) => {
      return ant.name === selectedAntName;
    });
    if (select) {
      this.setState({selectedAnt: select});
    }
  }

  render() {
    return <div className="App">
      <header>
      </header>
      <h1>Ants...</h1>
      <AntDetailsCard name={this.state.selectedAnt.name}
        location={this.state.selectedAnt.location}
        heading={this.state.selectedAnt.heading}
        speed={this.state.selectedAnt.speed}
        colony={this.state.selectedAnt.colony}
        health={this.state.selectedAnt.health} />
      <Map ants={testAnts} selectAnt={this.selectAnt} />
    </div>
  }
}

export default App;
