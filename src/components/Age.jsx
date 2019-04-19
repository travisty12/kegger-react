import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Age(){
  return (
    <div>
      <h1>Kegger Taproom is for adults only. Are you 21 or over?</h1>
      <h1><Link to="/denied">No</Link>  |  <Link to="/kegs">Yes</Link></h1>
    </div>
  );
}


export default Age;
