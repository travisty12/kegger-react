import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Age(props){
  return (
    <div>
      <h1>Age Working</h1>
    </div>
  );
}

Age.propTypes = {
  location: PropTypes.object
};

export default Age;
