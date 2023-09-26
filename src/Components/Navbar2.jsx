import React from "react";
import "./Components.css";
import telephone from "../Assets/telephone.svg";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div className="navbar2">
        <div className="flexB">
          <img src={telephone} style={{height: "3vw"}}/>
          <p>Call Us 1300 779 438</p>
        </div>
        <div id="nav1">
          <Link to="/whySwift">
            <span className="navItem">
              <u>WHY SWIFT TRANSPORT</u>
            </span>
          </Link>
          <Link to="/">
            <span className="navItem">FLEET</span>
          </Link>
          <span className="navItem">COMPANY POLICIES</span>
          <span className="navItem">ABOUT US</span>
          <span className="navItem">CONTACT US</span>
        </div>
        <div id="nav2">
          <button className="navItem1" id="redBtn">
            Swift Intermodal
          </button>
          <span className="navItem1">Container Transport Solution</span>
          <span className="navItem1">Complete Warehousing Solution</span>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
