
import React from "react"

import Adminhomepage from './Adminhomepage';
import Adminnavbar from '../Adminnavbar';

const Admin = ()=>{
    
    return(
        
        <>
        <style type="text/css">
      {`.mainnav {display: none}`}
    </style>
        <Adminnavbar/>
        <Adminhomepage/>
        
        </>
    )

}

export default Admin;