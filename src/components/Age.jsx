import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Age(){

  const AgeStyle = {
    textDecoration: 'none',
    color: 'yellow'
  }
  return (
    <div>
      <h1>Kegger Taproom is for adults only. Are you 21 or over?</h1>
      <h1><Link to='/denied' style={AgeStyle}>No</Link>  |  <Link to='/kegs' style={AgeStyle}>Yes</Link></h1>
    </div>
  );
}


export default Age;
