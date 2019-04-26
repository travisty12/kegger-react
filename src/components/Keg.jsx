import React from 'react';
import PropTypes from 'prop-types';
import EditKeg from './EditKeg';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.sellPint = this.sellPint.bind(this);
    this.fillKeg = this.fillKeg.bind(this);
  }

  toggleEdit() {
    const newState = {...this.state};
    newState.editMode = !newState.editMode;
    this.setState({editMode: newState.editMode});
  }

  sellPint() {
    const newState = {...this.state};
    newState.editMode = !newState.editMode;
    this.setState({editMode: newState.editMode});
    this.props.onSellPint(this.props.index);
  }

  fillKeg() {
    const newState = {...this.state};
    newState.editMode = !newState.editMode;
    this.setState({editMode: newState.editMode});
    this.props.onFillKeg(this.props.index);
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
    if (this.state.editMode) {
      EditOptions = <div><button onClick={() => {this.sellPint}}>Sell 1 pint</button><button onClick={() => {this.fillKeg}}>Refill keg</button><button onClick={this.toggleEdit}>Close edit mode</button></div>;
      KegView = <div style={InfoStyle}><EditKeg name={this.props.name}
        brand={this.props.brand}
        price={this.props.price}
        abv={this.props.abv}
        ibu={this.props.ibu}
        volume={this.props.volume} index={this.props.index} onSubmitToggle={this.toggleEdit} onEditKeg={this.props.onEditKeg} /></div>;
      // KegView = <div style={InfoStyle}><form onSubmit={this.submitNewKeg}><input placeholder={this.props.name} ref={(input) => {_name = input;}} /><input placeholder={this.props.brand + ' Brewery'} ref={(input) => {_brand = input;}} /><input placeholder={'$' + this.props.price + ' / pint'} ref={(input) => {_price = input;}} /><input placeholder={this.props.abv + '% abv'} ref={(input) => {_abv = input;}} /><input placeholder={this.props.ibu + ' IBUs'} ref={(input) => {_ibu = input;}} /><input placeholder={this.props.volume + ' pints remaining'} ref={(input) => {_volume = input;}} /><button type='submit'>Submit</button></form></div>

    } else {
      if (this.props.loginEnabled) {
        EditOptions = <div><button onClick={this.toggleEdit}>Open edit mode</button></div>;
      } else {
        EditOptions = null;
      }
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
  index: PropTypes.number.isRequired,
  loginEnabled: PropTypes.bool.isRequired,
  onSellPint: PropTypes.func.isRequired,
  onFillKeg: PropTypes.func.isRequired,
  onEditKeg: PropTypes.func.isRequired,
};

export default Keg;
