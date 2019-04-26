import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  const NavStyle = {
    textDecoration: 'none',
    color: 'white'
  };
  return (
    <div>
      <h3><Link to='/' style={NavStyle}>HOME</Link> | <a style={NavStyle} href='https://www.github.com/travisty12'>GitHub</a></h3>
    </div>
  );
}

export default Nav;
