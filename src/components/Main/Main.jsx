import React from 'react'
import data from '../../assests/data';
import './Main.css';

const Main = (props) => {
  const{id, title, img, desc}=props;
  return (
    <div className="main">
      <div className="container">
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Main