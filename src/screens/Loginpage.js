import React from 'react'
import SignIn from '../components/login/SignIn'
import SignUp from '../components/login/SignUp'
import "./Loginpage.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Loginpage() {
  return (
    <div className='loginpage'>
      <Header/>
    <div className='mainboard'>
      <SignIn />
      <SignUp />
    </div>
    <Footer/>
    </div>
  )
}

export default Loginpage