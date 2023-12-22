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
    axios.get('admin/Product/getProducts', {
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


  
  // Сортування масиву перед відображенням
  const sortedData = [...data].sort((a, b) => {
    // Порівнюємо типи продуктів ('pizza' або 'drink')
    if (a.type === 'pizza' && b.type === 'drink') {
      return -1; // Піци ідуть першими
    } else if (a.type === 'drink' && b.type === 'pizza') {
      return 1; // Напої йдуть після піц
    } else {
      return 0; // Залишаємо порядок незмінним, якщо типи однакові
    }
  });
  
  return (
    <div className='body'>
      {sortedData.map((item, index) => (
        <PizzaItem pizza={item} key={index} />
      ))}

    </div>
  )
}

export default Body