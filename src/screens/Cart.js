import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity } from '../redux/CartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../components/Footer';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LoginIcon from '@mui/icons-material/Login';
import SignIn from '../components/login/SignIn';
import axios from 'axios';

import { useState } from 'react';
function Cart() {
  const [order, setOrder] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState('selfPickup'); // Default to self-pickup
  const sendOrder = async (editedArray, userToken) => {
    try {
      // Ваш код для відправки на сервер
      console.log('Sending data:', editedArray);
      const response = await axios.post('Order/Create', editedArray, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
  
      // Додатковий код обробки відповіді, якщо потрібно
      console.log(response.data);
    } catch (error) {
      console.error('Помилка при відправці замовлення:', error);
    }
  };
  const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item))
  }
  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
  const discount = 100;
  const handleButtonClick2 = () => {
    const editedArray = cart.map(item => ({
      productId: item.id,
      quantity: item.quantity,
      delivery: deliveryMethod === 'selfPickup' ? 0 : 1,
    }));
  
    sendOrder(editedArray, accessToken);
  };
  return (
    <div className='cart1'>
      <Header />
      <div className='cart'>
        {/* left */}
        <div className='cartleft'>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{ marginBottom: 20, display: "flex", flexDirection: "row", alignItems: "center", }}>
              <div className='cartimage'>
                <img src={item.image} style={{ height: 60, width: 60, borderRadius: 5 }} />
              </div>

              <div className='cartdescription'>
                <h3 className='cartname'>{item.name}</h3>
                <h4 className='cartdescription1'>{item.description}</h4>
                <h4 className='carttype'>Regular | 100%</h4>
              </div>

              <div className='carttotal' style={{ marginLeft: "auto" }}>
                <h4 style={{ marginLeft: 18 }}>{item.price * item.quantity}</h4>
                <div className='cartbuttons'>
                  <div onClick={() => decreaseQuantity(item)} className='cartbutton'>
                    <RemoveIcon style={{ height: 15, width: 15, marginRight: 5 }} />
                  </div>
                  <div style={{ fontWeight: 600, marginBottom: 5 }} className='cartbutton'>
                    {item.quantity}
                  </div >
                  <div onClick={() => increaseQuantity(item)} className='cartbutton'>
                    <AddIcon style={{ height: 15, width: 15, marginLeft: 5 }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div className='cartright'>
          <SignIn/>
          <div>
            <br></br>
  <label>
    <input
      type="radio"
      value="selfPickup"
      checked={deliveryMethod === 'selfPickup'}
      onChange={() => setDeliveryMethod('selfPickup')}
    />
    Самовивіз  
  </label>
  <br></br>
  
  <label>
    <input
      type="radio"
      value="delivery"
      checked={deliveryMethod === 'delivery'}
      onChange={() => setDeliveryMethod('delivery')}
    />
    Доставка
  </label>
</div>
          


          <h3 className='cartrighttext'>Ваше замовлення</h3>


          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
              <h4 style={{ fontSize: 15, fontWeight: "500" }}>Сума замовлення:</h4>
              <h4 style={{ fontSize: 15, fontWeight: "500" }}>{total}</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
              <h4 style={{ fontSize: 15, fontWeight: "500" }}>Знижка</h4>
              <h4 style={{ fontSize: 15, fontWeight: "500" }}>{discount}</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
              <h4 style={{ fontSize: 15, fontWeight: "bold" }}>До оплати:</h4>
              <h4 style={{ fontSize: 15, fontWeight: "600" }}>{total - discount}</h4>
            </div>
          </div>
          <button onClick={handleButtonClick2} className='cartButtonRight'>Замовити</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart