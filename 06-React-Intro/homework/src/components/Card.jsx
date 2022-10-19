import React from 'react';
import style from "./Card.module.css";

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return( 
  <div className={style.mainContainer}>
    <button onClick={onClose} className={style.boton}>X</button>
    <p>Max: {max}</p>
    <p>Min: {min}</p>
    <p>Name:{name}</p>
    <div className={style.imgContainer}>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
    </div>
  </div>
  )
};