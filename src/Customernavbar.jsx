import React from 'react';
import {Link, NavLink} from 'react-router-dom';



const Customernavbar =( props) => {
    const customer_id = props.customer_id.customer_id;
    console.log("-->"+customer_id)
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger adminnav">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Point Of Sales</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" exact to="/customerhome">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login">Logout</NavLink>
                            </li>
                            
                            
                            
                        </ul>

                    </div>
                </div>
                <Link className="btn btn-light" to={`/placeorder/${customer_id}`}>➕Order</Link>
            </div>
        </nav>

    );
}

Customernavbar.defaultProps = {
    customer_id:0
}
export default Customernavbar;