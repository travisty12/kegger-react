import React from 'react';

function Footer(){

  const FooterStyle = {
    width: '100%',
    height: '60px',
    position: 'fixed',
    bottom: '0',
    backgroundColor: 'rgb(50,50,50)',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  const AnchorStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const CopyrightStyle = {
    fontSize: '1rem',
    color: 'white'
  };

  return (
    <div style={FooterStyle}>
      <h1 style={CopyrightStyle}>Copyright 2019, Travis Toal</h1>
      <p><a href='https://www.github.com/travisty12' style={AnchorStyle}>View more projects</a></p>
    </div>
  );
}

export default Footer;
