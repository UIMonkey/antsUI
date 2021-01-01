import './App.css';
import Map from './Map';
import AntDetailsCard from './ant-details-card';
import React, { useState } from 'react';
import { Ant, Colony, IAnt } from './ant';
import { SearchBox } from './search';
import { AntList } from './ant-list';
import { gql, useQuery } from '@apollo/client'

const antsQuery = gql`
query {
    ants {
      name
      colony
      }
 }
`

function generateAnts(numberOfAnts: number): IAnt[] {
  let antArray = Array.from({ length: numberOfAnts }, (value, key): Ant => {
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

const App = () => {

  const [ants, setAnts] = useState(generateAnts(100));
  const [selectedAnt, setSelectedAnt] = useState(ants[0]);
  const { loading, data } = useQuery(antsQuery);
  console.log(data);

  // Handle a select ant event
  const selectAnt = (mouseEvent: L.LeafletMouseEvent) => {
    // Get the name of the ant that was selected
    let selectedAntName = mouseEvent.target.options['title'];
    // Find the ant within the store
    let select = ants.find((ant: IAnt) => {
      return ant.name === selectedAntName;
    });
    if (select) {
      setSelectedAnt(select);
    }
  }

  return <div className="App">
    <Map ants={ants} selectAnt={selectAnt} />
    <div className="map-overlay">
      <h1>Ants...</h1>
      <SearchBox></SearchBox>
      <AntList {...ants}></AntList>
      <AntDetailsCard {...selectedAnt} />
    </div>
  </div>
}

export default App;
