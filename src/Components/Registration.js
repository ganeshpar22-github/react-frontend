import React,{useState} from "react";
import './Loginstyle.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import img from "./images.png";







const Registration = () => {

    let history = useHistory();

    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const onSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3005/register",{
            name : name,
            username : username,
            password : password
            
        }).then((response)=>{
            if(response.data.message){
                console.log(response.data.message)
            }
            else{
                console.log(response)
                history.push("/")
            }
            
        })
    }

    return (
        <>
            <h2 className="h1class"><b>Customer Registration</b></h2>
            <hr/>
            <form onSubmit={(event)=>{onSubmit(event)}}>
            <div className="div1">
                <div className="container">
                <div style={{float:"left", width:"60%"}}>
                    <label htmlFor="uname"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required 
                        onChange={(e)=>{
     setName(e.target.value)
 }}
                    />

                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required
                    onChange={(e)=>{
     setUsername(e.target.value)
 }} />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required 
                        onChange={(e)=>{
     setPassword(e.target.value)
 }}
                    />
                    
                    <div style={{float:"left",marginTop:"10px"}}>
    <Link to="/login">Login</Link>
    </div>
                    <br /><br />
                    <button className="btn btn-info" type="submit"><b>Register</b></button>
                    <br/><br/>
                    <button className="btn btn-danger" type="reset"><b>Cancel</b></button>
                    
</div>

    <div style={{float:"right", width:"40%"}}>
    <img src= {img} alt="pic3" className="float-right"  style={{marginTop:"40px",marginRight:"20px"}} width="300px" height="300px"/>
    </div>
                </div>

                
            </div>
            </form>
        </>

    )
}

export default Registration;