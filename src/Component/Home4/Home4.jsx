import React from "react";
import "./three.css";
import { NavLink } from "react-router-dom";

const Three = () => {
  return (
    <>
      <div className="dual-div">
        {/* <=====Dual upper div=====> */}
        <div className=" main-div">
          <div className="  upper-head ">
            <div className="head-d">
              <h2 className="heading ">
                Create the space for your thinking to take off.
              </h2>
            </div>
            <div className="pd-para">
              <p className="para">
                A blank page is also a door. At Medium you can walk through it.
                It's easy and free to share your thinking on any topic, connect
                with an audience, express yourself with a range of publishing
                tools, and even earn money for your work.
              </p>
              </div>
            <div className="btn">
                <NavLink className="btn-text" to="#">
                  Write on Medium
                </NavLink>
              </div>
          </div>
        </div>
        {/* <=====Dual lower div=====> */}
        <div className=" main-lower-div">
          <div className="  upper-head ">
            <div className="head-d">
              <h2 className="heading ">
              Get more with membership.
              </h2>
            </div>
            <div className="pd-para">
              <p className="para">
             Become a Medium member to enjoy unlimited access and directly support the writers you read most.
              </p>
            </div>
            <div className="btn2">
                <NavLink className="btn2-text" to="#">
              See membership options
                </NavLink>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Three;
