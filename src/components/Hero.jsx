import React, { useState } from "react";
import HeroDetails from "./HeroDetails";

const Hero = ({
  hero,
  heros,
  addTeam,
  team,
  image,
  name,
  id,
  teamPowerStats,
  setTeamPowerStats,
}) => {
  const { powerstats } = hero;
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const powerList = [intelligence, strength, speed, durability, power, combat];

  const [details, setDetails] = useState(false);

  const parsePowerToInt = (powerList) => {
    return powerList.map((power) => console.log(power));
  };

  console.log(teamPowerStats);

  const addToTeam = (id) => {
    const hero = heros.filter((hero) => hero.id === id)[0];
    const heroIsNotInTeam = team.filter((hero) => hero.id === id);
    if (team.length < 6 && heroIsNotInTeam < 1) {
      addTeam([...team, hero]);
      let arr = [
        teamPowerStats,
        {
          intelligence: isNaN(Number(intelligence)) ? 0 : Number(intelligence),
          strength: isNaN(Number(strength)) ? 0 : Number(strength),
          speed: isNaN(Number(speed)) ? 0 : Number(speed),
          durability: isNaN(Number(durability)) ? 0 : Number(durability),
          power: isNaN(Number(power)) ? 0 : Number(power),
          combat: isNaN(Number(combat)) ? 0 : Number(combat),
        },
      ];

      const result = arr.reduce((a, b) => ({
        intelligence: a.intelligence + b.intelligence,
        strength: a.strength + b.strength,
        speed: a.speed + b.speed,
        durability: a.durability + b.durability,
        power: a.power + b.power,
        combat: a.combat + b.combat,
      }));
      console.log(setTeamPowerStats(result));
    }
  };

  const deletehero = (id) => {
    const heros = team.filter((hero) => hero.id !== id);
    addTeam(heros);
    let arr = [teamPowerStats,
        {
          intelligence: isNaN(Number(intelligence)) ? 0 : Number(intelligence),
          strength: isNaN(Number(strength)) ? 0 : Number(strength),
          speed: isNaN(Number(speed)) ? 0 : Number(speed),
          durability: isNaN(Number(durability)) ? 0 : Number(durability),
          power: isNaN(Number(power)) ? 0 : Number(power),
          combat: isNaN(Number(combat)) ? 0 : Number(combat),
        },
    ];

    const result = arr.reduce((a, b) => ({
      intelligence: a.intelligence - b.intelligence,
      strength: a.strength - b.strength,
      speed: a.speed - b.speed,
      durability: a.durability - b.durability,
      power: a.power - b.power,
      combat: a.combat - b.combat,
    }));
    console.log(setTeamPowerStats(result));
  };

  const showDetails = () => setDetails(!details);

  return (
    <div className="col-xs-12 col-sm-6 col-lg-4 mb-3 mt-5">
      <div className="blur-cards text-light">
        <div className="details-container">
          {details ? <HeroDetails hero={hero} /> : null}
          <img src={image} alt="" className="img-heros img-fluid" />
        </div>
        <div className="info-hero">
          <h5 className="hero-item card-title mt-2">{name}</h5>
          <p className="mx-2">POWERSTATS:</p>
          <ul className="powerstats">
            <li>Intelligence: {intelligence}</li>
            <li>Strength: {strength}</li>
            <li>Speed: {speed}</li>
            <li>Durability: {durability}</li>
            <li>Power: {power}</li>
            <li>Combat: {combat}</li>
          </ul>
          <div className="d-flex justify-content-center">
            {heros ? (
              <div>
                {/* DETAILS BTN */}
                <button
                  type="btn "
                  className="btn-home btn btn-outline-primary mb-2"
                  onClick={showDetails}
                >
                  Details
                </button>
                {/* ADD BTN */}
                <button
                  type="btn"
                  className="btn-home btn btn-outline-success mb-2 fw-bold"
                  onClick={() => addToTeam(id)}
                >
                  Agregar al Equipo
                </button>
              </div>
            ) : (
              // DELETE BTN
              <button
                type="btn"
                className="btn btn-outline-warning mt-2 mb-2 btn-home fw-bold"
                onClick={() => deletehero(id)}
              >
                Eliminar del Equipo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
