import React from "react";
import Navbar from "../Components/Navbar";
import bgImg from "../Assets/bgImg.svg";
import "./Pages.css";
import swissImg from "../Assets/whySwissImg.svg";
import coatsHire from "../Assets/coatsHire.svg";
import system from "../Assets/system.svg";
import abc from "../Assets/abc.svg";
import Moto from "../Components/Moto";
import Footer from "../Components/Footer";

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
      {/* <-----------------Why swift-----------------> */}
      <div className="whySwift">
        <div className="whiteBox">
          <h2>Why Swift</h2>
          <p>
            As a supplier we are a responsive business partner that can ensure
            quality and supply. We value strong relationships with our customers
            and believe that commercial relationships are a learnt skill. Our
            integrated supply chain helps us to ensure a high standard of
            product quality and service delivery. This reduces the potential
            need for rework, increases reliability of service and saves our
            customers time and money. Swift Transport is a market leader
            providing flexible, client-focused on demand transport and 3PL
            services complimented by industry leading technology. We offer
            solutions that simultaneously improve efficiencies, consistency,
            reliability and bottom line savings for our clients' businesses.
          </p>
        </div>
        <div className="swissImg">
          <img src={swissImg} alt="swissImg" />
        </div>
      </div>
      {/* <-----------------Case Studies-----------------> */}
      <div className="caseStudy">
        <h2>Case Studies</h2>
        <div className="whiteBg">
          <div className="boxImg">
            <img src={coatsHire} />
          </div>
          <div className="boxImg" id="abc">
            <img src={abc} />
          </div>
          <div className="boxImg">
            <img src={system} />
          </div>
        </div>
      </div>
      {/* <-----------------Moto-----------------> */}
      <Moto />
      {/* <-----------------Footer-----------------> */}
      <Footer />
    </>
  );
};

export default WhySwift;
