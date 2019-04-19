import React from 'react';
import PropTypes from 'prop-types';
import spitoon from '../assets/images/salty-spitoon.png';
import Keg from './Keg';

function KegList(){
  const kegList = [
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
  ];
  return (
    <div>
      {kegList.map((keg, index) =>
        <Keg name={keg.name},
          brand={keg.brand},
          price={keg.price},
          abv={keg.abv},
          ibu={keg.ibu},
          volume={keg.volume},
          key={index} />
      )}
    </div>
  );
}

export default KegList;
