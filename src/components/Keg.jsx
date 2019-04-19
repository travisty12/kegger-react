import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const KegStyle = {
    maxWidth: "600px",
    width: "90vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 20px 40px 20px"
  }

  const InfoStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }

  const TextStyle = {
    margin: "0",
    color: "rgba(30,30,30, 1)",
    fontSize: "1rem"
  }

  const NameStyle = {
    margin: "0",
    color: "rgba(15,15,15,1)",
    fontSize: "2rem"
  }

  return (
    <div style={KegStyle}>
      <h1 style={NameStyle}>{props.name}</h1>
      <div style={InfoStyle}>
        <h3 style={TextStyle}>{props.brand} Brewery</h3>
        <h4 style={TextStyle}>${props.price} / pint</h4>
        <p style={TextStyle}>{props.abv}% abv</p>
        <p style={TextStyle}>{props.ibu} IBUs</p>
        <p style={TextStyle}>{props.volume} pints remaining</p>
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
