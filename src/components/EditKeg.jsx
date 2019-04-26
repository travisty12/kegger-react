import React from 'react';
import PropTypes from 'prop-types';

function EditKeg(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _ibu = null;
  let _volume = null;

  function submitNewKeg(event) {
    event.preventDefault();
    props.onEditKeg(props.index, {name: _name.value, brand: _brand.value, price: parseInt(_price.value), abv: parseInt(_abv.value), ibu: parseInt(_ibu.value), volume: parseInt(_volume.value)});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _ibu.value = '';
    _volume.value = '';
    props.onSubmitToggle();
  }

  const InputStyle = {
    backgroundColor: 'rgb(50,50,50)',
    border: 'none',
    borderRadius: '10px'
  }



  return (
    <form onSubmit={submitNewKeg}>
      <input style={InputStyle} placeholder={props.name} ref={(input) => {_name = input;}} />
      <input style={InputStyle} placeholder={props.brand + ' Brewery'} ref={(input) => {_brand = input;}} />
      <input style={InputStyle} placeholder={'$' + props.price + ' / pint'} ref={(input) => {_price = input;}} />
      <input style={InputStyle} placeholder={props.abv + '% abv'} ref={(input) => {_abv = input;}} />
      <input style={InputStyle} placeholder={props.ibu + ' IBUs'} ref={(input) => {_ibu = input;}} />
      <input style={InputStyle} placeholder={props.volume + ' pints remaining'} ref={(input) => {_volume = input;}} />
      <button type='submit'>Submit</button>
    </form>
  );
}

EditKeg.propTypes = {
  onEditKeg: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onSubmitToggle: PropTypes.func.isRequired
};

export default EditKeg;
