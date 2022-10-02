import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Customernavbar from '../Customernavbar';

const Vieworder = () =>{

    const { order_id } = useParams();


      const [showlist,setshowlist] = useState([]);

    useEffect(() => { 
        console.log(order_id);
        loadUser(order_id);
    }, [])

    const loadUser =  (order_id) => {
        const url="http://localhost:3005/vieworder/"+order_id;
        console.log(url);
        
     axios.get(url).then((response)=>{
         
            setshowlist(response.data)
            console.log(response.data);
            
          });
            
            
        
        
    }


    return(
        <>
         <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
    <Customernavbar/>
         { <div className="container">
                
                <h1 className="display-4">Order ID : {order_id}</h1>
                <hr />
                {showlist.map((val,key) => (
                <ul className="list-group w-100 py-4">
                    <li className="list-group-item"><b>Item Name : </b>{val.item_name}</li>
                    <li className="list-group-item"><b>Item Quantity : </b>{val.quantity}</li>
                    <li className="list-group-item"><b>Location : </b>{val.location}</li>
                    <li className="list-group-item"><b>Status : </b>{val.status}</li>
                    <li className="list-group-item"><b>Order Description : </b>{val.description}</li>
                </ul>
                ))}
            </div> }

            
        </> 
    )
}

export default Vieworder; 