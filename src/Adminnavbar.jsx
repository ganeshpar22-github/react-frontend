import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Adminnavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark adminnav">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Point Of Sales</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" exact to="/adminhome">Home</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/itemlist">Items List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/adminlog">Logout</NavLink>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>
                <Link className="btn btn-light" to="/additem">➕Items</Link>
            </div>
        </nav>

    );
}


export default Adminnavbar;