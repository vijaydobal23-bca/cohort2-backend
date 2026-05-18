import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const{handleLogin ,loading} = useAuth();

    if(loading){
      return(
        <h1>Loading...</h1> 
      )
    }
    function handleSubmit(e){
      e.preventDefault();
      handleLogin(username , password).then((res)=>{
        console.log(res);
      })
    }
  return (
 
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter username"onInput={(e)=>{
              setUsername(e.target.value);
            }} />
            <input
              type="password"
              name="password"
              placeholder="Enter Password" onChange={(e)=>{
                setPassword(e.target.value);
              }}
            />

            <button type="submit">Login</button>
          </form>
          <p>Don't have a account ? <Link to='/register' className='toggleAuthForm'>register</Link></p>
        </div>
      </main>
  
  );
};

export default Login;
