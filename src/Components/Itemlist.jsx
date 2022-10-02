import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Adminnavbar from '../Adminnavbar';

const Itemlist =()=>{

    const [itemlist,setItemlist] = useState([]);

    useEffect(()=>{
        loadItem();
    },[]);

    const loadItem = async () =>{
        const result = await Axios.get('http://localhost:3005/get')
        setItemlist(result.data.reverse());       //use reverse() to bring our data at first pos
    };

    const deleteItem = async (item_id)=>{
        await Axios.delete(`http://localhost:3005/delete/${item_id}`).then((response)=>{
            setItemlist(itemlist.filter((val)=>{
                console.log(item_id);
              return val.item_id !== item_id
            }))
          })
        loadItem();
    }

    return(
        <>
        <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
    <Adminnavbar/>
    
        <h2 style={{textAlign:"center",fontWeight:"bold",marginTop:"25px"}}><b>Items List</b></h2>
        <hr/>
        <div className="container">
            <div className="py-4">
            <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Item Id</th>
      <th scope="col">Item Name</th>
      {/* <th scope="col">Item Unit Price</th>
       */}
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        itemlist.map((product)=>( 
            
            <tr>
            
            
            <td>{product.item_id}</td>
            <td>{product.item_name}</td>
            {/* <td>{product.item_uprice}</td>
             */}
            <td>
              <Link className="btn btn-outline-danger " onClick={
                ()=> deleteItem(product.item_id)
              }>Delete</Link>
            </td>
            </tr>
        ))
    }
  </tbody>
</table>
            </div>
        </div>

        </>
    )
}

export default Itemlist;