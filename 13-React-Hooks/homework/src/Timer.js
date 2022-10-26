import React, { useEffect, useState, useRef } from 'react';
import "./Timer.css";

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState("Contador");
  const myRef = useRef(null);

  const toggle = () => {
    setActivo(!activo);
  };

  const cambioTipo = () => {
    //setTipo(tipo === "Contador" ? "Cuenta regresiva" : "Contador");
    if (tipo === "Contador") setTipo("Cuenta regresiva");
    else setTipo("Contador");
  };

  const reset = () => {
    setSegundos(0);
    setActivo(false);
  };

  const agregaSegundos = () => {
    setSegundos(myRef.current.value);
  };


  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if(activo && tipo === "Cuenta regresiva"){
      intervalo=setInterval(()=>{
        segundos > 0 && setSegundos((segundos)=> segundos - 1);
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);


  return (
    <div className="app">
      <div className="time">{segundos}</div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>{tipo}</button>
      {tipo === "Cuenta regresiva" && (
        <input 
          onChange={agregaSegundos} 
          type="number" 
          placeholder="Ingresa Segundos" 
          autoComplete="off"
          ref={myRef}
        />
      )}
      
    </div>
  );
};

export default Timer;
