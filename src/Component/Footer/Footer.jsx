import React from 'react'
import "./footer.css";
import { NavLink } from 'react-router-dom';

const Foot =()=>{
    return(
        <>
        <div className="footer">
            <div className="footer-logo">
                <h2 className="footer-dis ">Medium</h2>
            </div>

            <div className="foot d-flex">
                <NavLink to="#" className="foot-items">Term</NavLink>
                <NavLink to="#" className="foot-items">Privacy</NavLink>
                <NavLink to="#" className="foot-items">Help</NavLink>
            </div>
        </div>
        </>
    );
};
export default Foot;