import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Landing(props){
  return (
    <div>
      <h1>Landing Working</h1>
    </div>
  );
}

Landing.propTypes = {
  location: PropTypes.object
};

export default Landing;
