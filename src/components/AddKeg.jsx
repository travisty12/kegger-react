import React from 'react';
import PropTypes from 'prop-types';

function AddKeg(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _ibu = null;
  let _volume = null;

  function addNewKeg(event) {
    event.preventDefault();
    props.onAddKeg({name: _name.value, brand: _brand.value, price: parseInt(_price.value), abv: parseInt(_abv.value), ibu: parseInt(_ibu.value), volume: parseInt(_volume.value)});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _ibu.value = '';
    _volume.value = '';
    props.toggleAdd();
  }

  const InputStyle = {
    backgroundColor: 'rgb(50,50,50)',
    border: 'none',
    borderRadius: '10px',
    width: '100px',
    height: '25px'
  }
  const ButtonStyle = {
    backgroundColor: 'rgba(255,215,0,0.9)',
    border: 'none',
    height: '25px',
    color: 'rgb(255,255,255)',
    borderRadius: '20px',
    boxShadow: '1px 1px 10px 1px rgba(0,0,0,0.3)'
  }
  const FormStyle = {
    width: '250px',
    height: '100%',
    display: 'flex',
    flexFlow: 'wrap row',
    justifyContent: 'space-around',
    alignItems: 'space-around'
  }



  return (
    <form style={FormStyle} onSubmit={addNewKeg}>
      <input style={InputStyle} placeholder='Name' ref={(input) => {_name = input;}} />
      <input style={InputStyle} placeholder='Brewery' ref={(input) => {_brand = input;}} />
      <input style={InputStyle} placeholder='Price Per Pint' ref={(input) => {_price = input;}} />
      <input style={InputStyle} placeholder='ABV' ref={(input) => {_abv = input;}} />
      <input style={InputStyle} placeholder='IBUs' ref={(input) => {_ibu = input;}} />
      <input style={InputStyle} placeholder='Volume' ref={(input) => {_volume = input;}} />
      <button style={ButtonStyle} type='submit'>Submit</button>
    </form>
  );
}

AddKeg.propTypes = {
};

export default AddKeg;
