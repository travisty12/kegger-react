import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const KegStyle = {
    // width: "400px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }

  const InfoStyle = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div style={KegStyle}>
      <h1>{props.name}</h1>
      <div style={InfoStyle}>
        <h3>{props.brand} Brewery</h3>
        <h4>${props.price} / pint</h4>
        <p>{props.abv}% abv</p>
        <p>{props.ibu} IBUs</p>
        <p>{props.volume} pints remaining</p>
      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Keg;
