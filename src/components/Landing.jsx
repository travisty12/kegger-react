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
    width: '800vw',
    maxWidth: '600px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: '2px solid gold',
    borderRadius: '20px',
    padding: '20px',
    marginBottom:'30px',
    fontSize: '0.75rem'
  };
  return (
    <div style={LandingStyle}>
      <Info />
      <Age onGiveAccess={props.onAccess} />
    </div>
  );
}

Landing.propTypes = {
  onAccess: PropTypes.func.isRequired
};

export default Landing;
