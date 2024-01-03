import React from 'react'
import Background from '../assets/bg.jpg'
import "../style/Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (<div className='mainPage' style={{ 
    backgroundImage: `url(${Background})`, 
   
}}>        
    <div className='order'>
        <Link to="/menu">
        <button >Sipariş Ver</button>
        </Link>
    </div>
    </div>
  )
}

export default Home