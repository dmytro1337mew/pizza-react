import React, {useState, useEffect} from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { Margin } from '@mui/icons-material';
import "./SignIn.css"
import axios from 'axios';

const SignUp = () => {
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const handleSubmit = () => {

    const axiosInstance = axios.create();
    axiosInstance.post("https://httpbin.org/post", {
      name,
      email,
      password,
    })
      .then((response) => {
       console.log(response.data.json)
      })
      .catch((error) => {
        
      });
  };
  // const signUp=(e)=>{
  //  e.preventDefault();
  //  if (password.length < 6) {
  //   // Display a custom dialog for a short password
  //   window.alert('Password should be at least 6 characters long');
  //   return;
  // }
  //  createUserWithEmailAndPassword(auth,email,password)
  //  .then((userCredential)=>{
  //   console.log(userCredential);
  //  }).catch((error)=>{
  //   console.log(error);
  //  });
  // }
  return (
    <div className='signincontainter'>
      {/* <form onSubmit={signUp}> */}
        <h1 className="createlogo">Create Account</h1>
        <input className="nameinput" type="text" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)}></input>
        <input className="emailinput" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input className="passwordinput" type="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
        <button onClick={handleSubmit} type='submit'>Sign Up</button>
      {/* </form> */}
    </div>
  )
}

export default SignUp