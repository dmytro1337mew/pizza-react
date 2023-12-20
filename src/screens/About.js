import React from 'react'
import "./About.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import SignIn from '../components/login/SignIn.jsx'
import { useEffect, useState } from 'react'
function About() {
    const [data, setData] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const USER_URL = '/User/GetUser';
    useEffect(() => {
        axios.get(USER_URL, {
            withCredentials: true,
            baseURL: URL,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                console.log('Профіль користувача:', response.data);
                setData(response.data)

            })
            .catch(error => {
                console.error('Помилка при отриманні профілю користувача:', error);
            });
    }, []);
    const name = 'zabina';
    const surname = 'babbuy';
    return (
        <div className='about22'>
            <Header />
            {localStorage.getItem('accessToken') ?  (
            <div className="col user-profile " style={{}}>
            <div>
              <h3>ТВІЙ ПРОФІЛЬ </h3>
              <br/>
              <img
                        className="image1"
                        src="https://www.bacinos.com/wp-content/uploads/2021/05/Can-Cats-Eat-Pizza-Which-Ingredient-Will-Hurt-Your-Cat.jpg"

                    />
              <br/>
              <br/>
              <div>
                <h4>{data.name} {data.surname}</h4>
                <br/>
              </div>
              <div>
                <strong>Номер телефону:</strong> {data.phonenumber}
              </div>
              <br />
              <div>
                <strong>Email:</strong> {data.email}
              </div>
              <br />
              <div>
                <strong>Адреса:</strong> {data.address}
              </div>
              <br />
            </div>
            
                {/* <div className='header1'>
                    <h1 style={{}}>About Us</h1>
                </div>
                <div className="body1">
                    <img
                        className="image1"
                        src="https://www.bacinos.com/wp-content/uploads/2021/05/Can-Cats-Eat-Pizza-Which-Ingredient-Will-Hurt-Your-Cat.jpg"

                    />
                    <p>Інформація про піцерію у якій працюють лише коти!</p>
                </div>
                <div className='header2'>
                    <div><h3 className='leftheaders'>Контакти</h3>
                    <p>+380111111111</p>
                    </div>
                    <div><h3>Адреса:</h3>
                        <p>НЛТУ</p></div>
                </div> */}
            </div>
            ):( <div className="col user-profile " style={{}}><h3>Ви не авторизовані! </h3>
            <SignIn /> </div> )};
            <Footer/>
        </div>
    )
}

export default About