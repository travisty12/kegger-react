import React from 'react';
import Nav from './Nav';
import Login from './Login';
import PropTypes from 'prop-types';
import logo from '../assets/images/Logo.png';

function Header(props){
  const HeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100px',
    width: '100%',
    backgroundColor: 'rgb(50,50,50)',
    color: 'white',
    position: 'fixed',
    top: '0'
  };
  const LogoStyle = {
    height: '80px'
  };
  return (
    <div style={HeaderStyle}>
      <Nav />
      <img src={logo} style={LogoStyle} alt='logo' />
      <Login onLogin={props.onLogin} />
    </div>
  );
}

Header.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Header;
