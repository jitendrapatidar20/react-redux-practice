import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Thunk
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link to="/" className="nav-link">
            Home
          </Link></li>
          <li className="nav-item"><Link to="/addPost" className="nav-link">
            Add Posts
          </Link></li>
          {/* <li className="nav-item"><Link to="/reactThunk" className="nav-link">
          React Thunk
          </Link></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
