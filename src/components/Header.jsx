import React from 'react';
import Nav from './Nav';
import Login from './Login';
import logo from '../assets/images/Logo.png';

function Header(){
  const HeaderStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
  const LogoStyle = {
    width: "10vw"
  }
  return (
    <div style={HeaderStyle}>
      <Nav />
      <img src={logo} style={LogoStyle} alt="logo" />
      <Login />
    </div>
  );
}

export default Header;
