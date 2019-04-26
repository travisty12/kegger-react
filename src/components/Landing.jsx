import React from 'react';
import Info from './Info';
import Age from './Age';
import PropTypes from 'prop-types';

function Landing(props){
  const LandingStyle = {
    height: 'calc(100vh - 160px)',
    marginTop: '100px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'

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
