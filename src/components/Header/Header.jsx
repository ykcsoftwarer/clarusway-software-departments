import React from 'react'
import "./Header.css";
import img from "../../img/clarusway.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={img} alt="" width="500px" />
    </div>
  )
}


export default Header