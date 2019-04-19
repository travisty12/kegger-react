import React from 'react';
import PropTypes from 'prop-types';

function Footer(){

  const FooterStyle = {
    width: "100%",
    height: "60px",
    position: "fixed",
    bottom: "0",
    backgroundColor: "lightblue",
    color: "yellow",
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  };

  return (
    <div style={FooterStyle}>
      <h1>Footer Working</h1>
    </div>
  );
}

export default Footer;
