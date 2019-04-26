import React from 'react';
import { Link } from 'react-router-dom';

function Login(props){

  const LoginStyle = {
    textDecoration: 'none',
    color: 'yellow',
    cursor: 'pointer'
  }

  return (
    <div>
      <h1 style={LoginStyle} onClick={props.onLogin}>Login</h1>
    </div>
  );
}

export default Login;
