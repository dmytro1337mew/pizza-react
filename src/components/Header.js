import React from 'react';
import "./Header.css";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AboutUs from './pages/AboutUs';
import {Route, Link} from 'react-router-dom';


function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
            <img
            className="image" style={{width:120, height:80}}
            src="https://i.imgur.com/ac8BcqB.png"
            />
        </div>
            <div className="headerMid">
              <h3 className="headerText">Lviv Cat Pizzeria</h3>
              <h3 className="headerText">Place with love to cats</h3>
            </div>

<div>
  <ShoppingBagOutlinedIcon/>
</div>

           <div className='headerRight'>
            <h4 className="headerText">Djgut Team</h4>
            <h4 className="headerText">+380666666666</h4>
           </div>
    </div>
  )
}

export default Header