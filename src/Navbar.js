import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info mainnav">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>Point Of Sales</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" exact to="/"><b>Home</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/login"><b>Customer Login</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/cregistration"><b>Customer Registration</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/adminlog"><b>Admin Login</b></NavLink>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>
                
            </div>
        </nav>

    );
}


export default Navbar;