import React from "react";
import { useParams } from "react-router-dom";
import Customernavbar from "../Customernavbar";
import Showordertable from "./Showordertable";

const Customer = () =>{
    const customer_id=useParams();
    console.log(customer_id);
    return(
        <>
         <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
        <Customernavbar customer_id={customer_id}/>
    
        <Showordertable customer_id={customer_id} />
        
        </>
    )
}

export default Customer