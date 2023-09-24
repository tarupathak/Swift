import React from "react";
import Navbar from "../Components/Navbar";
import bgImg from "../Assets/bgImg.svg";
import "./Pages.css";

const WhySwift = () => {
  return (
    <>
      {/* <-----------------Navbar-----------------> */}
      <Navbar />
      {/* <-----------------Background Image-----------------> */}
      <div className="bgImg">
        <img src={bgImg} alt="bgImg" />
        <div className="textFloat">
          <div className="bigTxt">Why Swift Transport</div>
          <div className="smlTxt">
            Here from our loyal customers about why they’re happy to recommend
            us to you.
          </div>
        </div>
      </div>
      {/* <-----------------Home-----------------> */}
      <div className="home">
        <div className="blueBg">
          <div className="homeTxt">
            <div className="bigTxt" id="big">
              <u>Why Swift Transport</u>
            </div>
            <div className="smlTxt2">
              Here from our loyal customers about why they’re happy to recommend
              us to you.
            </div>
            <div className="smlTxt3">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </div>
            <button>Learn More</button>
          </div>
          <div className="homeBox">
            <div className="redBox"></div>
            <div className="redBox"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySwift;
