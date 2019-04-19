import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Denied(){
  return (
    <div>
      <h1>Denied Working</h1>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}


export default Denied;
