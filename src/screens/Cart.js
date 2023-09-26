import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity } from '../redux/CartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch=useDispatch();
  const increaseQuantity=(item)=> {
    dispatch(incrementQuantity(item))
  }
  const decreaseQuantity=(item)=>{
    dispatch(decrementQuantity(item))
  }
  return (
    <>
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
                <h4>{item.price * item.quantity}</h4>
                <div className='cartbuttons'>
                  <div onClick={()=>increaseQuantity(item)}className='cartbutton'>
                  <AddIcon/>
                  </div>
                  <div className='cartbutton'>
                  {item.quantity}
                  </div >
                  <div onClick={()=> decreaseQuantity(item)} className='cartbutton'>
                  <RemoveIcon/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div className='cartright'>
          <h3>right</h3>
        </div>
      </div>
    </>
  )
}

export default Cart