import React from 'react';
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={style.container} >
    <input type="text" name="search" id="search" placeholder="Busca tu ciudad..." />
    <button className={style.btn}  onClick={props.onSearch} >Buscar</button>
  </div>
  )
};