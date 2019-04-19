import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <img src={spitoon} alt="" />
      <h1>Keg Working</h1>
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
