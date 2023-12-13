import { useState } from 'react';
import React from 'react';
import "./Header1.css";
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


function Header1() {

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
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate()
  return (
    <div className="headerhome">
      <div className="headerLefthome">
        <img
          className="imagehome" onClick={() => navigate("/main")} style={{ width: 120, height: 80 }}
          src="https://i.imgur.com/ac8BcqB.png"
        />
      </div>
      <div className="headerMidhome">
        <h3 className="headerTexthome">Lviv Cat Pizzeria</h3>
        <h3 className="headerTexthome">Place with love to cats</h3>
      </div>

      <div className="clickpointer" onClick={() => navigate("/cart")} style={{ position: "relative",}}>
        <ShoppingBagOutlinedIcon style={{ color: "black" }} />
        <span style={{ color: "black", backgroungColor: "lightgrey", width: 12, height: 12, borderRadius: 6, textAlign: "center", position: "absolute", bottom: 14, left: 20, fontSize: 17, fontWeight: "600", }}>{cart.length}</span>
      </div>
      <div className="clickpointer" onClick={()=>navigate("/about")}>
        <PetsOutlinedIcon className='s123'/>
      </div>
      <div className="clickpointer" onClick={openModal}><LoginIcon/></div>
      {isModalOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <div className='ClearIcon'>
        <ClearIcon onClick={closeModal}/>
        </div>
          <SignIn closeModal={closeModal} openModal={openModal1}/>
      </div>
      </div>
    )}

{isModalOpen1 && (
      <div className="modal-overlay">
        <div className="modal">
          <div className='ClearIcon'>
        <ClearIcon onClick={closeModal1}/>
        </div>
        <SignUp closeModal={closeModal1} openModal={openModal} />
        </div>
      </div>
    )}
      <div className='headerRighthome'>
        <h4 className="headerTexthome">Djgut Team</h4>
        <h4 className="headerTexthome">+380666666666</h4>
      </div>
    </div>
  )
}

export default Header1