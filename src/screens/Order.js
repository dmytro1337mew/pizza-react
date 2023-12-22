import React from 'react'
import Header2 from '../components/Header2'
import "./Order.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
function Order() {
  const [expandedOrders, setExpandedOrders] = useState({});
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const [orders, setOrders]=useState([]);
  useEffect(() => {
    axios.get('https://792f-91-218-105-250.ngrok-free.app/api/admin/Product/Deliveries',{
      headers: {
        'ngrok-skip-browser-warning': 'true',
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      
    })
    
    .then(response => {
      setOrders(response.data)
      console.log('Профіль користувача:', response.data);

    })
    .catch(error => {
      console.error('Помилка при отриманні профілю користувача:', error);
    });
  }, []);
  const groupedOrders = orders.reduce((acc, order) => {
    if (!acc[order.email]) {
      acc[order.email] = [];
    }
    acc[order.email].push(order);
    return acc;
  }, {});
  const totalSumsByUser = orders.reduce((acc, order) => {
    if (!acc[order.email]) {
      acc[order.email] = 0;
    }
    acc[order.email] += order.price;
    return acc;
  }, {});
  return (
    <div className='order'>
      <Header2/>
      <div>
      {Object.keys(groupedOrders).length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Object.entries(groupedOrders).map(([email, orderList]) => (
        <div
        key={email}
        style={{
          border: "1px solid #ddd",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "10px",
          marginTop: "15px",
          marginRight: "15px", 
          width: "450px", 
          backgroundColor:"orange",
        }}
      >
        <button
          style={{ fontSize: "20px", marginBottom: "10px" }}
          onClick={() => {
            setExpandedOrders(prevState => ({
              ...prevState,
              [email]: !prevState[email],
            }));
          }}
        >
          {expandedOrders[email] ? 'Hide' : 'Show'} Order List
        </button>
          <p style={{fontSize:"25px"}}><strong>Email: </strong>{email}</p>
          <p style={{fontSize:"25px"}}><strong>Кількість товарів: </strong>  {orderList.length}</p>
                  
          <ul
          style={{ display: expandedOrders[email] ? "block" : "none", listStyleType: "none", padding: 0 }}
        >
          {orderList.map(data => (
                    <li key={data.id}><p><strong>Назва продукту: </strong>{data.productName}</p>
                    <p><strong>Ціна: </strong> {data.price}</p>
                    <p><strong>Кількість: </strong> {data.quantity}</p>
                    
                    </li>
                  ))}
                    </ul>
                    <p style={{ fontSize: '20px' }}><strong>Загальна сума: </strong>{totalSumsByUser[email]}</p>
        </div>
      ))}
    </div>
    ) : (
      <p>Немає замовлень</p>
    )}
          </div>
          
        </div>
      
    
  )
}

export default Order