import { useState } from "react";
import './signup.css' ;
import './index.css' ;
import Login from "./Login";
import axios from 'axios' ;
import { Link, useNavigate } from "react-router-dom";


function Signup(){
    const [Name , setName] = useState() ;
    const[Email , setEmail] = useState() ;
    const[Age , setAge] = useState() ;
    const[Password,setPassword] =useState() ;
    const navigate = useNavigate() ;

    const handelSubmit = (e)=> {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {
    Name,
    Email,
    Age,
    Password})
      .then(result => console.log(result.data))
      .catch(err => console.log(err));
        navigate('/Login')
    }
    return(
        <>
     <form class="form-container" id="register-form" onSubmit={handelSubmit}>
      <h1> SignUp</h1>
    <div class="div-container">
      <label for="name">Name</label>
      <input class="input-box" id="name" type="text" placeholder="enter your name" onChange={(e)=> setName(e.target.value)} required/>
      <small class="error" id="name-error"></small>
    </div>

    <div class="div-container">
      <label for="email">Email</label>
      <input class="input-box" id="email" type="email" placeholder="enter your email" onChange={(e)=> setEmail(e.target.value)}required />
      <small class="error" id="email-error"></small>
    </div>

    <div class="div-container">
      <label for="age">Age</label>
      <input class="input-box" id="age" type="number" placeholder="enter your age" onChange={(e)=>setAge(e.target.value)} required />
      <small class="error" id="age-error"></small>
    </div>

    <div class="div-container">
      <label for="password">Password</label>
      <input class="input-box" id="password" type="password" placeholder="enter password" onChange={(e)=> setPassword(e.target.value)}required />
      <small class="error" id="password-error"></small>
    </div>

    <div class="div-container">
      <label for="confirm-password">Confirm Password</label>
      <input class="input-box" id="confirm-password" type="password" placeholder="confirm password" required />
      <small class="error" id="confirm-password-error"></small>
    </div>

    <button class="button" type="submit">Submit</button>
    <p class="success" id="success-msg"></p>

    <div class="has-account" >
      <p>Already have an account? <Link to="/Login"> Login  </Link></p>
    </div>
  </form>
        </>
    );
}
export default Signup ;