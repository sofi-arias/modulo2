import React from 'react';
import style from '../style/Card.module.css';

export default function Card(props) {
  // acá va tu código
  return <div className={style.card}>
  <button onClick={props.onClose} className={`${style.btn} ${style.btnColor}`} >X</button>
  <h4>{props.name}</h4>
  <div className={style.middleDiv}>
    <div className={style.temperature}>
    <p> MIN </p>
    <p> {props.min} </p>
    </div>
    <div className={style.temperature}>
    <p> MAX </p>
    <p>{props.max} </p>
    </div>
  </div>
  <img src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={`clima de la ciudad ${props.name}`}/>
</div>
};