import React from 'react'
import "./EmailPage.css"

function EmailPage() {
  return (
    <div>
    <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: 'url(https://i.imgur.com/PP23Rk5.png)',
  backgroundColor: '#fff3dd',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  flexDirection: 'column',
}}>
      <div style={{ textAlign: 'center', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        <h2 style={{ color: '#ff9f1c' }}>Успішне підтвердження електронної скриньки!</h2>
        <p style={{ fontSize: '16px' }}>Дякуємо за підтвердження вашої електронної скриньки. Тепер ви можете користуватися сайтом без обмежень.</p>
      </div>
    </div>
      </div>
  )
}

export default EmailPage