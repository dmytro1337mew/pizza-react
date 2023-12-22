import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
const LOGIN_URL = 'User/Login';

const Login = ({ closeModal, openModal }) => {
    const { setAuth , auth} = useAuth();
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    useEffect(() => {
        // Перевірка наявності токенів в localStorage
        const storedEmail = localStorage.getItem('email');
        const storedAccessToken = localStorage.getItem('accessToken');

        if ( storedAccessToken) {
            setSuccess(true);
        }
    }, []);

    const handleSuccessfulLogin = (accessToken, refreshToken, email) => {
        // Збереження токенів у localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('email', email);
        localStorage.setItem('refreshToken', refreshToken);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                { email, password },
            );
            console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response))
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.token;
            const refreshToken = response?.data?.refreshToken;
            handleSuccessfulLogin(accessToken, refreshToken, email);
            setAuth({ email, accessToken, refreshToken });
            setEmail('');
            setPassword('');
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
                    <h1>Ви вже увійшли! Ваша пошта: {localStorage.getItem('email')}</h1>
                    <br />
                </div>
            ) : (
                <div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Увійти</h1>
                    <form className='SignInForm' onSubmit={handleSubmit}>
                        <label htmlFor="email">Пошта:{''}</label>
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
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button className='SignUpbutton'>Увійти</button>
                    </form>
                    <p>
                        Ще не зареєструвались?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <h6 onClick={() => { closeModal(); openModal(); }}><u>Зареєструватись</u></h6>
                            
                        </span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Login