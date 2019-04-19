import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Denied(){
  const DeniedStyle = {
    height: "100vh"
  }
  return (
    <div style={DeniedStyle}>
      <h1>Unfortunately, you must be 21 or over view this site.</h1>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}


export default Denied;
