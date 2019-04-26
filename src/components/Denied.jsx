import React from 'react';
import { Link } from 'react-router-dom';

function Denied(){
  const DeniedStyle = {
    marginTop: '100px',
    height: 'calc(100vh - 240px)',
    marginBottom: '40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '95vw',
    maxWidth: '600px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '2px solid gold',
    borderRadius: '20px',
    padding: '20px',
    fontSize: '1rem'
  };
  const AnchorStyle = {
    textDecoration: 'none',
    color: 'blue'
  };
  return (
    <div style={DeniedStyle}>
      <h1>Unfortunately, you cannot view this page.</h1>
      <h3>Would you like to return <Link to='/' style={AnchorStyle}>home</Link> instead?</h3>
    </div>
  );
}


export default Denied;
