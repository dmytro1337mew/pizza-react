import React from 'react'
import "./Home.css"
import Header1 from '../components/Header1'
import Body from '../components/Body'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='home'>
       <Header1/>

       <Body/> 

       <Footer/>
    </div>
  )
}

export default Home