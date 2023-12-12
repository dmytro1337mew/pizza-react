import React, {useState, useEffect, useRef} from 'react'
import { Margin } from '@mui/icons-material';
import "./SignIn.css"
import axios from 'axios';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignUp.css"
import ClearIcon from '@mui/icons-material/Clear';

const REGISTER_URL ='https://httpbin.org/post';
const EMAIL_REGEX = /^[A-z][A-z0-9-_@.]{8,40}$/;
const USER_REGEX = /^[А-яіїєІЇЄ][А-яієїІЄЇ]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,50}$/;
const SignUp = () => {

  const userRef = useRef();
  const errRef = useRef();

 const [name, setName]=useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

 const [email, setEmail]=useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

 const [password, setPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
  setValidEmail(EMAIL_REGEX.test(email));
}, [email])

useEffect(() => {
    setValidName(USER_REGEX.test(name));
}, [name])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
}, [password, matchPwd])

useEffect(() => {
    setErrMsg('');
}, [name, email, password, matchPwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  // if button enabled with JS hack
  const v1 = USER_REGEX.test(name);
  const v2 = EMAIL_REGEX.test(email);
  const v3 = PWD_REGEX.test(password);
  if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
  }
  try {
      const response = await axios.post(REGISTER_URL,
             { name, email, password },
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setName('');
      setEmail('');
      setPassword('');
      setMatchPwd('');
  } catch (err) {
      if (!err?.response) {
          setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
      } else {
          setErrMsg('Registration Failed')
      }
      errRef.current.focus();
  }
}

  return (
    <div className='SignUpbody'>
        {success ? (
            <div>
                <h1>Успішно! Підвердіть пошту для авторизації!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </div>
        ) : (
            <div>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Реєстрація</h1>
                <form className='formSignUp' onSubmit={handleSubmit}>
                    <label className='SignUplabel' htmlFor="username">
                        Ім'я:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                    />
                    <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 символи.<br />
                        Має містити літери.<br />
                    </p>

                    <label className='SignUplabel' htmlFor="email">
                        Пошта:
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        6 to 50 символів.<br />
                        Має містити реальну поштову скриньку.<br />
                    </p>


                    <label className='SignUplabel' htmlFor="password">
                        Пароль:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        6 to 50 символів.<br />
                        Має містити одну маленьку літеру, одну велику літеру, одну цифру та один символ.<br />
                        Дозволені символи: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>


                    <label className='SignUplabel' htmlFor="confirm_pwd">
                        Підтвердіть пароль:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Паролі повинні співпадати.
                    </p>

                    <button className='SignUpbutton' disabled={!validName || !validPwd || !validMatch ? true : false}>Зареєструватись</button>
                </form>
                <p>
                    Вже зареєстровані?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Увійти</a>
                    </span>
                </p>
           </div>
        )}
    </div>
)
}

export default SignUp