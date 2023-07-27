import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/gymlogo.jpg';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className=" col-10 mx-auto bg-black !important">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className=" navbar_logo navbar-brand" to="/"><img src={logo} alt="Logo" height="70px" width="190px" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar_collapse_content navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;