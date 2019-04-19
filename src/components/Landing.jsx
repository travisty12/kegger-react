import React from 'react';
import Info from './Info';
import Age from './Age';

function Landing(){
  const LandingStyle = {
    height: "100vh"
  }
  return (
    <div style={LandingStyle}>
      <Info />
      <Age />
    </div>
  );
}

export default Landing;
