import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    
    <>
      <nav className="navbar">
      <Link to="/" className="brand-link text-primary ">NOVA PHARMACY</Link>
        <div className="navbar-actions">
          <Link to="/signin"><button className="login-button">Sign In</button></Link>
          <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
          <Link to="/addproducts"><button className="addproducts-button">Add Product</button></Link>

        </div>
        
      </nav>


      
    </>
  );
};

export default Navbar;
