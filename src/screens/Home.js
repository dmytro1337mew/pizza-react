import React from 'react'
import "./Home.css"
import Header1 from '../components/Header1'
import Body from '../components/Body'
import Footer from '../components/Footer'
import CardContainer from '../components/card/container'
function Home() {
  return (
    <div className='home'>
       <Header1/>
<CardContainer/>
       <Body/> 

       <Footer/>
    </div>
  )
}

export default Home