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
import { Carousel, RadioGroup, Radio, Divider } from "rsuite";
import img from "../Assets/img.svg";

const styles = {
  radioGroupLabel: {
    padding: "8px 12px",
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "white",
  },
};

const WhySwift = () => {
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("dot");
  return (
    <>
      {/* <-----------------Navbar-----------------> */}
      <Navbar />
      {/* <-----------------Background Image-----------------> */}
      <div className="bgImg">
        <img src={bgImg} alt="bgImg" />
        <div className="textFloat">
          <div className="bigTxt4">Why Swift Transport</div>
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
          <h2 style={{fontSize: "3vw", marginBottom:"2vw"}}>Why Swift</h2>
          <p style={{fontSize: "1.9vw"}}>
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
      {/* <-----------------Testimonials-----------------> */}
      <div>
      <h2 className="testimonials">Testimonials</h2>
        <Carousel
          key={`${placement}.${shape}`}
          placement={placement}
          shape={shape}
          className="custom-slider"
        >
          <div className="carousal">
            <img src={img} alt="img" />
            <div>
              <p>
                We use Swift Transport for a few different outcomes, relocate
                equipment between Sydney and the Central Coast and an Hourly
                Work as Directed Service. We simply make a call and the next day
                a driver in a fully equipped ute arrives ready for work. When we
                need to send items to Sydney that are planned, it works out far
                better to use Swift than use our own vehicles. The vehicles are
                well presented, well fitted and the drivers are all very
                helpful, and the rate is always excellent.
              </p>
              <p className="name">Peter Santwyk, Allcott Hire, Nth Regional Area Mgr</p>
            </div>
          </div>
          <div className="carousal">
            <img src={img} alt="img" />
            <div>
              <p>
                We use Swift Transport for a few different outcomes, relocate
                equipment between Sydney and the Central Coast and an Hourly
                Work as Directed Service. We simply make a call and the next day
                a driver in a fully equipped ute arrives ready for work. When we
                need to send items to Sydney that are planned, it works out far
                better to use Swift than use our own vehicles. The vehicles are
                well presented, well fitted and the drivers are all very
                helpful, and the rate is always excellent.
              </p>
              <p className="name">Peter Santwyk, Allcott Hire, Nth Regional Area Mgr</p>
            </div>
          </div>
          <div className="carousal">
            <img src={img} alt="img" />
            <div>
              <p>
                We use Swift Transport for a few different outcomes, relocate
                equipment between Sydney and the Central Coast and an Hourly
                Work as Directed Service. We simply make a call and the next day
                a driver in a fully equipped ute arrives ready for work. When we
                need to send items to Sydney that are planned, it works out far
                better to use Swift than use our own vehicles. The vehicles are
                well presented, well fitted and the drivers are all very
                helpful, and the rate is always excellent.
              </p>
              <p className="name">Peter Santwyk, Allcott Hire, Nth Regional Area Mgr</p>
            </div>
          </div>
        </Carousel>
      </div>
      {/* <-----------------Moto-----------------> */}
      <Moto />
      {/* <-----------------Footer-----------------> */}
      {/* <Footer /> */}
    </>
  );
};

export default WhySwift;
