import React from "react";
import "./nav.css";
import Logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="nav-container d-flex">
        <div className="main-nav ">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>

        <div className="sub-nav ">
          <NavLink className="nav-menu " to="/">
            Our story
          </NavLink>
          <NavLink className="nav-menu " to="/">
            Membership
          </NavLink>
          <NavLink className="nav-menu " to="/">
            Write
          </NavLink>
          <NavLink className="nav-menu " to="/">
            Sign in
          </NavLink>

          <NavLink className=" nav-menu  button-text mx-3" to="#">Get Started</NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
