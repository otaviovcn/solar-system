import React from 'react';
// import '../styles/missions.css';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

const listMissions = missions.map((mission, key) => {
  const { name, year, country, destination } = mission;

  return (
    <MissionCard
      key={ key }
      name={ name }
      year={ year }
      country={ country }
      destination={ destination }
    />
  );
});

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-section">
        <div className="mission-title"><Title headline="Missões" /></div>
        <div className="missions-cards">{ listMissions }</div>
      </div>
      // <section
      //   className="missions-container"
      //   data-testid="missions"
      // >
      //   <Title headline="Missões" />
      //   <div className="missions-grid">
      //     { listMissions }
      //   </div>
      // </section>
    );
  }
}

export default Missions;
