import React from 'react'
import { useState } from 'react';
import SignIn from '../components/login/SignIn'
import SignUp from '../components/login/SignUp'
import "./Loginpage.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Loginpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='loginpage'>
      <Header/>
    <div className='mainboard'>
      <SignIn />
      <button onClick={openModal}>Open Modal</button>

    </div>
    <Footer/>
    </div>
  )
}

export default Loginpage


