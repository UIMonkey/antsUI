import './App.css';
import Map from './Map';
import AntDetailsCard from './components/ant-details-card';
import React, { useState } from 'react';
import { Ant, Colony, IAnt } from './ant';
import { SearchBox } from './search';
import { AntList } from './ant-list';
import { useQuery } from '@apollo/client'
import { GET_ANTS } from './graphql/schema';

const App = () => {

  // const [ants, setAnts] = useState([]);
  const [selectedAnt, setSelectedAnt] = useState(new Ant());

  // Get the ant data from the server
  const { loading, error, data } = useQuery(GET_ANTS, {
    pollInterval: 500,
    fetchPolicy: "network-only"
  });

  // Handle a select ant event
  const selectAnt = (mouseEvent: L.LeafletMouseEvent) => {
    // Get the name of the ant that was selected
    let selectedAntName = mouseEvent.target.options['title'];
    // Find the ant within the store
    let select = data?.ants.find((ant: IAnt) => {
      return ant.name === selectedAntName;
    });
    if (select) {
      setSelectedAnt(select);
    }
  }

  const errorMessage = `Error! ${error?.message}`;

  if (loading) { return <h1>Loading...</h1> }
  if (error) { return <h1>{errorMessage}</h1>}

  // console.log(data?.ants[0].health)
  // console.log(selectedAnt.health)

  return <div className="App">
    <Map ants={data?.ants} selectAnt={selectAnt} />
    <div className="map-overlay">
      <h1>Ants...</h1>
      <SearchBox></SearchBox>
      <AntList {...data?.ants}></AntList>
      <AntDetailsCard {...selectedAnt} />
    </div>
  </div>
}

export default App;
