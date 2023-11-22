import React, {useEffect, useState} from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./SignIn.css"
import axios from 'axios';
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
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const handleSubmit = () => {
    // Створіть об'єкт `axios`.
    const axiosInstance = axios.create();

    // Використовуйте метод `post()` для відправки запиту на api.
    axiosInstance.post("https://localhost:8080/users/", {
      email,
    })
      .then((response) => {
        // Обробка успішного запиту.
      })
      .catch((error) => {
        // Обробка помилки запиту.
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
        <h1 className="createlogo">Log In to your account</h1>
        <input className='emailinput' type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <input className='passwordinput' type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit} type='submit'>Log In</button>
      {/* </form> */}
    </div>
  )
}

export default SignIn