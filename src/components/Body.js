import React from 'react'
import "./Body.css"
import pizza from '../data/pizza'
import PizzaItem from './PizzaItem';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';



function Body() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://adf3-91-218-105-250.ngrok-free.app/api/Product/getProducts', {
      headers: {
        'ngrok-skip-browser-warning': 'true',
        // Other headers if needed
      },
    })
    .then(response => {
      setData(response.data);
      console.log(response.data);
    })
    .catch(error => {
      setData(pizza);
      console.error('Error fetching data:', error);
    });
  }, []);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  return (
    <div className='body'>
      {data.map((item, index) => (
        <PizzaItem pizza={item} key={index} />
      ))}

    </div>
  )
}

export default Body