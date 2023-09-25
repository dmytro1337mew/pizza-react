import React from 'react'
import "./PizzaItem.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import {removeFromCart} from '../redux/CartSlice'

function PizzaItem({ pizza }) {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <div className="pizzaItem">
      <div className="pizzaItemOuterContainer">
        <img className="imagepizza" style={{ width: 150, height: 150 }} src={pizza.image} />
        <div className="pizzaItemcontainer">
          <h4 className="PizzaItemText">{pizza.name}</h4>
          <h4 className="PizzaItemDescription">{pizza.description.length > 100 ? pizza.description.substr(0, 30) + "..." : pizza.description}</h4>
          {cart.some((c) => c.id === pizza.id) ? (
            <button onClick={() => removeItemFromCart(pizza)} className='PizzaItemButton'>Видалити з замовлення</button>
          ) : (
            <button onClick={() => addItemToCart(pizza)} className='PizzaItemButton'>Замовити</button>
          )}

        </div>
      </div>
    </div>
  )
}

export default PizzaItem