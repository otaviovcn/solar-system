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
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planetList}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
