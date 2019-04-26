import React from 'react';
import Info from './Info';
import Age from './Age';

function Landing(){
  const LandingStyle = {
    height: 'calc(100vh - 160px)',
    marginTop: '100px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'

  }
  return (
    <div style={LandingStyle}>
      <Info />
      <Age />
    </div>
  );
}

export default Landing;
