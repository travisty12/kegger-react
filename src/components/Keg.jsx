import React from 'react';
import PropTypes from 'prop-types';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
  }

  render() {
    const KegStyle = {
      maxWidth: "600px",
      width: "90vw",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 20px 40px 20px"
    }

    const InfoStyle = {
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    }

    const TextStyle = {
      margin: "0",
      color: "rgba(30,30,30, 1)",
      fontSize: "1rem"
    }

    const NameStyle = {
      margin: "0",
      color: "rgba(15,15,15,1)",
      fontSize: "2rem"
    }
    let KegView = {};
    let EditOptions = {};
    if (this.state.editMode) {
      EditOptions = <div><button>Sell 1 pint</button><button>Refill keg</button><button>Close edit mode</button></div>;
    } else {
      EditOptions = <div><button>Open edit mode</button></div>
    }

    return (
      <div style={KegStyle}>
        <div>
          <h1 style={NameStyle}>{this.props.name}</h1>
          {EditOptions}
        </div>
        <div style={InfoStyle}>
          <h3 style={TextStyle}>{this.props.brand} Brewery</h3>
          <h4 style={TextStyle}>${this.props.price} / pint</h4>
          <p style={TextStyle}>{this.props.abv}% abv</p>
          <p style={TextStyle}>{this.props.ibu} IBUs</p>
          <p style={TextStyle}>{this.props.volume} pints remaining</p>
        </div>
      </div>
    );

  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Keg;
