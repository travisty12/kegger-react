import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <h3>{props.brand} Brewery</h3>
        <h4>{props.price} / pint</h4>
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
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired,
};

export default Keg;
