import React from "react";
import logo from "./../img/logo.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href>
          <img
            src={logo}
            alt="Logo"
            width={50}
            height={54}
            className="d-inline-block align-text-top"
          />{" "}
          <span className="title">Shopmerse</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{ marginRight: "10%" }}>
            <li className="nav-item active">
              <a className="nav-link" href="signup.html">
                Wishlist
                <span className="sr-only" />
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Cart <span className="sr-only">(current)</span>
              </a>
            </li>
           
            
            
            <li className="nav-item active">
              <a className="nav-link" href="#Featured-products">
                Book Now <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
