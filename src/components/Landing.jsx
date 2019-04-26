import React from 'react';
import Info from './Info';
import Age from './Age';
import PropTypes from 'prop-types';

function Landing(props){
  const LandingStyle = {
    height: 'calc(100vh - 240px)',
    marginTop: '120px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95vw',
    maxWidth: '600px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '2px solid gold',
    borderRadius: '20px',
    padding: '20px'
  };
  return (
    <div style={LandingStyle}>
      <Info />
      <Age onAccess={props.onAccess} />
    </div>
  );
}

Age.propTypes = {
  onAccess: PropTypes.func.isRequired
}

export default Landing;
