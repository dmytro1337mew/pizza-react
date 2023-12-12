import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./AuthProvider";
import axios from 'axios';
const LOGIN_URL = 'https://httpbin.org/post';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                { email, pwd },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            setAuth({ email, pwd, accessToken });
            setEmail('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='SignInbody'>
            {success ? (
                <div>
                    <h1>Ви увійшли!</h1>
                    <br />
                    <p>
                        <a href="#">Продовжити роботу</a>
                    </p>
                </div>
            ) : (
                <div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Увійти</h1>
                    <form className='SignInForm' onSubmit={handleSubmit}>
                        <label htmlFor="email">Пошта:</label>
                        <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='SignUpbutton'>Увійти</button>
                    </form>
                    <p>
                        Ще не зареєструвались?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Зареєструватись</a>
                        </span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Login