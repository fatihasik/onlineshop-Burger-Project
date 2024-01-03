import React from 'react'
import banner from '../assets/banner.png'
import "../style/Contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${banner})`}}></div>
      <div className='rightSide'>
          <h1>Bizimle İletişime Geçin:</h1>
          <form>
            <label>Ad Soyad</label>
            <input type='text' name="name" placeholder='Lütfen Ad ve Soyad giriniz'></input>
            <label>Email</label>
            <input type='email' name="email" placeholder='Lütfen Email giriniz'></input>
            <label>Mesajınız:</label>
            <textarea name='message' placeholder='Lütfen mesajınızı girin' rows="6"></textarea>
          </form>
      </div>
    </div>
  )
}

export default Contact