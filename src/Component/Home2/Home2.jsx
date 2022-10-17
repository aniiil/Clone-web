import React from "react";
import "./one.css";
import ER from "../img/Erica.png";
import SC from "../img/Scott.png";
import OZ from "../img/one.png";
import SA from "../img/Sarah.png";
import DE from "../img/Devon.png";
import KK from "../img/Kaki.png";
import CA from "../img/Carvell.png";
import FO from "../img/Forge.png";
import GE from "../img/Gen.png";
import HA from "../img/Hal.png";
import EL from "../img/Ele.png";
import LE from "../img/Level.png";

const One = () => {
  return (
    <>
      <div className=" main">
        {/* <====Upper head=====> */}
        <div className="  upper-head ">
          <div className="head-d">
            <h2 className="heading ">A living network of curious minds.</h2>
          </div>
          <div className="pd-para">
            <p className="para">
              Anyone can write on Medium. Thought-leaders, journalists, experts,
              and individuals with unique perspectives share their thinking
              here. You’ll find pieces by independent writers from around the
              globe, stories we feature and leading authors, and smart takes on
              our own suite of blogs and publications.
            </p>
          </div>
        </div>
        {/* <=======Lower head======> */}

        <div className=" lower-head">
          <div className="left  ">
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={ER} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Erica Dhawan</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={SC} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Scott Galloway</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={OZ} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">One Zero</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={SA} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Sarah Cottrell</h4>
              </div>
            </a>
          </div>
          <div className="mid  ">
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={DE} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Devon Price</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={KK} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Kaki Okumura</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={CA} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Carvel Wallace</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={FO} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Forge </h4>
              </div>
            </a>
          </div>
          <div className="right  ">
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={GE} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">GEN</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={HA} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Hal H. Harris</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={EL} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Elemental</h4>
              </div>
            </a>
            <a className="row-menu" href="/">
              <div className="logo">
                <img src={LE} alt="" />
              </div>
              <div className="name">
                <h4 className="name-d">Level</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default One;
