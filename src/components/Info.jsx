import React from 'react';

function Info(){

  const InfoStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <div>
      <h1>Kegger Taproom was created in 2019</h1>
      <h2>We showcase different beers from The Growler Guys to demonstrate site-buiding with React.</h2>
      <h4>For more information about the project, view the README <a href='https://www.github.com/travisty12/kegger-react' style={InfoStyle}>here</a>, which includes contact information and the entirety of my projects.</h4>
    </div>
  );
}

export default Info;
