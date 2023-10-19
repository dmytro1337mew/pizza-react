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
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item))
  }
  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
  const discount = 555;
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
          <h3 className='cartrighttext'>Заповніть дані доставки:</h3>
          <div className='cartTop'>
            <AddLocationIcon style={{ color: "gray", fontSize: 22 }} />
            <div className='CartRightDesc'>
              <h4 style={{marginBottom:"10px"}}>Оберіть адресу</h4>
              <div>
                <h5 style={{marginBottom:"7px"}}>Місто: </h5>
                
                <input
                type="text"
              /></div>
              <div>
                <h5 style={{marginBottom:"7px"}}>Вулиця: </h5>
                <input
                type="text"
              /></div>
              <div>
                <h5 style={{marginBottom:"7px"}}>Номер будинку\квартири: </h5>
                <input
                type="text"
              /></div>
              <button style={{ color: "#ffb54f", borderWidth: 0.7, borderColor: "#ffb54f", cursor: "pointer", marginTop: 7, borderRadius: 4, padding: 4 }}>Підтвердити адресу</button>
            </div>
          </div>

          <div className='cartTop'>
            <LoginIcon style={{ color: "gray", fontSize: 22 }} />
            <div className='CartRightDesc'>
              <h4 style={{marginBottom:"10px"}}>Авторизуйтесь, щоб зберегти дані про доставку</h4>
              <div>
                <h5 style={{marginBottom:"7px"}}>Login: </h5>
                <input
                type="text"
              /></div>
              <div>
                <h5 style={{marginBottom:"7px"}}>Password: </h5>
                <input
                type="text"
              /></div>
              <button style={{ color: "#ffb54f", borderWidth: 0.7, borderColor: "#ffb54f", cursor: "pointer", marginTop: 7, borderRadius: 4, padding: 4 }}>Увійти</button>
            </div>
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
          <button className='cartButtonRight'>Замовити</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart