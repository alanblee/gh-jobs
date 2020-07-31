import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fa fa-home" aria-hidden="true"></i>
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
            <span className="title">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <span className="title">Job Search</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </span>
            <span className="title">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
