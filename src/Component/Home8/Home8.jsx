import React from "react";
import "./seven.css";
import { NavLink } from "react-router-dom";

const Seven = () => {
  return( <>
  <div className="last-div">
    <div className="cube">
    <iframe
              title="gif"
              src="https://player.vimeo.com/video/467834328?api=1&background=1&mute=1&loop=1"
              frameBorder="0"
              positioning="relative"
              width="100%"
              height="100%"
              allow="autoplay"
            ></iframe>
    </div>
    <div className="cube-dis">
        <div className="upper-dis">
            <h2 className="cube-text">
            Read, write, and expand your world.
            </h2>
        </div>
        <NavLink className="btn-cube-flex" to="#"> <div className="btn-cube">Get Started</div></NavLink>
    </div>
  </div>
  </>
  );
};

export default Seven;
