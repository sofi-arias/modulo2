import React from 'react';
import Card from './Card';
import styles from "./Cards.module.css";


export default function Cards(props) {

  return ( 
  <div className={styles.container}>
    {props.cities.map(
      city=><Card
      max={city.main.temp_max}
      min={city.main.temp_min}
      name={city.name}
      img={city.weather[0].icon}
      onClose={()=>alert(city.name)}
      key={city.id}
      />
    )}
  </div>
  )
};