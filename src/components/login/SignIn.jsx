import React, {useEffect, useState} from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignIn.css"
import axios from 'axios';
const apichanger="https://2f61-93-171-247-144.ngrok-free.app/"
const src="https://content.guardianapis.com/search?page=2&q=debate&api-key=test"
const SignIn = () => {
  const [articles, setArticles]= useState([]);
  useEffect(()=>{
    axios
    .get(src)
    .then(data=>{
      setArticles(data.data.response.results);
    })
  },[]);
  // const [email, setEmail]=useState('');
  // const [password, setPassword]=useState('');
  const handleSubmit = () => {

    const axiosInstance = axios.create();
    axiosInstance.post("https://httpbin.org/post", {
      // email,
      // password,
    })
      .then((response) => {
       console.log(response)
      })
      .catch((error) => {
        
      });
  };
  // const signIn=(e)=>{
  //  e.preventDefault();
  //  signInWithEmailAndPassword(auth,email,password)
  //  .then((userCredential)=>{
  //   console.log(userCredential);
  //  }).catch((error) => {
  //   // Display a custom dialog for invalid login
  //   window.alert('Invalid login or password');
  //   console.error(error);
  // });
  // }
  return (
    <div className='signincontainter'>
      {articles.map(article=>{
        return(
          <p>{article.webTitle}</p>
        )
      })}
      {/* <form onSubmit={signIn}> */}
        {/* <h1 className="createlogo">Log In to your account</h1>
        <input className='emailinput' type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input className='passwordinput' type="password" placeholder="Enter your password" value={password} onChange={(event)=>setPassword(event.target.value)}></input>
        <button onClick={handleSubmit} type='submit'>Log In</button> */}
      {/* </form> */}
    </div>
  )
}

export default SignIn