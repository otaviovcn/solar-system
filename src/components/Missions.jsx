import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

const listMissions = missions.map((mission, key) => {
  const { name, year, country, destination } = mission;
  const n = name;
  const y = year;
  const c = country;
  const d = destination;

  return (
    <MissionCard key={ key } name={ n } year={ y } country={ c } destination={ d } />
  );
});

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { listMissions }
      </div>
    );
  }
}

export default Missions;
