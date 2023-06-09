import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
// import Planets from '../data/planets';

const planetList = planets.map((planet, index) => {
  const { name, image } = planet;
  return (
    <li key={ index }>
      <PlanetCard planetName={ name } planetImage={ image } />
    </li>
  );
});

class SolarSystem extends Component {
  render() {
    return (
      <div className="solar-system-section" data-testid="solar-system">
        <div className="solar-system-title"><Title headline="Planetas" /></div>
        <ul className="planets-cards">{planetList}</ul>
      </div>
    );
  }
}

export default SolarSystem;
