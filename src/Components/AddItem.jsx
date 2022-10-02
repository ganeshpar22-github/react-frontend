import Axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Adminnavbar from "../Adminnavbar";
import img from "./cart1.png";

const AddItem = ()=>{

    let history = useHistory(); 

    const [itemname,setItemname] = useState("");
    const [itemprice,setItemprice] = useState(0);


    const onSubmit= (e)=>{
      e.preventDefault()
          Axios.post('http://localhost:3005/additems',{
           itemname : itemname,
           itemprice : itemprice,
           
         }).then(()=>{
           console.log("successful send to backend");
         });
       history.push("/itemlist");      
   
   }

    return(
      
        <>
        <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
    <Adminnavbar/>
    
         <h2 className="text-dark text-center mt-3">Place New Item</h2>
         <hr/>
         <div className="container">
        <div style={{width:"60%",float:"left",marginTop:"55px"}}>
        <form onSubmit={(event)=>{onSubmit(event)}}>

        <div className="form-group">
    <label><b>Item Name</b></label>
    <input type="text" className="form-control" required id="exampleFormControlInput1" placeholder="Name of the Item"
      name="itemname" value={itemname} onChange={(e)=>{
     setItemname(e.target.value)
 }}
    />
  </div>

  <div className="form-group">
    <label><b>Item Price</b></label>
    <input type="number" min="100" className="form-control" required id="exampleFormControlInput1" placeholder="Unit Price of Item"
      name="itemprice" value={itemprice} onChange={(e)=>{
     setItemprice(e.target.value)
 }}
    />
  </div>

  <br/>
<button className="btn btn-dark btn-block"><b>Add item</b></button>

        </form>
        </div>
        <div style={{float:"right", width:"40%",marginTop:"55px"}}>
        <img src= {img} alt="pic3" className="float-right"  style={{marginRight:"25px"}} width="300px" height="300px"/>
        </div>
        </div>
        </>
    )
}

export default AddItem;