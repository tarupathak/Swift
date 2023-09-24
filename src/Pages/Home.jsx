import React from "react";
import Navbar2 from "../Components/Navbar2";
import Moto from "../Components/Moto";
import Footer from "../Components/Footer";
import img from "../Assets/bgImgHome.svg";
import truck from "../Assets/truck.svg";
import truk from "../Assets/truk.svg";
import rail from "../Assets/rail.svg";
import contain from "../Assets/contain.svg";
import house from "../Assets/house.svg";
import secure from "../Assets/secure.svg";
import orange from "../Assets/orangeArrow.svg";
import white from "../Assets/whiteArrow.svg";
import good from "../Assets/good.svg";
import card from "../Assets/card.svg";

const Home = () => {
  return (
    <>
      {/* <-----------------Navbar-----------------> */}
      <Navbar2 />
      {/* <-----------------Home Background-----------------> */}
      {/* <-----------------Truck Image Part-----------------> */}
      <div className="home">
        <div className="redBack">
          <div className="blueBack">
            <h2 className="truckTxt">
              A fleet capable of much more than you’d think
            </h2>
            <p className="smlTruckTxt">
              With a diverse range of utes, trucks and semi-trailers, Swift
              Transport is capable of much more than you'd think. Combine our
              versatile fleet wth our industry leading technology and 'can-do'
              attitude for a winning logistics partnership with your
              organization.
            </p>
            <p className="smlTruckTxt2">
              <u>WHYSWIFT</u>
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </div>
      {/* <-----------------Services-----------------> */}
      <div className="service">
        <h3>Services</h3>
        <p className="smlTxt">
          A <span>smarter</span> container transport business
        </p>
        <p className="vsmlTxt">
          AN ON-DEMAND CONTAINER TRANSPORT SOLUTION THAT WORKS, UTILISING THE
          LATEST IN GPS, GEO-MAPPING SOFTWARE AND TECHNOLOGY.
        </p>
        <div className="flexContainer">
          <div className="flexCard">
            <p className="bigTxt1">Intermodal Rail terminal</p>
            <div className="image">
              <img src={rail} />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Empty Container Depots</p>
            <div className="image">
              <img src={contain} />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Warehousing – 3PL, FAK and eCommerce</p>
            <div className="image">
              <img src={house} />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCard">
            <p className="bigTxt1">Transport - Container, Tautliner, Bulk</p>
            <div className="image">
              <img src={truk} />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={orange} alt="arrow" />
            </div>
          </div>
          <div className="flexCol">
            <p className="bigTxt1">Bio-Security & Border Security (Customs)</p>
            <div className="image">
              <img src={secure} />
            </div>
            <p className="smlTxt1">
              Network of strategically based sites located on port (within 1km
              of container terminals) and off-port (within 15kms of capital city
              industrial zones) in all major capital cities across Australia.
              All sites are connected to the Port by High Productivity…
            </p>
            <div className="arrow">
              <img src={white} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* <---------------Contact Us-------------> */}
      <div className="contactUs">
        <div>
          <p>Have a question regarding Swift services?</p>
          <div style={{ display: "flex", fontWeight: "bold" }}>
            <p>Contact us</p>
            <image style={{ width: "4vw" }} src={white} />
          </div>
        </div>
      </div>
      {/* <-----------------Good Company-----------------> */}
      <div className="redBack2">
        <div className="redTxt">
          <p>You’ll be in good company</p>
          <img src={good} />
        </div>
        <div className="redCard">
          <img src={card} />
        </div>
      </div>
      {/* <-----------------Moto-----------------> */}
      <Moto />
      {/* <-----------------Footer-----------------> */}
      <Footer />
    </>
  );
};

export default Home;
