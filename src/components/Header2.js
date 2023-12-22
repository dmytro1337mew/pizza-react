import React from 'react';
import "./Header.css";
import { useState } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lightGreen } from '@mui/material/colors';
import { Navigate } from "react-router-dom";
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import InventoryIcon from '@mui/icons-material/Inventory';
import jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';


function Header() {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    // Роздекодування та перевірка ролі адміна
    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedAccessToken) {
      const decodedToken = jwtDecode(storedAccessToken);
      const role = decodedToken.role;
      setUserRole(role);

      // Якщо у користувача є роль адміна, ви можете додати відповідний функціонал
      if (role === 'Admin') {
        // Ваш код для користувача з роллю адміна
      }
    }
  }, []);
  useEffect(() => {
    // Перевірка наявності токенів в localStorage
    const storedEmail = localStorage.getItem('email');
    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedEmail && storedAccessToken) {
    }
  }, []);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const handleLogout = async () => {
    try {
      // Виклик POST-запиту
      const response = await axios.get('User/Logout', {

        headers: {
          Authorization: `Bearer ${accessToken}`,

        },
      });

      // Якщо POST-запит виконано успішно, видаляємо кукіс
      localStorage.removeItem('email');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // Якщо є додаткова логіка для виходу, додайте її тут

      // Перенаправлення користувача на головну сторінку або іншу, де потрібно
      navigate('/main');
      console.log(response);
    } catch (error) {
      // Обробка помилок при POST-запиті
      console.error('Помилка при виході з системи:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate()



  return (
    <div className="header">
      <div className="headerLeft">
        <img
          className="image" onClick={() => navigate("/main")} style={{ width: 120, height: 80 }}
          src="https://i.imgur.com/ac8BcqB.png"
        />
      </div>
      <div className="headerMid">
        <h3 className="headerText">Lviv Cat Pizzeria</h3>
        <h3 className="headerText">Place with love to cats</h3>
      </div>

      {/* <div className="clickpointer" onClick={() => navigate("/cart")} style={{ position: "relative", }}>
        <ShoppingBagOutlinedIcon style={{ color: "black" }} />
        <span style={{ color: "black", backgroungColor: "lightgrey", width: 12, height: 12, borderRadius: 6, textAlign: "center", position: "absolute", bottom: 14, left: 20, fontSize: 17, fontWeight: "600", }}>{cart.length}</span>
      </div> */}
      
<div className="clickpointer" onClick={()=>navigate("/orders")}>
        <InventoryIcon className='s123'/>
      </div>
      {userRole === 'Admin' && (
        <button onClick={() => console.log('Ви адмін!')}>Адмін</button>
      )}
      <div className='headerRight'>
        <h4 className="headerText">Djgut Team</h4>
        <h4 className="headerText">+380666666666</h4>
      </div>
    </div>
  )
}

export default Header