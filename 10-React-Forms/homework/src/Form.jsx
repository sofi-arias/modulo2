import React from 'react';

export function validate(input){
  let error ={};
  if(!input.username){
    error.username = 'Username is required';
  }else if(!/\S+@\S+\.\S+/.test(input.username)){
    error.username = 'Username is invalid';
  }
  if(!input.password){
    error.password = 'Password is required';
  }else if(!/(?=.*[0-9])/.test(input.password)){
    error.password = 'Password is invalid';
  }
  return error;

}

export default function  Form() {

  let [input, setInput] = React.useState({
    username: '',
    password: ''
  });

  let[error, setError] = React.useState({});

  let handleInputChange = (e) => {
    //[e.target.name] ->manipular dos input distintos con la misma funcion
    setInput(prev => ({
      ...prev,
      [e.target.name] : e.target.value,
    }));
    let objError = validate({...input, [e.target.name]:e.target.value})
    setError(objError);
  
  };


  return (
      <form>
        <div>
          <label>Username:</label>
          <input type={"text"} value={input.username} onChange={handleInputChange} name={'username'} className={error.username && 'danger'} />
          {
            error.username && (<p>{error.username}</p>)
          }
        </div>
        <div>
          <label>Password:</label>
          <input type={"password"} value={input.password} onChange={handleInputChange} name={'password'} className={error.password && 'danger'} />
          {
            error.password && (<p>{error.password}</p>) 
          }
        </div>
        <input type={'submit'} value={'Ingresar'}/>
      </form>
  )
}
