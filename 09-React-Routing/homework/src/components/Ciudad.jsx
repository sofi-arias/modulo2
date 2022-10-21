import React from "react";

class Ciudad extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
              <h3>{this.props.ciudad.name}</h3>
              <p>Temp:{this.props.ciudad.temp}</p>
              <p>Max:{this.props.ciudad.max}</p>
              <p>Min:{this.props.ciudad.min}</p>
              <p>Weather:{this.props.ciudad.weather}</p>
              <p>Wind:{this.props.ciudad.wind}</p>
              <img src={`http://openweathermap.org/img/wn/${this.props.ciudad.img}@2x.png`} alt="" /> 
            </>
        )
        
    }
}

export default Ciudad;