import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footerleft">
        <div><img className="paymentimage" style={{ width: 100, height: 35, marginBottom: "10px", marginLeft:"5px"}} src="https://d2z9uwnt8eubh7.cloudfront.net/media/default/0001/10/be6ea8ea5161dc9be3fa9eb4b2fa1fdea222cebc.png" /></div>
        <div><img style={{width: 100, height: 30, marginBottom:"10px"}} src="https://yurincom.com/wp-content/uploads/2018/11/visa-logo-png-2026.png" /></div>
        <div><img style={{width: 100, height: 30}} src="https://monobankinfo.com.ua/wp-content/uploads/logo.png" /></div>
      </div>
      <div className='leftmid'>
        <h5>До кожного замовлення корм улюбленцю</h5>
      </div>
      <div className="footerMid">
      <img style={{ width: 200, height: 100, }} src="https://i.imgur.com/VOuzNuI.png"/>
      </div>
      <div style={{ width:210 }}className='rightmid'>
        <h5>Зробити замовлення:</h5>
        <h5 className='probil'>s</h5>
        <h5>+380991122333</h5>
      </div>
      <div className='footerRight'>
        <h5 className='socialmedia'>Ми в соц. мережах:</h5>
        <div className='socialmediaimage'>
        <a href="https://www.instagram.com" target="_blank">
          <img style={{ width: 30, height: 30, }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" />
          </a>
          <a href="https://www.telegram.org" target="_blank">
          <img style={{ width: 30, height: 30, marginLeft: 10 }} src="https://cdn-icons-png.flaticon.com/512/906/906377.png" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
          <img style={{ width: 30, height: 30, marginLeft: 10 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
</a>        
        </div>
      </div>
    </div>
  )
}

export default Footer