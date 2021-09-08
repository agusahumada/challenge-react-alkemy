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
  const { powerstats, biography } = hero;
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const { good, bad } = teamPowerStats;

  const [details, setDetails] = useState(false);

  const addToTeam = (id) => {
    const hero = heros.filter((hero) => hero.id === id)[0];
    const heroIsNotInTeam = team.filter((hero) => hero.id === id);

    if (teamPowerStats.good < 3 || teamPowerStats.bad < 3) {
      switch (hero.biography.alignment) {
        case "good":
          teamPowerStats.good++;
          break;
        case "bad":
          teamPowerStats.bad++;
          break;

        default:
          break;
      }

      if (teamPowerStats.good > 3) {
        return teamPowerStats.good--;
      }
      if (teamPowerStats.bad > 3) {
        return teamPowerStats.bad--;
      }

      if (team.length < 6 && heroIsNotInTeam < 1) {
        addTeam([...team, hero]);

        console.log(hero.biography.alignment);
        let arr = [
          teamPowerStats,
          {
            intelligence: isNaN(Number(intelligence))
              ? 0
              : Number(intelligence),
            strength: isNaN(Number(strength)) ? 0 : Number(strength),
            speed: isNaN(Number(speed)) ? 0 : Number(speed),
            durability: isNaN(Number(durability)) ? 0 : Number(durability),
            power: isNaN(Number(power)) ? 0 : Number(power),
            combat: isNaN(Number(combat)) ? 0 : Number(combat),
            good: 0,
            bad: 0,
          },
        ];

        const result = arr.reduce((a, b) => ({
          intelligence: a.intelligence + b.intelligence,
          strength: a.strength + b.strength,
          speed: a.speed + b.speed,
          durability: a.durability + b.durability,
          power: a.power + b.power,
          combat: a.combat + b.combat,
          good: a.good + b.good,
          bad: a.bad + b.bad,
        }));
        console.log(teamPowerStats);
        setTeamPowerStats(result);
      }
    }
  };

  const deletehero = (id) => {
    const heros = team.filter((hero) => hero.id !== id);
    addTeam(heros);
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
      intelligence: a.intelligence - b.intelligence,
      strength: a.strength - b.strength,
      speed: a.speed - b.speed,
      durability: a.durability - b.durability,
      power: a.power - b.power,
      combat: a.combat - b.combat,
    }));
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
            <li>Alignment: {biography.alignment}</li>
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
