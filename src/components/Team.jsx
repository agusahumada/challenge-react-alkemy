import React from "react";
import Hero from "./Hero";

const Team = ({ team, addTeam }) => {
  return (
    <div>
      <h5 className="text-light">Equipo {team.length}</h5>
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Team;
