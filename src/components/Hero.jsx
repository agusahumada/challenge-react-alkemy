import React from "react";


const Hero = ({image, name}) => {
    
  return (
    <div className="d-flex justify-content-center text-light">
      <table className="table table-heroe text-light m-5">
        <thead>
          <tr className="table-thead">
            <th className="heroe-item">IMAGEN</th>
            <th className="heroe-item">NOMBRE</th>
            <th className="heroe-item">DETALLES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="image1" className="heroe-item">
                <img src={image} alt="" />
            </td>
            <td id="name1" className="heroe-item">
              <p>{name}</p>
            </td>
            <td id="detail1" className="heroe-item">
              details
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hero;
