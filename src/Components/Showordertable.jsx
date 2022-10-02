import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Showordertable = (props) => {


  const [itemlist, setItemlist] = useState([]);

  const customer_id = props.customer_id.customer_id;
  console.log(props)



  useEffect(() => {
    console.log(customer_id)
    loadItem(customer_id);
  }, []);


  const loadItem = async () => {
    console.log("customer id inside load item")
    console.log(customer_id);
    const result = await Axios.get('http://localhost:3005/loadorder/' + customer_id)
    setItemlist(result.data.reverse());
    console.log(result.data)
  };


  //state to show how many post we want to show per page 
  const [showPerPage, setShowPerPage] = useState(5);


  //state for slice method end and start poing
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  })


  const onPaginationChange = (start, end) => {
    console.log(start, end);
    setPagination({ start: start, end: end })
  }



  return (
    <>




      <div className="container">
        <h2 className="text-dark text-center mt-5"><b>ORDER STATUS TABLE</b></h2>
        <hr />


        <div className="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Sales Id</th>
                <th scope="col">Status</th>
                <th scope="col">Sales Date</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                itemlist.slice(pagination.start, pagination.end).map((product) => (

                  <tr>


                    <td>{product.order_id}</td>
                    <td>{product.status}</td>
                    <td>{product.order_date}</td>

                    <td>
                      <Link className="btn btn-outline-success mr-2" to={`/updateorder/${product.order_id}`}>Update</Link>
                      <Link className="btn btn-outline-primary mr-2" to={`/vieworder/${product.order_id}`}>Reopen</Link>

                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


        <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={itemlist.length} />
      </div>



    </>
  )

}

export default Showordertable;