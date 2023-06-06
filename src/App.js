import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';
import './styles/planets.css';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <p>Sistema Solar</p> */}
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
