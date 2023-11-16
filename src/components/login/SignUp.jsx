import React, {useState} from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { Margin } from '@mui/icons-material';
import "./SignIn.css"

const SignUp = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const signUp=(e)=>{
   e.preventDefault();
   if (password.length < 6) {
    // Display a custom dialog for a short password
    window.alert('Password should be at least 6 characters long');
    return;
  }
   createUserWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
    console.log(userCredential);
   }).catch((error)=>{
    console.log(error);
   });
  }
  return (
    <div className='signincontainter'>
      <form onSubmit={signUp}>
        <h1 className="createlogo">Create Account</h1>
        <input className="emailinput" type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input className="passwordinput" type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp