import React from 'react'
import "../style/Menu.css"
function MenuItems({image,content,price,name}) {
  return (
    <div className='menuItem'>
        <h2>{name}</h2>
        <div style={{backgroundImage: `url(${image})` }}></div>
        <h5>{content}</h5>
        <p style={{marginTop:-10, color:"red", fontSize:"20px"}}>{price}TL</p>
    </div>
  )
}

export default MenuItems