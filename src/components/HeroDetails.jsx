import React from "react";

const HeroDetails = ({ hero }) => {
  const { biography, appearance, work } = hero;
  const { height, weight } = appearance;

  return (
    <div id="details" className="details">
      {/* BIOGRAPHY */}
      <div>
        <p className="fw-bold mt-2">BIOGRAPHY:</p>
        <p>NOMBRE: {biography[`full-name`]}</p>
        <p>ALIAS: {biography.aliases}</p>
        {/* APPEARENCE */}
        <p>APPEARENCE:</p>
        <p>ALTURA: {height}</p>
        <p>PESO: {weight}</p>
        <p>COLOR DE OJOS: {appearance[`eye-color`]}</p>
        <p>COLOR DE CABELLO: {appearance[`hair-color`]}</p>
        {/* WORK */}
        <p>WORK:</p>
        <p>LUGAR DE TRABAJO: {work.base}</p>
      </div>
    </div>
  );
};

export default HeroDetails;
