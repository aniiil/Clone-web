import React from "react";
import "./two.css";
import JK from "../img/Jackie.png";
import OV from "../img/Pink.png";
import GV from "../img/Green.png";

const Two = () => {
  return (
    <>
      <div className="title-content">
        <div className=" left-title">
            <h2 className="title-text">
              Over 100 million readers and growing.
            </h2>
          </div>
          <div className="right-title">
            <div className="person-img">
            <img  className="quote-img" src={JK} alt="Jacie.img" />
            <img src={OV} className="pink" alt="#"/>
            <img src={GV} className="green" alt="#" />
            </div>
            <div className="quote">
            <div className="quote-text">
              "Medium is a great place to read and learn from a wide range of
              authors. It’s not muddied up by ads. It feels like one of the few
              pure places to go online."
            </div>

            <div className="quote-person">Jackie Colburn</div>
            </div>
          </div>
        
      </div>
    </>
  );
};
export default Two;
