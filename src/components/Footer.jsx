import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer(props){
  return (
    <div>
      <h1>Footer Working</h1>
    </div>
  );
}

Footer.propTypes = {
  location: PropTypes.object
};

export default Footer;
