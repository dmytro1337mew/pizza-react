import { useState } from 'react';
import React from 'react'
import "./Home.css"
import Header1 from '../components/Header1'
import Body from '../components/Body'
import Footer from '../components/Footer'
import CardContainer from '../components/card/container'
import { Hidden } from '@mui/material'
import Body1 from '../components/Body1'
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
  
  return (
    <div className='home'>
      <Header1 />
      <div className='navigateitems'>
      <button className='pepega3' onClick={showall}>All Items</button>
      <button className='pepega1' onClick={hideBody}>Drinks</button>
      <button className='pepega2' onClick={showBody}>Pizza</button>
      </div>
      
      <CardContainer />
      {isBodyVisible && <Body />}
      {isBodyVisible1 &&<Body1 />}
      <Footer />
    </div>
  )
}

export default Home