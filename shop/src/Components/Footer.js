import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../style/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='social-buttons'>
        <TwitterIcon className='buttons' />
        <InstagramIcon className='buttons'/>
        <FacebookIcon className='buttons'/>
        </div>
        <p style={{color:'white'}}>Tüm hakları saklıdır.| Burger Yiyelim</p>
    </div>
  )
}

export default Footer