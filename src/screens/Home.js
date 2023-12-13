import { useState } from 'react';
import React from 'react'
import "./Home.css"
import Header1 from '../components/Header1'
import Body from '../components/Body'
import Footer from '../components/Footer'
import CardContainer from '../components/card/container'
import { Hidden } from '@mui/material'
import Body1 from '../components/Body1'
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Home() {
    const [isBodyVisible, setIsBodyVisible] = useState(true);
    const [isBodyVisible1, setIsBodyVisible1] = useState(true);
    const hideBody = () => {
      setIsBodyVisible(false);
      setIsBodyVisible1(true);
    }
  
    const showBody = () => {
      setIsBodyVisible(true);
      setIsBodyVisible1(false);
    }
    const showall=()=>{
      setIsBodyVisible(true);
      setIsBodyVisible1(true);
    }
  
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
  return (
    <div className='home'>
      <Header1 style={{zIndex:2}} />
      <div  className='navigateitems'>
      <Button className='but1'
      onClick={showall}
      variant="contained"
      color="primary"
      startIcon={<FavoriteIcon />}
      style={{
        backgroundColor: '#ff9f1c',
        color: '#fff',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        marginRight: '10px',
        zIndex:1
      }}
    >
      All Items
    </Button>
    <Button
    className='but2'
    onClick={hideBody}
      variant="contained"
      color="primary"
      startIcon={<FavoriteIcon />}
      style={{
        backgroundColor: '#ff9f1c',
        color: '#fff',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        marginRight: '10px',
        zIndex:1
      }}
    >
      Drinks
    </Button>
    <Button
    onClick={showBody}
      variant="contained"
      color="primary"
      startIcon={<FavoriteIcon />}
      style={{
        backgroundColor: '#ff9f1c',
        color: '#fff',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        zIndex:1
      }}
    >
      Pizza
    </Button>
      </div>
      
      <CardContainer />
      {isBodyVisible && <Body />}
      {isBodyVisible1 &&<Body1 />}
      <Footer />
    </div>
  )
}

export default Home