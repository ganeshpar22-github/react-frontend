import Axios from "axios";
import React, { useState,useEffect } from "react";
import {useHistory,useParams} from "react-router-dom";
import Customernavbar from "../Customernavbar";
import img from "./cart1.png";



const Placeorder = ()=>{
    
    let history = useHistory();

    const { customer_id } = useParams();

const [item_name,setName] = useState("");
const [quantity,setQuantity] = useState();
const [location,setLocation] = useState("");
const [description,setDescription] = useState("");
const [status,setStatus] = useState("");
const [order_date,setOrderDate] = useState();


const [itemlist,setItemlist] = useState([]);


//for dropdown where data coming from database
useEffect(()=>{
  loadItem();
},[]);

const loadItem = async () =>{
  const result = await Axios.get('http://localhost:3005/getdropdown')
  setItemlist(result.data.reverse());       //use reverse() to bring our data at first pos
};



const onSubmit= (e)=>{
  e.preventDefault()  
    Axios.post('http://localhost:3005/addorder',{
       item_name : item_name,
       quantity : quantity,
       location : location,              //we are sending this obj to backend
       description : description,
       status : status,
       order_date : order_date,
       customer_id:customer_id
     }).then(()=>{
       console.log("successful send to backend");
     });
     console.log("customer id "+customer_id)
   history.push(`/customerhome/${customer_id}`);      //redirect to home page

}



  
   


    return(
        <>
        
        <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
        <Customernavbar customer_id={customer_id}/>
        
        <h2 className="text-dark text-center mt-5"><b>Place New Order</b></h2>
        <hr/>
        <div className="container" >
        <div  style={{width:"50%",float:"left"}}>
        <form onSubmit={(event)=>{onSubmit(event)}} style={{marginBottom:"25px"}}>
        
    
    <div className="form-group">
    <label htmlFor="item name">Select Item</label>
    <select className="form-control" id="exampleFormControlSelect1"
    name="item_name" value={item_name} onChange={(e)=>{
     setName(e.target.value)
 }}>
 <option value="" disabled defaultValue>Choose Item from the options</option>
 {
  itemlist.map((product)=>(
   <option> {product.item_name}</option>
   
   ))}

    </select>
  </div>
<br/>
  <div className="form-group">
    <label>Quantity</label>
    <input type="number" min="1" className="form-control" required id="exampleFormControlInput1" placeholder="enter quantity"
      name="quantity" value={quantity} onChange={(e)=>{
     setQuantity(e.target.value)
 }}
    />
  </div>
<br/>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select Location</label>
    <select className="form-control" id="exampleFormControlSelect1"
    name="location" value={location} onChange={(e)=>{
     setLocation(e.target.value)
 }}>
      <option value="" disabled defaultValue>Choose Location</option>
      <option>Dewas</option>
      <option>Indore</option>
      <option>Bhopal</option>
      <option>Ujjain</option>
      <option>Jabalpur</option>
      <option>Pune</option>
      <option>Delhi</option>
      <option>Mumbai</option>
      <option>Chennai</option>
    </select>
  </div>
  
  <br/>
  <label>Status</label>
  <input class="form-control" id="disabledInput" type="text" placeholder="Maintained by Approver" disabled
    name="status" value={status} onChange={(e)=>{
     setStatus(e.target.value)
 }}
  />
<br/>
<div className="form-group">
    <label>Order Date</label>
    <input type="date" min="1" className="form-control" required id="exampleFormControlInput1" placeholder="Date of Order"
      name="order_date" value={order_date} onChange={(e)=>{
     setOrderDate(e.target.value)
 }}
    />
  </div>

  <br/>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Item Description</label>
    <textarea className="form-control" required id="exampleFormControlTextarea1" rows="3"
    name="description" value={description} onChange={(e)=>{
     setDescription(e.target.value)
 }}></textarea>
    
  </div>
 

<br/>
<button className="btn btn-danger">Place Order</button>
<br/><br/>
</form>
  </div>

  <div style={{float:"right", width:"50%",marginTop:"55px"}}>
        <img src= {img} alt="pic3" className="float-right" style={{marginRight:"75px"}} width="300px" height="300px"/>
        </div>
        
</div>


        </>
    )
}

export default Placeorder;