import React from 'react'
import "./Footer.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lightGreen } from '@mui/material/colors';
import { Navigate } from "react-router-dom";
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
function Footer() {
    const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate()
  return (
    <div className="header">
    <div className="headerLeft">
      <img
        className="image" onClick={() => navigate("/pizza-react")} style={{ width: 120, height: 80 }}
        src="https://i.imgur.com/ac8BcqB.png"
      />
    </div>
    <div className="headerMid">
      <h3 className="headerText">Lviv Cat Pizzeria</h3>
      <h3 className="headerText">Place with love to cats</h3>
    </div>

    <div className="clickpointer" onClick={() => navigate("/cart")} style={{ position: "relative",}}>
      <ShoppingBagOutlinedIcon style={{ color: "black" }} />
      <span style={{ color: "black", backgroungColor: "lightgrey", width: 12, height: 12, borderRadius: 6, textAlign: "center", position: "absolute", bottom: 14, left: 20, fontSize: 17, fontWeight: "600", }}>{cart.length}</span>
    </div>
    <div className="clickpointer" onClick={()=>navigate("/about")}>
      <PetsOutlinedIcon />
    </div>
    <div className='headerRight'>
      <h4 className="headerText">Djgut Team</h4>
      <h4 className="headerText">+380666666666</h4>
    </div>
  </div>
  )
}

export default Footer