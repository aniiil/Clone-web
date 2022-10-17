import React from "react";
import "./six.css";
import { NavLink } from "react-router-dom";

const Six = () => {
  return (
    <>
      <div className="flex-of-three">
        <div className="first-flex">
          <div>
            <h2 className="head-first-flex">Learn more about us.
              Or join us.</h2>
          </div>
        </div>

        <div className="second-flex">
          <div className="nested1-flex">
            <div className="text-nested-flex">
                 <h2 className="nested-head1">The Medium blog
                 </h2>
              <div className="dis-text-nested">
              <p className="dis-text-para"> Visit our company blog for the latest news, product updates, and
                tips and tricks.</p> 
              </div>
            </div>
           
              <NavLink className="btn-text-flex" to="#"> <div className="btn-nested">Read our blog</div></NavLink>
            
          </div>

          <div className="nested2-flex">
            <div className="text-nested-flex">
     
              <h2 className="nested-head1">Work at Medium</h2>
              <div className="dis-text-nested">
              <p className="dis-text-para">
                Our team is home to engineers, journalists, artists, and
                creatives of all stripes.</p>
              </div>
            </div>
            
              <NavLink className="btn-text-flex" to="#"><div className="btn-nested">Veiw open positions</div></NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Six;
