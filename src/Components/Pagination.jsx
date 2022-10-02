import React, { useEffect, useState } from 'react';

const Pagination = ({showPerPage , onPaginationChange, total}) =>{

    console.log(showPerPage);

    //state for counter
    const [counter,setCounter] = useState(1);

    //calculation is based upon button click
    //by clicking next button counter increemented
    //by clicking on previous button counter in decreemented

    //to detect when the counter changes we use useEffect Hook
    useEffect(()=>{
        const value = showPerPage * counter;
        console.log("start value :", value-showPerPage)
        console.log("end value :",value);
        onPaginationChange(value-showPerPage,value);
    },[counter])
    //above we have make logic that there should be gap of 4 items
    //start : 4-4=0
    //end : 4   so,page visible will be start-end 0-4


    //state for restricting black page when limit exceeds
    const onButtonClick = (type) =>{
        if(type==="prev")
        {
            if(counter === 1)
            {
                setCounter(1);
            }
            else
            {
                setCounter(counter-1)
            }
        }
        else if(type === "next")
        {
            if(Math.ceil(total/showPerPage)===counter)
            {
                setCounter(counter)
            }
            else
            {
                setCounter(counter+1);
            }
        }
    }

    return(
        
        <div className="d-flex justify-content-between">
        <button className="btn btn-dark" style={{width:"100px"}} onClick={()=> onButtonClick('prev')}>
            Previous
        </button>

        <button className="btn btn-dark" style={{width:"100px"}} onClick={()=> onButtonClick('next')}>
            Next
        </button>
        {console.log(counter)}
        </div>
        
    )
}

export default Pagination;