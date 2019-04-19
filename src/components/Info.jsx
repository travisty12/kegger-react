import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Info(props){
  return (
    <div>
      <h1>Info Working</h1>
    </div>
  );
}

Info.propTypes = {
  location: PropTypes.object
};

export default Info;
