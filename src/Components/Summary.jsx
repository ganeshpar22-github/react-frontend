import Adminnavbar from "../Adminnavbar";
import react, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

const Summary = ()=>{

const { order_id } = useParams();



useEffect(() => {
    console.log(order_id)
    loadUser(order_id);
}, [])

const loadUser = (order_id) => {
    const url = "http://localhost:3005/adminhome/ordersummary/" + order_id;
    console.log(url)
    axios.get(url).
        then((response) => {
            console.log(response.data);
            setOrderlist(response.data);
        })


}

const [orderlist, setOrderlist] = useState([]);



    return(
        <>
        <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
        <Adminnavbar/>
        <div className="container">
        <Link className="btn btn-dark" to="/adminhome">DashBoard</Link>



        <div>
                    <h4 className="display-4">Order Id : {order_id}</h4>
                    <hr />

                    {orderlist.map((val) => (
                         
                        <ul className="list-group list-group-flush w-75 py-4">
                            <li className="list-group-item "><b>Item Name :  </b>{val.item_name}</li>
                            <li className="list-group-item"><b>Customer Location :  </b>{val.location}</li>
                            <li className="list-group-item"><b>Item Quantity :  </b>{val.quantity}</li>
                            <li className="list-group-item"><b>Item Desscription :  </b>{val.description}</li>
                            <li className="list-group-item"><b>Updated Order Status :  </b>{val.updated_status}</li>
                            <li className="list-group-item"><b>Discount :  </b>{val.discount}%</li>
                            
                            <li className="list-group-item"><b>Entered Total Price of Items : </b>{val.total_price}</li>
                            
                            <li className="list-group-item"><b>Expected Total Price of Items : </b>{val.quantity*((val.unit_price)*(100-val.discount)/100)}</li>

                            


                        </ul>
                        
                    ))}
                </div>





        </div>





        </>
    )
}

export default Summary;