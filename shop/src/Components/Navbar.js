import React from 'react'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import '../style/Navbar.css'
function Navbar() {

const navigate=useNavigate()

  return (
    <div className='navbar'>
        <div className='main'>
            <img className='logo' src={logo} onClick={()=>navigate("/")} style={{cursor:'pointer'}}/>
            <div className='mainLink'>
        <NavLink className="">
            <Link to="/">Anasayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/contact">İletişim</Link>
            <Link to="/about">Hakkımızda</Link>
        </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navbar