import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from './Pagination';



const Adminhomepage = ()=>{

    const [customerlist,setCustomerlist] = useState([]);

    useEffect(()=>{
        loadCustomer();
    },[]);

    const loadCustomer = async () =>{
        const result = await Axios.get('http://localhost:3005/getcustomer')
        setCustomerlist(result.data.reverse());       //used reverse() to bring our data at first pos
    };

    const deleteItem = async (order_id)=>{
        await Axios.delete(`http://localhost:3005/deleteorder/${order_id}`).then((response)=>{
            setCustomerlist(customerlist.filter((val)=>{
                console.log(order_id);
              return val.order_id !== order_id
            }))
          })
        loadCustomer();
    }


  //state to show how many post we want to show per page 
  const [showPerPage, setShowPerPage] = useState(10);


  //state for slice method end and start poing
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })


  const onPaginationChange = (start, end) => {
    console.log(start, end);
    setPagination({ start: start, end: end })
  }

    
  const st = "in progress";


  const [search,setSearch] = useState('');
  

    return(
        <>
        
        
        <h2 style={{textAlign:"center",fontWeight:"bold", marginTop:"25px"}}><b>Order list</b></h2>
        <hr/>
        <div className="container">

        <input type="text" placeholder="Search By Customer Name..." onChange={e =>{
            setSearch(e.target.value);
        }}/>


            <div className="py-4">
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Item ID</th>
      
      
      
      <th style={{paddingLeft:"100px"}}>Action</th>
      <th>Status</th>
      
    </tr>
  </thead>
  <tbody>
    {
        customerlist.filter((val)=>{
          if(search === "")
          {
            return val;
          }
          else if(val.customer_name.toLowerCase().includes(search.toLowerCase()))
          {
            return val;
          }
        })
        .slice(pagination.start, pagination.end).map((product)=>( 
            

            
            <tr>
          
            
            <td>{product.order_id}</td>
            <td>{product.customer_name}</td>
            <td>{product.item_id}</td>
            
            
            <td>
            <Link className="btn btn-outline-primary mr-2" to={`/adminhome/vieworderbyadmin/${product.order_id}`}>View</Link>
            <Link className="btn btn-outline-success mr-2" to={`/adminhome/summary/${product.order_id}`}>Summary</Link>
              <Link className="btn btn-outline-danger " onClick={
                ()=> deleteItem(product.order_id)
              }>Delete</Link>
            </td>

              {st && <td style={{backgroundColor:"greenyellow"}}>{product.status}</td>}
              {!st && (<td style={{backgroundColor:"green"}}>{product.status}</td>)}
            
            {/* {(()=>{
              if(st === "in progress"){
            <td id="statusid" style={{paddingRight:"50px" , backgroundColor:"green"}}>{document.getElementById("statusid").style.color="red"}<b>{product.status}</b></td>
              console.log(st)
              }
              else
              {
            <td id="statusid" style={{paddingRight:"50px" , backgroundColor:"red"}}><b>{product.status}</b></td>
            }
            })} */}
            
            </tr>
        ))
    }
  </tbody>
</table>
 
            </div>
            <Pagination
              showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={customerlist.length} 
            />          
        </div>


        </>
    )
}

export default Adminhomepage;