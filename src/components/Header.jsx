import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <h1>Header Working</h1>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
