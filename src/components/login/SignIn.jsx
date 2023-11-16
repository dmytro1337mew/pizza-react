import React, {useState} from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignIn.css"

const SignIn = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const signIn=(e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
    console.log(userCredential);
   }).catch((error) => {
    // Display a custom dialog for invalid login
    window.alert('Invalid login or password');
    console.error(error);
  });
  }
  return (
    <div className='signincontainter'>
      <form onSubmit={signIn}>
        <h1 className="createlogo">Log In to your account</h1>
        <input className='emailinput' type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input className='passwordinput' type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default SignIn