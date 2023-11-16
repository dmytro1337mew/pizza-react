import React from 'react'
import "./Body1.css"
import { useSelector } from 'react-redux';
import DrinkItem from './DrinkItem';
import drink from'../data/drink'

function Body1() {
  const data1 = drink;
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  return (
    <div className='body1'>
      {data1.map((item, index) => (
        <DrinkItem drink={item} key={index} />
      ))}
    </div>
  )
}

export default Body1