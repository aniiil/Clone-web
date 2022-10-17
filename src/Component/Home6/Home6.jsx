import React from "react";
import "./five.css";
import AS from "../img/AppleStore.png";
import PS from "../img/PlayStore.png";
import MP from "../img/mobile.png";

const Five = () => {
  return (
    <>
      <div className="mid-header">
        <div className=" mid-header-left">
          <div className="mid-left-text">
            <h2 className="mid-h2">Take Medium with you. </h2>
          </div>
          <div className="mid-header-dis">
            <p className="mid-header-para">
              Download our app so you can read wherever you are.
            </p>
          </div>
          <div className="mid-header-img">
            <img className="img-header1" src={AS} alt="applrstore.img" />

            <img className="img-header1" src={PS} alt="playstore.img" />
          </div>
        </div>
        <div className="mid-header-right d-flex">
          <img className="img-right" src={MP} alt="mobile.img" />
        </div>
      </div>
    </>
  );
};
export default Five;
