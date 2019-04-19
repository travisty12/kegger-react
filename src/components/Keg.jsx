import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props){
  return (
    <div>
      <h1>Keg Working</h1>
    </div>
  );
}

Keg.propTypes = {
  location: PropTypes.object
};

export default Keg;
