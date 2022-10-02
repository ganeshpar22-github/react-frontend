import React,{useState} from "react";
import './Loginstyle.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import img from "./logo.png";
//import Footer from "./Footer";


const Login = ()=>{


  let history = useHistory();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

   const [loginStatus, setLoginStatus] = useState("");

   


   const onSubmit= (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3005/login",{
              
              username : username, 
              password : password
              
          }).then((response)=>{
            if(response.data.message!=="User doesn't exist")
            console.log("successfully logged in")
  
              if(response.data.message){
                  console.log(response.data.message)
                   setLoginStatus(response.data.message);
                  
              }
              else{
                  console.log(response);
                  console.log(response.data[0].customer_id)
                  history.push("/customerhome/"+response.data[0].customer_id);
                
                }
          });
          
  }
 


    return(
        <>
        <h2 className="h1class "><b>Customer Login</b></h2>
        <hr/>
        <form onSubmit={(event)=>{onSubmit(event)}}>
<div className="div1">
  <div className="container">
  <div style={{float:"left" , width:"60%"}}>
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required
      onChange={(e)=>{
     setUsername(e.target.value)
 }}
          
    />

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required
      onChange={(e)=>{
     setPassword(e.target.value)
 }}
        
    />
    <br/>
    <div style={{float:"left"}}>
    <a href="">Forgot Password</a>
    </div>
    <div style={{float:"right"}}>
    <Link to="/cregistration">New Customer</Link>
    </div>
<br/><br/>
    <button className="btn btn-info" type="submit"><b>Login</b></button>
    <br/> <br/>
    <button className="btn btn-danger" type="reset"><b>Cancel</b></button>
    </div>
    <div style={{float:"right", width:"40%"}}>
    <img src= {img} alt="pic2" className="float-right" style={{marginLeft:"35px"}}   width="350px" height="350px"/>
</div>  
  </div>

  
  </div>
  </form>
  <div style={{marginTop:"350px"}}>
  <h2 style={{textAlign:"center",marginTop:"25px", color:"red"}}>{loginStatus}</h2>
  </div> 
  
  </>
    )
}

export default Login;