import React,{ useState }  from 'react';
import "./Loginstyle.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import img from "./admin1.jpg";



const Adminlog = ()=>{



  let history = useHistory();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

   const [loginStatus, setLoginStatus] = useState("");


const onSubmit= (e) =>{
  e.preventDefault()
  axios.post("http://localhost:3005/admin",{
            
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
                
                history.push("/adminhome");
              
              }
        });
        
}





    return(
        <>
         <h2 className="h1class"><b>Admin Login</b></h2>
         <hr/>
       <form onSubmit={(event)=>{onSubmit(event)}}>
       <div className="div1">
         <div class="container">
         <div style={{float:"left", width:"60%"}}>
           <label for="uname"><b>Username</b></label>
           <input type="text" placeholder="Enter Username"  required
             name="username" value={username} onChange={(e)=>{
     setUsername(e.target.value)
 }}
           />
       
           <label for="psw"><b>Password</b></label>
           <input type="password" placeholder="Enter Password"  required
             name="password" value={password} onChange={(e)=>{
     setPassword(e.target.value)
 }}
           />
           <br/>
           <div style={{float:"left"}}>
    <a href="">Forgot Password</a>
    </div>
            <br/><br/>
           <button className="btn btn-info" type="submit"><b>Login</b></button>
           <br/> <br/>
    <button className="btn btn-danger" type="reset"><b>Cancel</b></button>
           
           </div>
         </div>
       <div style={{float:"right",width:"40%"}}>
       <img src= {img} alt="pic3" className="float-right"  style={{marginTop:"10px",marginRight:"110px"}} width="300px" height="300px"/>  
       </div>
       
         </div>
         </form> 
         <h2 style={{textAlign:"center",marginTop:"350px",color:"red"}}>{loginStatus}</h2>
        </>
    )
}

export default Adminlog;