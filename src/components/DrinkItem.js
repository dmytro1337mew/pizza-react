import React from 'react'
import "./DrinkItem.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { removeFromCart } from '../redux/CartSlice'

function DrinkItem({ drink }) {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <div className="drinkItem">
      <div className="drinkItemOuterContainer">
        <img className="drinkpizza" style={{ width: 150, height: 150 }} src={drink.image} />
        <div className="drinkItemcontainer">
          <h4 className="drinkItemText">{drink.name}</h4>
          <h4 className="drinkItemDescription">{drink.description.length > 100 ? drink.description.substr(0, 30) + "..." : drink.description}</h4>
          <div className='drinkunder'>
          <h4 className='drinkprice'>{drink.price}₴</h4>
            {cart.some((c) => c.id === drink.id) ? (
              <button onClick={() => removeItemFromCart(drink)} className='drinkItemButton1'>Видалити з замовлення</button>
            ) : (
              <button onClick={() => addItemToCart(drink)} className='PizzaItemButton'>Замовити</button>
            )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default DrinkItem