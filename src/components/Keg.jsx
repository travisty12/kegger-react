import React from 'react';
import PropTypes from 'prop-types';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitNewKeg = this.submitNewKeg.bind(this);
  }

  toggleEdit() {
    const newState = {...this.state};
    newState.editMode = !newState.editMode;
    this.setState({editMode: newState.editMode});
  }

  submitNewKeg(event) {
    event.preventDefault();
    this.props.onEditKeg(this.props.index, {name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, ibu: _ibu.value, volume: _volume.value});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _ibu.value = '';
    _volume.value = '';
  }


  render() {
    const KegStyle = {
      maxWidth: '600px',
      width: '90vw',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 20px 40px 20px'
    };

    const InfoStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    };

    const TextStyle = {
      margin: '0',
      color: 'rgba(30,30,30, 1)',
      fontSize: '1rem'
    };

    const NameStyle = {
      margin: '0',
      color: 'rgba(15,15,15,1)',
      fontSize: '2rem'
    };
    let KegView = null;
    let EditOptions = null;
    let _name = null;
    let _brand = null;
    let _price = null;
    let _abv = null;
    let _ibu = null;
    let _volume = null;
    if (this.state.editMode) {
      EditOptions = <div><button>Sell 1 pint</button><button>Refill keg</button><button onClick={this.toggleEdit}>Close edit mode</button></div>;
      KegView = <div style={InfoStyle}><form onSubmit={this.submitNewKeg}><input placeholder={this.props.name} ref={(input) => {_name = input;}} /><input placeholder={this.props.brand + ' Brewery'} ref={(input) => {_brand = input;}} /><input placeholder={'$' + this.props.price + ' / pint'} ref={(input) => {_price = input;}} /><input placeholder={this.props.abv + '% abv'} ref={(input) => {_abv = input;}} /><input placeholder={this.props.ibu + ' IBUs'} ref={(input) => {_ibu = input;}} /><input placeholder={this.props.volume + ' pints remaining'} ref={(input) => {_volume = input;}} /><button type='submit'>Submit</button></form></div>

    } else {
      EditOptions = <div><button onClick={this.toggleEdit}>Open edit mode</button></div>;
      KegView = <div style={InfoStyle}><h3 style={TextStyle}>{this.props.brand} Brewery</h3><h4 style={TextStyle}>${this.props.price} / pint</h4><p style={TextStyle}>{this.props.abv}% abv</p><p style={TextStyle}>{this.props.ibu} IBUs</p><p style={TextStyle}>{this.props.volume} pints remaining</p></div>;
    }

    return (
      <div style={KegStyle}>
        <div>
          <h1 style={NameStyle}>{this.props.name}</h1>
          {EditOptions}
        </div>
        {KegView}
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
