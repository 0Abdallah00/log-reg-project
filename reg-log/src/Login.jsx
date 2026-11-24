import  React from "react";
import { useState } from "react";
import './signup.css' ;
import './index.css' ;
import Signup from "./signup";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";


function Login(){
    const[Email , getEmail] =useState() ;
    const[Password , getPassword] = useState() ;
    const navigate = useNavigate() ;
    const handeLogin = (e)=>{
        e.preventDefault() ;
        axios.post('http://localhost:3001/login' ,{
            Email ,Password
        })
        .then(
            (result)=>{

                console.log(result.data) ;
                if(result.data === "sucsees"){
                    navigate('/profile') ;
                }
            }
        ).catch(err => console.log(err)) 

    }


return (
    <>
     <form className="form-container" onSubmit={handeLogin}>
        <h1> Login </h1>
        <div className="div-container" >
            <label for ="LEmail"> Email </label>
            <input className="input-box" id="LEmail" placeholder="Enter Email" type="email"  onChange={(e)=> getEmail(e.target.value)} ></input>
        </div>
        <div className="div-container" >
            <label for ="Lpassword" > pasword</label>
            <input className="input-box" id="Lpassword" placeholder="Enter password" type="password" onChange={(e)=> getPassword(e.target.value)}   />
        </div>
        <button className="button" type="submit"  >Login</button>
        <div class="has-account" >
            <p> Create Account <Link to='/register'>SignUp</Link> </p>
        </div>
    </form>
    </>
) ;
}
export default Login ;