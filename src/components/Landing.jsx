import React from 'react';
import logo from '../assets/images/Logo.png';
import Info from './Info';
import Age from './Age';

function Landing(){
  return (
    <div>
      <img src={logo} alt="logo" />

      <Info />
      <Age />
    </div>
  );
}

export default Landing;
