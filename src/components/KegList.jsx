import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import Denied from './Denied';

class KegList extends React.Component{

  constructor() {
    super();
    this.state = {
      kegList: [
        {
          name: 'Blushing Monk',
          brand: 'Founders',
          price: 8,
          abv: 9.2,
          ibu: 20,
          volume: 124
        },
        {
          name: 'War Horn',
          brand: 'Saison',
          price: 6,
          abv: 6.3,
          ibu: 20,
          volume: 124
        },
        {
          name: 'Paradise Pucker',
          brand: 'Rogue Ales',
          price: 5,
          abv: 6,
          ibu: 5,
          volume: 124
        },
        {
          name: 'Cali Screamin',
          brand: 'Mother Earth',
          price: 4,
          abv: 5,
          ibu: 18,
          volume: 124
        },
        {
          name: 'Pils',
          brand: 'Chapman Crafted',
          price: 4.5,
          abv: 5.2,
          ibu: 10,
          volume: 124
        }
      ]
    };
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
    this.handleFillKeg = this.handleFillKeg.bind(this);
  }

  handleEditKeg(index, newKeg) {
    const newState = {...this.state}.kegList;
    for (let key in newKeg) {
      if (newKeg[key]) {
        console.log(newKeg[key]);
        newState[index][key] = newKeg[key];
      }

    }
    this.setState({kegList: newState});
  }

  handleSellPint(index) {
    const newState={...this.state}.kegList;
    newState[index].volume -= 1;
    this.setState({kegList: newState});
  }

  handleFillKeg(index) {
    const newState = {...this.state}.kegList;
    newState[index].volume = 124;
    this.setState({kegList: newState});
  }

  render() {
    const KegListStyle = {
      width: '95vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px',
      marginBottom: '260px',
      height: '100%',
      maxWidth: '600px',
      backgroundColor: 'rgba(0,0,0,0.3)',
      border: '2px solid gold',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.3)'
    };
    const ButtonStyle = {
      backgroundColor: 'rgba(255,215,0,0.9)',
      border: 'none',
      height: '20px',
      color: 'rgb(255,255,255)',
      borderRadius: '20px',
      boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.3)',
      margin: '10px'
    };
    let Visible = null;
    if (this.props.accessGranted) {
      Visible = <div style={KegListStyle}>
        {this.state.kegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            ibu={keg.ibu}
            volume={keg.volume}
            index={index}
            loginEnabled={this.props.loginEnabled}
            onSellPint={this.handleSellPint}
            onFillKeg={this.handleFillKeg}
            onEditKeg={this.handleEditKeg}
            key={index}/>
        )}
        <button style={ButtonStyle}>Add Keg</button>
      </div>;
    } else {
      Visible = <Denied />;
    }
    return (
      <div>
        {Visible}
      </div>
    );
  }
}

KegList.propTypes = {
  loginEnabled: PropTypes.bool.isRequired,
  accessGranted: PropTypes.bool.isRequired
};

export default KegList;
