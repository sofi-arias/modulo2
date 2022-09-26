import React from 'react';
import Card from './Card';
import style from '../style/Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.container}>
    {cities.map(city=>(
      <Card
      key = {city.id}
      name = {city.name}
      max = {city.main.temp_max}
      min = {city.main.temp_min}
      img = {city.weather[0].icon}
      onClose = {()=> alert(city.name)}
      />
    ))}
  </div>

};