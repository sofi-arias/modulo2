import React from 'react';
import style from '../style/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.container}>
    <input type="text" name="" id="" placeholder='Ciudad...' />

    <button onClick={()=> props.onSearch("Buscando Ciudad")} className={style.btn}>Agregar</button>
  </div>
};