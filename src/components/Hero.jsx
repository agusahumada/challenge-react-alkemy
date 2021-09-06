import React from "react";

const Hero = ({ heros, addTeam, team, image, name, id }) => {
  const addToTeam = (id) => {
    const hero = heros.filter((hero) => hero.id === id)[0];
    const heroIsNotInTeam = team.filter((hero) => hero.id === id);
    if (team.length < 6 && heroIsNotInTeam < 1){
        addTeam([...team, hero]);
    }
  };

  const deletehero = (id) => {
    const heros = team.filter((hero) => hero.id !== id);
    addTeam(heros);
  };

  return (
    <div className="col-sm-4 mb-3 mt-5">
      <div className="blur-cards text-light">
        <img src={image} alt="" className="img-heros img-fluid" />
        <div className="info-hero">
          <h5 className="hero-item card-title mt-2">{name}</h5>
          <div className="d-flex justify-content-center">
            {heros ? (
              <button
                type="btn"
                className="btn-home btn btn-outline-success mt-2 mb-2 fw-bold"
                onClick={() => addToTeam(id)}
              >
                Agregar al Equipo
              </button>
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
