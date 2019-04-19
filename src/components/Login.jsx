import React from 'react';
import { Link } from 'react-router-dom';

function Login(){

  const LoginStyle = {
    textDecoration: "none",
    color: "yellow"
  }

  return (
    <div>
      <h1><Link to="/" style={LoginStyle}>Login</Link></h1>
    </div>
  );
}

export default Login;
