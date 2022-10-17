import React from "react";
import "./four.css";
import N1 from "../img/num1.svg";
import N2 from "../img/num2.svg";

const Four = () => {
  return (
    <>
      <div className="num-content">
        <div className=" left-text-title">
          <div className="left-text-div">
            <h2 className="up-text">Read as much as you want.</h2>
          </div>
          <div className="num-img">
            <img src={N1} alt="" />
          </div>
          <div className="down-text">
            Enjoy unlimited access to every story across all of your devices.
          </div>
        </div>
        <div className="right-text-title">
          <div className="right-text-div">
            <h2 className="up-text">Reward quality content.</h2>
          </div>
          <div className="num2-img">
            <img className="" src={N2} alt="" />
          </div>
          <div className="down-text">
            Your membership helps us pay writers, and keeps your experience ad-free.
          </div>
        </div>
      </div>
    </>
  );
};
export default Four;
