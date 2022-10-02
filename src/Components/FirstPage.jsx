import React from "react";
import img from "./pos.jpg";

const FirstPage = ()=>{
    return(
        <>
        <div>
        <h1 style={{textAlign : "center" , marginTop: "25px"}}><b>POINT OF SALES</b></h1>
        <hr/>
        <div className="container mt-5" >
            <p style={{fontSize:"20px",justifyContent:"center"}}>

            Point of Sales (POS) is a platform where Customer and Distributer/Retailer can interact with each other. Transaction is performed between a Distributer and customer when a product or service is purchased, by commonly using Point of Sales system to complete the transaction.  Apart from Transaction, POS also provide sales, inventory and customer management. That’s why most of the Business units start using POS instead using Traditional Methods like Manual methods, cash registers, Excel for book-keeping.

            </p>
            <center>
            <img src= {img} alt="pic" width="auto" height="200px"/>
            </center>
        </div>
        </div>
        </>
    )
}

export default FirstPage;