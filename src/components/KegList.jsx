import React from 'react';
import PropTypes from 'prop-types';
import spitoon from '../assets/images/salty-spitoon.png';
import Keg from './Keg';
import EditKeg from './EditKeg';
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
          name: 'Cali Creamin',
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
    }
    this.handleEditKeg = this.handleEditKeg.bind(this);
  }

  handleEditKeg(index, newKeg) {
    const newState = {...this.state}.kegList;
    newState[index] = newKeg;
    this.setState({kegList: newState});
  }

  render() {
    const KegListStyle = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px',
      marginBottom: '60px'
    };
    console.log(this.props.accessGranted);
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
            onEditKeg={this.handleEditKeg}
            key={index}/>
        )}
      </div>
    } else {
      Visible = <Denied />
    }
    return (
      <div>
        {Visible}
      </div>
    );
  }
}

export default KegList;
