import React from 'react'
import { Data } from '../Data'
import MenuItems from './MenuItems'
import "../style/Menu.css"

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz:</h1>

      <div className='menuList'>{Data.map((menu,key)=> {
      return ( <MenuItems 
      key={key}
      image={menu.image}
      name={menu.name}
      content={menu.content}
      price={menu.price}

      />)})}
      </div>
    </div>
  )
}

export default Menu