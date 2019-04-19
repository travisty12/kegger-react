import React from 'react';
import Nav from './Nav';
import Login from './Login';
import logo from '../assets/images/Logo.png';

function Header(){
  const HeaderStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100px",
    width: "100%",
    backgroundColor: "lightblue",
    color: "yellow",
    position: "fixed",
    top: "0"
  }
  const LogoStyle = {
    height: "80px"
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
