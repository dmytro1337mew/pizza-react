import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='about'>
            <div className='about1'>
                <div className='header1'>
                    <h1>About Us</h1>
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
                </div>
            </div>
        </div>
    )
}

export default About