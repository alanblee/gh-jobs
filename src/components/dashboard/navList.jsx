import React from "react";
import { NavLink } from "react-router-dom";

const NavList = ({ url }) => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/">
              <span className="icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="title">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="title">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${url}/search`}>
              <span className="icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <span className="title">Job Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="icon">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </span>
              <span className="title">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="toggle"></div>
    </>
  );
};

export default NavList;
