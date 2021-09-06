import React from "react";

const Hero = ({ hero, heros, addTeam, team, image, name, id }) => {
  const { powerstats, biography, appearance, work } = hero;
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;
  const { aliases } = biography;
  const { height, weight } = appearance;

  const addToTeam = (id) => {
    const hero = heros.filter((hero) => hero.id === id)[0];
    const heroIsNotInTeam = team.filter((hero) => hero.id === id);
    if (team.length < 6 && heroIsNotInTeam < 1) {
      addTeam([...team, hero]);
    }
  };

  const deletehero = (id) => {
    const heros = team.filter((hero) => hero.id !== id);
    addTeam(heros);
  };

  const handleClick = (id) => {};

  return (
    <div className="col-sm-4 mb-3 mt-5">
      <div className="blur-cards text-light">
        <div className="details-container">
          <img src={image} alt="" className="img-heros img-fluid" />
          <div id="details" className="details">
            {/* BIOGRAPHY */}
            <p>BIOGRAPHY:</p>
            <div className="powerstats">
              <p>Nombre: {biography[`full-name`]}</p>
              <p>Alias: {aliases}</p>
            </div>
            {/* APPEARENCE */}
            <p>APPEARENCE:</p>
            <div className="powerstats">
              <p>Altura: {height}</p>
              <p>Peso: {weight}</p>
              <p>Color de ojos: {appearance[`eye-color`]}</p>
              <p>Color de cabello: {appearance[`hair-color`]}</p>
            </div>
            {/* WORK */}
            <p>WORK:</p>
            <div className="powerstats">
              <p>Lugar de trabajo: {work.base}</p>
            </div>
          </div>
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
                <button
                  type="btn "
                  className="btn-home btn btn-outline-primary mb-2"
                  onClick={handleClick}
                >
                  Details
                </button>
                <button
                  type="btn"
                  className="btn-home btn btn-outline-success mb-2 fw-bold"
                  onClick={() => addToTeam(id)}
                >
                  Agregar al Equipo
                </button>
              </div>
            ) : (
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
