import React from 'react';
import { Link } from 'react-router-dom';

function Login(props){

  const LoginStyle = {
    textDecoration: 'none',
    color: 'yellow',
    cursor: 'pointer'
  }

  let LoginShown = null;
  if (location.hash == '#/kegs') {
    LoginShown = <h1 style={LoginStyle} onClick={props.onLogin}>Edit</h1>
  } else {
    LoginShown = <h1><Link to='/' style={LoginStyle}>Enter</Link></h1>;
  }

  return (
    <div>
      {LoginShown}
    </div>
  );
}

export default Login;
