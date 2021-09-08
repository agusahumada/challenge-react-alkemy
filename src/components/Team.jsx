import React from "react";
import Hero from "./Hero";

const Team = ({ team, addTeam, setTeamPowerStats, teamPowerStats }) => {
  const { intelligence, strength, speed, durability, power, combat } =
    teamPowerStats;

  return (
    <div className="team-container">
      <h2 id="id-team" className="text-light">Equipo {team.length}</h2>
      <h3 className="text-light">Powerstats: {team.length}</h3>
      <legend>Inteligencia: {intelligence}%</legend>
      <legend>Fuerza: {strength}%</legend>
      <legend>Velocidad: {speed}%</legend>
      <legend>Durabilidad: {durability}%</legend>
      <legend>Poder: {power}%</legend>
      <legend>Combate: {combat}%</legend>
      <div className="row">
        {team.length === 0 ? (
          <span className="empty-container">No hay heroes en el equipo</span>
        ) : (
          team.map((hero) => (
            <Hero
              key={hero.id}
              id={hero.id}
              hero={hero}
              team={team}
              addTeam={addTeam}
              name={hero.name}
              image={hero.image.url}
              intelligence={hero.powerstats.intelligence}
              strength={hero.powerstats.strength}
              speed={hero.powerstats.speed}
              durability={hero.powerstats.durability}
              power={hero.powerstats.power}
              combat={hero.powerstats.combat}
              teamPowerStats={teamPowerStats}
              setTeamPowerStats={setTeamPowerStats}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
