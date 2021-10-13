import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header =()=>  {
  const cartData = useSelector(state => state.productsData.cartData);
  console.log(cartData);
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.achieversit.com/assets/images/AIT-white.jpg"
              alt="Ait Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/courses">
                  Courses <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              {/* CartPage */}
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart <i class="bi bi-cart"></i> 
                 <sup>  {cartData?.length} </sup>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }


export default Header;
